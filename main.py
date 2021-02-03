group_number = 0

def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    basic.show_string("Hello!")
    if receivedString == "scissors":
        basic.show_leds("""
            . . . . #
            # . . # .
            . # # . .
            # . . # .
            . . . . #
            """)
        basic.show_string("Scissors")
    if receivedString == "rock":
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.show_string("rock")
    if receivedString == "paper":
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_string("paper")
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_forever():
    global group_number
    group_number = 0
    radio.set_group(group_number)
    group_number += 1
basic.forever(on_forever)
