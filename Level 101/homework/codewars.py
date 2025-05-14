
# Codewars Day ;)

# Solutions in codewars -->    

# Codewars No.1

# Solution:

def burner(c,h,o):

    water = co2 = methane = 0
    
    while h > 1 and o > 0:
        water += 1
        h -= 2
        o -= 1
    
    while c > 0 and o > 1:
        co2 += 1
        c -= 1
        o -= 2
        
    while c > 0 and h > 3:
        methane += 1
        c -= 1
        h -= 4
        
    return water,co2,methane

# Codewars No.2

# Solution:

from math import sin, radians

def stack_height_2d(layers):
    if layers == 0:
        return 0
    if layers == 1:
        return 1
    return sin(radians(60)) * (layers - 1) + 1

# Codewars No.3

# Solution:

def height(n):
    height = cat = 2000000
    for i in range(n):
        cat /= 2.5
        height += cat
    return f'{height:.3f}'