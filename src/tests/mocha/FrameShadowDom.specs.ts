import frameShadowPage from "src/pages/frameShadowDom.page"
import testdata from "src/resources/testdata.json"

describe.only('Shadow dom and frame demo', () => {

    beforeEach(async () => {
        await frameShadowPage.openApp()
    })

    it('should switch to frame and handle shadow dom element', async () => {
        await browser.switchToFrame(await frameShadowPage.snacksFrame)
        const shadowTeaElement = frameShadowPage.snacksShadowDom.shadow$("#tea")
        await shadowTeaElement.setValue(testdata.shadowDomData.tea)
        await expect(shadowTeaElement).toHaveValue(testdata.shadowDomData.tea)
    })

    it('should switch to frame inside shadow dom', async () => {
        const frameElement = await frameShadowPage.username.shadow$("#pact1")
        await browser.switchToFrame(frameElement);
        await frameShadowPage.country.setValue(testdata.shadowDomData.country);
        await expect(frameShadowPage.country).toHaveValue(testdata.shadowDomData.country)
    })

})