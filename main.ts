input.onButtonPressed(Button.A, function () {
    radio.sendValue("button", 1)
})
radio.onReceivedString(function (receivedString) {
    radio.sendString(receivedString)
    if (receivedString == "0") {
        basic.showIcon(IconNames.Heart)
        qbit.setQbitRunSpeed(0, qbit.OrientionType.STOP)
    }
    if (receivedString == "1") {
        basic.showIcon(IconNames.Heart)
        qbit.setQbitRunSpeed(35, qbit.OrientionType.GO_AHEAD)
    }
    if (receivedString == "2") {
        basic.showIcon(IconNames.Heart)
        qbit.setQbitRunSpeed(35, qbit.OrientionType.GO_BACK)
    }
    if (receivedString == "3") {
        basic.showIcon(IconNames.Heart)
        qbit.setQbitRunSpeed(15, qbit.OrientionType.TURN_LEFT)
    }
    if (receivedString == "4") {
        basic.showIcon(IconNames.Heart)
        qbit.setQbitRunSpeed(15, qbit.OrientionType.TURN_RIGHT)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("button", 2)
})
qbit.qbitInit()
basic.showIcon(IconNames.StickFigure)
radio.setGroup(1)
