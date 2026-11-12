import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

test("complete page loads without runtime errors and remains usable at intermediate widths", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Build skills that actually move you forward.",
  );
  for (const name of [
    "Learn something worth knowing.",
    "Designing products people understand.",
    "Less browsing. More learning.",
    "Meet international students & teachers",
    "Get in touch",
    "What will you learn next?",
  ]) {
    await expect(
      page.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
  }
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
  }
  await page.evaluate(() =>
    Promise.all(Array.from(document.images, (image) => image.decode())),
  );
  await page.evaluate(() => window.scrollTo(0, 0));
  await mkdir(".artifacts/qa", { recursive: true });
  await page.screenshot({
    path: `.artifacts/qa/${testInfo.project.name}.png`,
    fullPage: true,
  });
  expect(errors).toEqual([]);
  for (const width of testInfo.project.name === "mobile"
    ? [320, 375, 402]
    : [768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    // Geometry is measured here because horizontal overflow has no accessible-role equivalent.
    const geometry = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      overflow: Array.from(document.querySelectorAll("body *"))
        .filter(
          (element) => element.getBoundingClientRect().right > innerWidth + 1,
        )
        .map((element) => ({
          tag: element.tagName,
          class: element.className,
          right: element.getBoundingClientRect().right,
        })),
    }));
    expect(
      geometry.width,
      `${width}px: ${JSON.stringify(geometry.overflow)}`,
    ).toBe(width);
  }
});

test("mobile navigation supports keyboard dismissal and closes after navigation", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "mobile",
    "Covered in the mobile project",
  );
  await page.setViewportSize({ width: 402, height: 874 });
  await page.goto("/");
  const open = page.getByRole("button", { name: "Open menu" });
  await open.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(open).toBeFocused();
  await expect(open).toHaveAttribute("aria-expanded", "false");
  await open.click();
  await page.getByRole("link", { name: "Start learning", exact: true }).focus();
  await page.keyboard.press("Tab");
  await expect(open).toHaveAttribute("aria-expanded", "false");
  await open.click();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(
    page.getByRole("button", { name: "Open menu", includeHidden: true }),
  ).toHaveAttribute("aria-expanded", "false");
  await page.setViewportSize({ width: 402, height: 874 });
  await expect(open).toHaveAttribute("aria-expanded", "false");
  await open.click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Community", exact: true })
    .click();
  await expect(page).toHaveURL(/#community$/);
  await expect(open).toHaveAttribute("aria-expanded", "false");
});

