import { expect, test } from "@playwright/test";

test("shared previews retain their own typography and keyboard focus across host sections", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const titleStyle = () =>
    page
      .getByRole("dialog")
      .getByRole("heading")
      .evaluate((element) => {
        const style = getComputedStyle(element);
        return {
          size: style.fontSize,
          leading: style.lineHeight,
          tracking: style.letterSpacing,
          family: style.fontFamily,
        };
      });
  const focusStyle = async () => {
    const action = page
      .getByRole("dialog")
      .getByRole("link", { name: "Get in touch", exact: true });
    await action.focus();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Shift+Tab");
    await expect(action).toBeFocused();
    // Computed styling is needed to compare the visible focus indicator across different surfaces.
    return action.evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        color: style.outlineColor,
        width: style.outlineWidth,
        style: style.outlineStyle,
      };
    });
  };
  await page.getByRole("button", { name: "Explore Product Design" }).click();
  const typography = await titleStyle();
  const focus = await focusStyle();
  expect(focus).toEqual({
    color: "rgb(49, 87, 246)",
    width: "3px",
    style: "solid",
  });
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "View course", exact: true }).click();
  expect(await titleStyle()).toEqual(typography);
  expect(await focusStyle()).toEqual(focus);
  await page.keyboard.press("Escape");
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("button", { name: "Log in", exact: true }).click();
  expect(await titleStyle()).toEqual(typography);
  expect(await focusStyle()).toEqual(focus);
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Terms", exact: true }).click();
  expect(await titleStyle()).toEqual(typography);
  expect(await focusStyle()).toEqual(focus);
});
