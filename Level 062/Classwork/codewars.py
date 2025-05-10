
# codewars 1

def final_grade(exam, projects):
    if exam > 90 and projects > 10:
        return 100
    if exam > 75 and projects >= 5:
        return 90
    if exam > 50 and projects >= 2:
        return 75
    return 0 

# codewars 2

def expression_matter(a, b, c):
    res = [
        a + b + c,
        a * b * c,
        a + (b * c),
        (a + b) * c,
        (a * b) + c,
        a * (b + c)
    ]
    
    return max(res)

# Codewars 3

def sum_str(a, b):
    if a == "":
        a = "0"
    if b == "":
        b == "0"
    return str(int(a) + int(b))

# codewars 4

def how_much_i_love_you(nb_petals):
    words = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ]
    return words[(nb_petals - 1) % 6]

# codewars 5

def reverse_list(l):
    return l[::-1]