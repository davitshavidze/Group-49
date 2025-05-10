
# Codewars Day

# Codewars No.1

# Solution:

def odd_count(n):
    return n // 2

# Codewars No.2

# Solution:

class Ball(object):
    def __init__(self, ball_type="regular"):
        self.ball_type = ball_type
# Codewars No.3

# Solution:

def xo(s):
    s = s.lower()
    return s.count("x") == s.count("o")

# Codewars No.4

# Solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    arr = []
    for i in birds:
        if i not in geese:
            arr.append(i)
    return(arr)

# Codewars No.5

# Solution:

def is_triangle(a, b, c):
    a, b, c = sorted([a, b, c])
    return a + b > c

# Codewars No.6

# Solution:

def format_poem(poem):
    return ".\n".join(poem.split(". "))

# Codewars No.7

# Solution:

def century(year):
    return (year + 99) // 100

# Codewars No.8

# Solution:

def main (verb, noun):
    return verb + noun

# Codewars No.9

# Solution:

def reverse_seq(n):
    arr = []
    for i in range(1, n + 1):
        arr.append(i)
        i -= 1
    return arr[::-1]

# Codewars No.10

# Solution:

def correct(s):
    str = ""
    for char in s:
        if char == "5":
            str += 'S'
        elif char == "0":
            str += 'O'
        elif char == "1":
            str += "I"
        else:
            str += char
    return str

# codewars No.11

# Solution:

def bonus_time(salary, bonus):
    if bonus:
        return "$" + str(salary * 10)
    return "$" + str(salary)

# codewars No.12

# Solution:

def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]

# Codewars No.13

# Solution:

def reverse_words(text):
    list = []
    for i in text.split(' '):
        list.append(i[::-1])
        
    return ' '.join(list)

# Codewars No.14

# Solution:

def friend(x):
    return [i for i in x if len(i) == 4]