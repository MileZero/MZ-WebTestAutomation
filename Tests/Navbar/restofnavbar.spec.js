const { test, page, expect } = require('@playwright/test');

test('Visual Comparison to check Navbar existence for mv', async ({ page }) => {

    await page.goto('https://milevision-stage.milezero.com/mv/vueTemplate.jsp?node=RDG');
    await page.getByRole('button', { name: 'AUTH0' }).click()
    await page.getByPlaceholder('username/email').fill("clmsustage")
    await page.getByPlaceholder('your password').fill("1234");
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByPlaceholder('username/email').fill("clmsustage")
    await page.getByPlaceholder('your password').fill("1234");
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.goto('https://milevision-stage.milezero.com/mv/vueTemplate.jsp?node=RDG');
    await page.getByText('Toggle Navbar sessionStorage (need to be refresh for other pages): disabled').click(); 

    await page.goto('https://milevision-stage.milezero.com/mv/alerts.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/analyticsHandling.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/analyticsPayment.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/analyticsRoute.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/areas.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/edg-dispatch.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/labels.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/manageVehicles.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/manageWorkers.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/notes.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/packagesViewer.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/plannerHoursConfig.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/reports/drilldown.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/reports/osd.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/reports/path.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/reports/sortAssociateMetrics.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/route.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/routelet.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/routeShipment.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/routesum.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/routeTools.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/shortViewer.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/specialAddress.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/update.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/updateMinimal.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/uploadResult.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    await page.goto('https://milevision-stage.milezero.com/mv/worker.jsp?node=RDG')
    await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();


    // await page.goto('https://milevision-stage.milezero.com/mv/history.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/itinerary.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/locationMetrics.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/performance.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/routeMetrics.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/stopMetrics.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/timeline.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/windowMetrics.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/reportsDisplay.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/returnMapEditor.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/ss/Menu.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/swagger/index.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/tipping.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/traceroute_result.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/traceroute.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();
    // await page.goto('https://milevision-stage.milezero.com/mv/tracker.jsp?node=RDG')
    // await expect.soft(page.getByTitle('Configure').locator('a')).toBeVisible();


});