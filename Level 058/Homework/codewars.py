
# Codewars 1

def who_is_paying(name):
    list = [name]
    if len(name) > 2:
        list.append(name[0:2])
    return list

# Codewars 2

def odd_count(n):
    return n // 2

# Codewars 3

def is_uppercase(inp):
    return inp == inp.upper()

# Codewars 4

def grader(score):
    if 1 >= score >= 0.9:
        return "A"
    elif 0.9 >= score >= 0.8:
        return "B"
    elif 0.8 >= score >= 0.7:
        return "C"
    elif 0.7 >= score >= 0.6:
        return "D"
    else:
        return "F"
    
# Codewars 5

def if_chuck_says_so():
    return not True
