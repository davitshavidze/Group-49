
# Codewars 1

def count_repeats(s):
    count = 0
    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            count += 1
    return count


# Codewars 2

def tower_builder(n_floors):
    tower = []
    width = 2 * n_floors - 1
    for i in range(n_floors):
        stars = '*' * (2 * i + 1)
        floor = stars.center(width)
        tower.append(floor)
    return tower

# Codewars 3

def sortme(arr):
    return sorted(arr, key=str.lower)