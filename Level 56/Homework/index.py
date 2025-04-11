
# Codewars 1

def is_uppercase(inp):
    return inp.upper()==inp

# Codewars 2

def monkey_count(n):
    return range(1, n+1)

# Codewars 3

def powers_of_two(n):
    return [2**x for x in range(n+1)]

# Codewars 4

def human_years_cat_years_dog_years(n):
    cat_years = 15 + (9 * (n > 1)) + (4 * (n - 2) * (n > 2))
    dog_years = 15 + (9 * (n > 1)) + (5 * (n - 2) * (n > 2))
    return [n, cat_years, dog_years]

# Codewars 5

def first_non_consecutive(arr):
    if not arr: 
        return 0
    for i, x in enumerate(arr[:-1]):
        if x + 1 != arr[i + 1]:
            return arr[i + 1]