test("course preview opens by keyboard and returns focus when dismissed", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const explore = page.getByRole("button", { name: "Explore Product Design" });
  await explore.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("dialog", { name: "Product Design", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(explore).toBeFocused();
  await page.getByRole("button", { name: "View course", exact: true }).click();
  const preview = page.getByRole("dialog", {
    name: "Designing products people understand.",
  });
  await expect(preview).toContainText("8 lessons · 2h 40min · Intermediate");
  const box = await preview.boundingBox();
  const viewport = page.viewportSize();
  if (!box || !viewport) throw new Error("Dialog geometry is unavailable");
  expect(box.x).toBeCloseTo((viewport.width - box.width) / 2, 0);
  expect(box.y).toBeCloseTo((viewport.height - box.height) / 2, 0);
  await mkdir(".artifacts/qa", { recursive: true });
  await page.screenshot({
    path: `.artifacts/qa/dialog-${testInfo.project.name}.png`,
  });
  await preview.getByRole("link", { name: "Get in touch" }).click();
  await expect(preview).not.toBeVisible();
  await expect(page).toHaveURL(/#contact$/);
});

test("contact form rejects invalid input and acknowledges a local preview without network transmission", async ({
  page,
}, testInfo) => {
  const mobile = testInfo.project.name === "mobile";
  const copy = mobile
    ? {
        name: "Nome completo",
        email: "E-mail",
        question: "Sua dúvida",
        send: "Enviar mensagem",
        thanks: "Obrigado",
        notice: "Nada foi salvo nem enviado.",
        reset: "Escrever outra mensagem",
      }
    : {
        name: "Full name",
        email: "Email",
        question: "Your question",
        send: "Send message",
        thanks: "Thank you",
        notice: "Nothing was saved or sent.",
        reset: "Write another message",
      };
  const outbound: string[] = [];
  await page.goto("/");
  page.on("request", (request) => {
    if (request.method() === "POST") outbound.push(request.url());
  });
  const name = page.getByRole("textbox", {
    name: copy.name,
    exact: true,
  });
  const email = page.getByRole("textbox", { name: copy.email, exact: true });
  const question = page.getByRole("textbox", {
    name: copy.question,
    exact: true,
  });
  const send = page.getByRole("button", {
    name: copy.send,
    exact: true,
  });
  await send.click();
  await expect(name).toBeFocused();
  await name.fill("   ");
  await email.fill("learner@example.com");
  await question.fill("I would like to learn more about design.");
  await send.click();
  await expect(name).toBeFocused();
  await name.fill("Sam Learner");
  await page.setViewportSize({ width: mobile ? 1280 : 402, height: 900 });
  await expect(
    page.getByRole("textbox", {
      name: mobile ? "Full name" : "Nome completo",
      exact: true,
    }),
  ).toHaveValue("Sam Learner");
  await page.setViewportSize({ width: mobile ? 402 : 1280, height: 900 });
  await email.fill("not-an-email");
  await send.click();
  await expect(email).toBeFocused();
  await email.fill("learner@example.com");
  await question.fill("   ");
  await send.click();
  await expect(question).toBeFocused();
  await question.fill("I would like to learn more about design.");
  await send.click();
  await expect(page.getByRole("status")).toContainText(
    `${copy.thanks}, Sam Learner.`,
  );
  await expect(page.getByRole("status")).toContainText(copy.notice);
  expect(outbound).toEqual([]);
  const reset = page.getByRole("button", { name: copy.reset, exact: true });
  await reset.focus();
  await page.setViewportSize({ width: mobile ? 1280 : 402, height: 900 });
  await expect(
    page.getByRole("button", {
      name: mobile ? "Write another message" : "Escrever outra mensagem",
      exact: true,
    }),
  ).toBeFocused();
  await page.setViewportSize({ width: mobile ? 402 : 1280, height: 900 });
  await reset.click();
  await expect(name).toHaveValue("");
  await expect(name).toBeFocused();
});

test("account and policy controls disclose their demo scope without collecting credentials", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Open menu" }).click();
  const login = page.getByRole("button", { name: "Log in", exact: true });
  await login.click();
  const loginPreview = page.getByRole("dialog", {
    name: "Log in",
    exact: true,
  });
  await expect(loginPreview).toContainText(
    "No login credentials are collected.",
  );
  await expect(loginPreview.getByRole("textbox")).toHaveCount(0);
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(loginPreview).not.toBeVisible();
  await expect(login).toBeFocused();
  await login.click();
  await loginPreview
    .getByRole("link", { name: "Get in touch", exact: true })
    .click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(loginPreview).not.toBeVisible();
  if (testInfo.project.name === "mobile") {
    await expect(
      page.getByRole("button", { name: "Open menu", exact: true }),
    ).toHaveAttribute("aria-expanded", "false");
  }
  const terms = page.getByRole("button", { name: "Terms", exact: true });
  await terms.click();
  const termsPreview = page.getByRole("dialog", { name: "Terms", exact: true });
  await expect(termsPreview).toContainText("not a terms-of-service agreement");
  await mkdir(".artifacts/qa", { recursive: true });
  await page.screenshot({
    path: `.artifacts/qa/policy-${testInfo.project.name}.png`,
  });
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await termsPreview.getByRole("button", { name: "Close preview" }).click();
  await expect(terms).toBeFocused();
});

test("page and interactive dialogs satisfy automated WCAG A/AA checks", async ({
  page,
}) => {
  await page.goto("/");
  const scan = () =>
    new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
  expect((await scan()).violations).toEqual([]);
  await page.getByRole("button", { name: "View course", exact: true }).click();
  expect((await scan()).violations).toEqual([]);
});

test("native form fallback does not serialize personal fields without JavaScript", async ({
  browser,
  baseURL,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "One native fallback check covers the server-rendered form",
  );
  if (!baseURL) throw new Error("Test server URL is unavailable");
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(baseURL);
    await page
      .getByRole("textbox", { name: "Full name", exact: true })
      .fill("Sam Learner");
    await page
      .getByRole("textbox", { name: "Email", exact: true })
      .fill("learner@example.com");
    await page
      .getByRole("textbox", { name: "Your question", exact: true })
      .fill("Private demonstration input");
    const [navigation] = await Promise.all([
      page.waitForRequest((request) => request.isNavigationRequest()),
      page.getByRole("button", { name: "Send message", exact: true }).click(),
    ]);
    expect(new URL(navigation.url()).search).toBe("");
    expect(navigation.postData()).toBeNull();
  } finally {
    await context.close();
  }
});
