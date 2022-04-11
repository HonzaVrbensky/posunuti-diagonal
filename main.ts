let [x, y] = [1, 0]
let show = 5
input.onButtonPressed(Button.AB, function forever() {
    basic.forever(function posunuti() {
        let i: number;
        
        for (i = 0; i < show - 1; i++) {
            led.unplot(x, y)
            led.unplot(x - 1, y + 1)
        }
        for (i = 0; i < show - 1; i++) {
            led.plot(x, y)
            led.plot(x - 1, y + 1)
        }
        basic.pause(500)
        x = x + 1
        y = y + 1
    })
})
