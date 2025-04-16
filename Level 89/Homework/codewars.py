
# Codewars 1

def is_digit(n):
    if n is None:
        return False
    if len(n) == 1 and n.isdigit():
        return True
    else:
        return False


# Codewars 2

def list_animals(animals):
    result = ""
    for i in range(len(animals)):
        result += str(i+1) + ". " + animals[i] + "\n"
    return result

# Codewars 3

def final_grade(exam, projects):
    if exam > 90 or projects > 10:
        return 100
    elif exam > 75 and projects >= 5:
        return 90
    elif exam > 50 and projects >= 2:
        return 75
    else:
        return 0


# Codewars 4

def kata_13_december(lst): 
    return [num for num in lst if num % 2 != 0]

# Codewars 5

def better_than_average(class_points, your_points):
    average_score = sum(class_points) / len(class_points)
    return your_points > average_score

# Codewars 6

def add_length(str_):
    return [str_ + " " + str(len(str_)) for str_ in str_.split()]

# Codewars 7

def count_char_occurrences(strng, char):
    return strng.count(char)

# Codewars 8

def in_asc_order(arr):
    return arr == sorted(arr)

# Codewars 9

def mxdiflg(a1, a2):
    if a1 and a2:
        return max(
            len(max(a1, key=len)) - len(min(a2, key=len)),
            len(max(a2, key=len)) - len(min(a1, key=len)))
    return -1

# Codewars 10

def flatten_and_sort(array):
    return sorted([a for i in array for a in i])