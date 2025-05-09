
# Codewars Day =>

# Codewars No.1

# Solution:

def spin_words(sentence):
    return " ".join([word[::-1] if len(word) >= 5 else word for word in sentence.split()])

# Codewars No.2

# Solution:

vow = {
    "a": "1",
    "e": "2",
    "i": "3",
    "o": "4",
    "u": "5"
}

def encode(st):
    for v in vow:
        st = st.replace(v, vow[v])
    return st

def decode(st):
    for k,v in vow.items():
        st = st.replace(v, k)
    return st

# Codewars No.3

# Solution:

def integrate(coefficient, exponent):
    ex = exponent + 1
    co = coefficient // ex
    return f"{co}x^{ex}"

# Codewars No.4

# Solution:

import math
def circle_circumference(circle):
    return round(2 * math.pi * circle.radius, 6)