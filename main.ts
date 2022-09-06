input.onButtonPressed(Button.A, function () {
    basic.showNumber(Garf)
    basic.clearScreen()
    basic.pause(1000)
    Garf += 1
})
input.onButtonPressed(Button.B, function () {
    Gilbert += 1
    basic.showNumber(Gilbert)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # # #
        . # # # #
        . # . # .
        `)
})
let Gilbert = 0
let Garf = 0
Garf = 0
Gilbert = 0
