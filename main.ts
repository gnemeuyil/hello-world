basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        led.plot(2, 2)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        led.plot(4, 4)
    } else {
        led.unplot(4, 4)
    }
})
