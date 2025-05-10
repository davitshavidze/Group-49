
# Codewars Day ;)

# Codewars No.1

# Solution:

def to_binary(n):
    return int(bin(n)[2:])

# Codewars No.2

# Solution:

def bin_to_decimal(inp):
    return int(inp, 2)

# Codewars No.3

# Solution:

def say_hello(name, city, state):
    return f"Hello, {' '.join(name)}! Welcome to {city}, {state}!"

# Codewars No.4

# Solution:

def position(letter):
    letter = letter.upper()
    dict = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "K": 11,
        "L": 12,
        "M": 13,
        "N": 14,
        "O": 15,
        "P": 16,
        "Q": 17,
        "R": 18,
        "S": 19,
        "T": 20,
        "U": 21,
        "V": 22,
        "W": 23,
        "X": 24,
        "Y": 25,
        "Z": 26,
    }

    return f"Position of alphabet: {dict[letter]}"


# Codewars No.5

# Solution:

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

def mod(a, b):
    return a % b

def exponent(a, b):
    return a ** b

def subt(a, b):
    return a - b
