
# Codewars 1

def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0 and year % 400 != 0:
            return False
        return True
        
    return False

# Codewars 2

def name_shuffler(str_):
    name = str_.split(" ")
    string = f"{name[1]} {name[0]}"
    return string

# Codewars 3

# write the function is_anagram
def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())
