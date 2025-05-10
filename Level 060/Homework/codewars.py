
# codewars 1

def to_alternating_case(string):
    str = ""
    for i in string:
        if i.isupper():
            str = str + i.lower()
        elif i.islower():
            str = str + i.upper()
        else:
            str += i
    return str

# codewars 2

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

# codewars 3

def bonus_time(salary, bonus):
    if bonus:
        return "$" + str(salary * 10)
    return "$" + str(salary)

# codewars 4

def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]

