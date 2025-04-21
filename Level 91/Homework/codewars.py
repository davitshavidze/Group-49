
# Codewars Day

# Codewars No.1

# Solution:

def zero_fuel(distance_to_pump, mpg, fuel_left):
    if distance_to_pump <= (mpg * fuel_left):
        return True
    else:
        return False
    
# Codewars No.2

# Solution:

def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)

# Codewars No.3

# Solution:

def count_by(x, n):
    nums = []
    for i in range(x, n * x + 1, x):
        nums.append(i)
        
    return nums

# Codewars No.4

# Solution:

def move(position, roll):
    return ((roll * 2) + position)

# Codewars No.5

# Solution:

def enough(cap, on, wait):
    available = cap - on
    match available:
        case space if space >= wait:
            return 0
        case _:
            return wait - available
        
# Codewars No.6

# Solution:

def between(a,b):
    list = []
    for i in range(a,b + 1):
        list.append(i)
    return list

# Codewars No.7

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

# Codewars No.8

# Solution:

def bonus_time(salary, bonus):
    if bonus:
        return "$" + str(salary * 10)
    return "$" + str(salary)

# Codewars No.9

# Solution:

def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]

# Codewars No.10

# Solution:

def count_sheep(n):
    sheep=""
    for i in range(1, n+1):
        sheep+=str(i) + " sheep..."
    return sheep

# Codewars No.11

# Solution:

def set_alarm(employed, vacation):
    if employed == True and vacation == True:
        return False
    elif employed == False and vacation == True:
        return False
    elif employed == False and vacation == False:
        return False
    elif employed == True and vacation == False:
        return True
    
# Codewars No.12

# Solution:

def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague

# Codewars No.13

# Solution:

def array_plus_array(arr1,arr2):
    sum = 0
    for i in arr1:
        sum += i
    for x in arr2:
        sum += x
    return sum
        

# Codewars No.14

# Solution:

def get_average(marks):
    sum = 0
    for i in marks:
        sum += i
    return sum // len(marks)

# Codewars No.15

# Solution:

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num
    return None


# codewars No.16

# Solution:

def move_zeros(lst):
    no_zero = [x for x in lst if x != 0]
    zero = [0] * (len(lst) - len(no_zero))
    return no_zero + zero

# Codewars No.17

# Solution:

def multi_table(number):
    table = ""
    for i in range(1, 11):
        table += f"{i} * {number} = {i * number}\n"
    return table.strip()

# Codewars No.18

# Solution: 

def capitalize_word (word : str) -> str:
    word = word.capitalize()
    return word

# Codewars No.19

# Solution:

def add_five(num):
    total = num + 5
    return total

# Codewars No.20

# Solution:

def hoop_count(n):
    if n >= 10:
        return "Great, now move on to tricks"
    else:
        return "Keep at it until you get it"
