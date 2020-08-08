function YD (文本: string) {
    direction = 文本.substr(0, 1)
    speed = 文本.substr(1, 3)
    if (direction == "0") {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        qbit.setQbitRunSpeed(0, qbit.OrientionType.STOP)
    }
    if (direction == "1") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        qbit.setQbitRunSpeed(parseFloat(speed), qbit.OrientionType.GO_AHEAD)
    }
    if (direction == "2") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        qbit.setQbitRunSpeed(parseFloat(speed), qbit.OrientionType.GO_BACK)
    }
    if (direction == "3") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        qbit.setQbitRunSpeed(parseFloat(speed), qbit.OrientionType.TURN_LEFT)
    }
    if (direction == "4") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        qbit.setQbitRunSpeed(parseFloat(speed), qbit.OrientionType.TURN_RIGHT)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendString("pressA")
})
function BZ () {
    if (qbit.obstacleSensor(qbit.ObstacleSensor.SENSOR1_OBSTACLE)) {
        bz1 = 1
    } else {
        bz1 = 0
    }
    if (qbit.obstacleSensor(qbit.ObstacleSensor.SENSOR2_OBSTACLE)) {
        bz2 = 1
    } else {
        bz2 = 0
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString.substr(0, 2) == "YD") {
        YD(receivedString.substr(2, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    radio.sendString("pressB")
})
let bz2 = 0
let bz1 = 0
let speed = ""
let direction = ""
qbit.qbitInit()
basic.showIcon(IconNames.StickFigure)
radio.setGroup(1)
basic.forever(function () {
    BZ()
    radio.sendString("" + qbit.Ultrasonic() + ";" + bz1 + ";" + bz2)
    basic.pause(200)
})
