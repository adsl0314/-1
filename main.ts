let 일반 = 0
let 답변 = 0
input.onButtonPressed(Button.A, function () {
    일반 = pins.analogReadPin(AnalogPin.P0)
    music.playMelody("C E G C5 - - - - ", 300)
    basic.showIcon(IconNames.Yes)
    basic.showNumber(일반)
})
input.onButtonPressed(Button.B, function () {
    답변 = pins.analogReadPin(AnalogPin.P0)
    basic.showIcon(IconNames.Happy)
    if (일반 < 답변) {
        music.playMelody("G G G G - - - - ", 300)
        basic.showString("FALSE")
    } else {
        music.playMelody("C D E F - - - - ", 300)
        basic.showString("TRUE")
    }
    basic.showNumber(답변)
})
