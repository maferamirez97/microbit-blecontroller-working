let isSouth = false
let isNorth = false
let isWest = false
let isEast = false
let y = 0
let x = 0
basic.showString("Wii")
bluetooth.startAccelerometerService()
bluetooth.startUartService()
bluetooth.startButtonService()
basic.forever(function () {
    bluetooth.uartWriteNumber(input.lightLevel())
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    isEast = x > 90
    isWest = x < -90
    isNorth = y < -90
    isSouth = y > 90
    if (isEast && isNorth) {
        basic.showArrow(ArrowNames.East)
    } else if (isEast && isSouth) {
        basic.showArrow(ArrowNames.East)
    } else if (isWest && isNorth) {
        basic.showArrow(ArrowNames.West)
    } else if (isWest && isSouth) {
        basic.showArrow(ArrowNames.West)
    } else if (isEast) {
        basic.showArrow(ArrowNames.East)
    } else if (isNorth) {
        basic.showArrow(ArrowNames.North)
    } else if (isSouth) {
        basic.showArrow(ArrowNames.South)
    } else if (isWest) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
