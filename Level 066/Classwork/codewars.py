
# Codewars 1

def in_asc_order(arr):
    return arr == sorted(arr)

# Codewars 2

def mxdiflg(a1, a2):
    if a1 and a2:
        return max(
            len(max(a1, key=len)) - len(min(a2, key=len)),
            len(max(a2, key=len)) - len(min(a1, key=len)))
    return -1

# Codewars 3

def flatten_and_sort(array):
    return sorted([a for i in array for a in i])

# Codewars 4

def factorial(n):
    total = 1
    while n > 0:
        total = total * n
        n -= 1
    return total

# Codewars 5

def fizzbuzz(n):
    list = []
    for i in range(n):
        if (i + 1) % 3 == 0 and (i + 1) % 5 == 0:
            list.append("FizzBuzz")
        elif (i + 1) % 3 == 0:
            list.append("Fizz")
        elif (i + 1) % 5 == 0:
            return list.append("Buzz")
        else:
            list.append(i + 1)
    return list

# Codewars 6

def row_weights(array):
    team1 = 0
    team2 = 0
    for i in range(len(array)):
        if (i + 1) % 2 == 0:
            team2 += array[i]
        else:
            team1 += array[i]
    return (team1,team2)
                        

# Codewars 7

def greet(name): 
    nickname = name.lower()
    return f"Hello {nickname.capitalize()}!"

