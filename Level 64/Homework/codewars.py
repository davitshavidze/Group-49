
# Codewars 1

def plural(n):
    return n != 1

# Codewars 2

def problem(a):
    if isinstance(a,str):
        return "Error"
    return a * 50 + 6

# Codewars 3

def multi_table(number):
    table = ""
    for i in range(1, 11):
        table += f"{i} * {number} = {i * number}\n"
    return table.strip()

# Codewars 4

def capitalize_word (word : str) -> str:
    word = word.capitalize()
    return word

# Codewars 5

def add_five(num):
    total = num + 5
    return total