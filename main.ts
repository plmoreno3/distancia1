for (let index = 0; index < 10; index++) {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
}
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.Diamond)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 80)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
    }
})
