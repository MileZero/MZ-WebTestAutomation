const { test, page, expect } = require('@playwright/test');

test('Visual Comparison to check Navbar existence for mv', async ({ page }) => {

    await page.goto('https://milevision-stage.milezero.com/mv/FleetLoadReport.jsp?node=RDG');
    await page.getByRole('button', { name: 'AUTH0' }).click()
    await page.getByPlaceholder('username/email').fill("clmsustage")
    await page.getByPlaceholder('your password').fill("1239");
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.goto('https://milevision-stage.milezero.com/mv/FleetLoadReport.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/analyticsPayment.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/history.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/itinerary.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/locationMetrics.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/performance.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/routeMetrics.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/stopMetrics.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/timeline.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/windowMetrics.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/reportsDisplay.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/returnMapEditor.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/routeHub.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/routeManager.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/routes.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/routeView.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/serviceVersions.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/sortAreas.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/sortation.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/sortHistory.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/sortManager.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/ss/Menu.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/swagger/index.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/tipping.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/traceroute_result.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/traceroute.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/tracker.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/vehicle.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/verifiedOrders.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('ttps://milevision-stage.milezero.com/mv/viewLabel.jsp?node=RDG');
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/workforce.jsp?node=RDG')
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });
    await page.goto('https://milevision-stage.milezero.com/mv/wviewer.jsp?node=RDG')
    expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.09 });


});