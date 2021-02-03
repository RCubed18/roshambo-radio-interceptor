let group_number = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.showString("" + (group_number))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showString("" + (group_number))
    if (receivedString == "scissors") {
        basic.showLeds(`
            . . . . #
            # . . # .
            . # # . .
            # . . # .
            . . . . #
            `)
        basic.showString("Scissors")
    }
    if (receivedString == "rock") {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showString("rock")
    }
    if (receivedString == "paper") {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showString("paper")
    }
})
basic.forever(function () {
    group_number = 0
    radio.setGroup(group_number)
    group_number += 1
})
