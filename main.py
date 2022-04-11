x,y = 1,0
show = 5

def posunuti():
    global x,y
    for i in range(show-1):
        led.unplot(x, y)
        led.unplot(x-1, y+1)
    for i in range(show-1):
        led.plot(x, y)
        led.plot(x-1, y+1)

    basic.pause(500)
    x = x + 1
    y = y + 1


def forever():
    basic.forever(posunuti)
input.on_button_pressed(Button.AB, forever)