basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1024
    )
    serial.writeValue("X", input.acceleration(Dimension.X))
})
