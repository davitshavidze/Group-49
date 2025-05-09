
# Codewars Day ;)

# Codewars No.1

# Solution:

def correct_polish_letters(st): 
    pol= {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
    }
    return "".join([pol[i] if i in pol else i for i in st])

# Codewars No.2

# Solution:

def two_highest(arg1):
    return sorted(set(arg1), reverse = True )[:2]

# Codewars No.3

# Solution:

def cookie(x):
    if type(x) == str:
        return "Who ate the last cookie? It was Zach!"
    elif type(x) == float:
        return "Who ate the last cookie? It was Monica!"
    elif type(x) == int:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"
    
# Codewars No.4

# Solution:

def type_validation(variable, _type): 
    var = str(type(variable))
    if _type in var:
        return True
    else:
        return False
    
# Codewars No.5

# Solution:

def build_string(*args):
    return "I like {}!".format(", ".join(args))

# Codewars No.6

# Solution:

def height(n):
    initial_height = 2000000
    growth_factor = 2.5
    if n == 0:
        return f"{initial_height:.3f}"
    else:
        total_height = initial_height * ((growth_factor ** n - 1) / (growth_factor - 1))
        return f"{total_height:.3f}"
    
# Codewars No.7

# Solution:

import math
def digits_average(num):
    a = str(num)
    b = []
    a = [n for n in a]
    for i in a:
        b.append(int(i))
    if(len(b) == 1):
        return b[0]
    while(len(a) > 1):
        c = 0
        while(c <= len(b) - 2):
            d = b[c] + b[c + 1]
            d = math.ceil(d / 2)
            b[c] = d
            c += 1
        del(b[len(b) - 1])
        if(len(b) == 1):
            return b[0]
