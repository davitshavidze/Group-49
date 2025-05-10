
# Codewars 1

def find_multiples(integer, limit):
    multiples = []
    for i in range(integer, limit + 1, integer):
        multiples.append(i)
    return multiples

# Codewars 2

a = "code"
b = "wa.rs"
name = a + b

# Codewars 3

def create_array(n):
    res=[]
    i=1
    while i<=n:
        res +=[i]
        i = i + 1
    return res

# Codewars 4

def xor(a,b):
    if a == b:
        return False
    elif a or b:
        return True
    
# Codewars 5

def get_real_floor(n):
    if n == 0:
        return 0
    elif n > 13:
        return n - 2
    elif n < 0:
        return  n
    return n - 1

# Codewars 6

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    return [bird for bird in birds if bird not in geese]

# Codewars 7

def divisible_by(numbers, divisor):
    list = []
    for i in range(len(numbers)):
        if numbers[i] % divisor == 0:
            list.append(numbers[i])
    return list

# Codewars 8

def name_shuffler(str_):
    name = str_.split(" ")
    string = f"{name[1]} {name[0]}"
    return string

# Codewars 9

def pipe_fix(nums):
    return list(range(min(nums), max(nums) + 1))

# Codewars 10

def sale_hotdogs(n):
    if n < 5:
        return n * 100
    elif n >= 5 and n < 10:
        return n * 95
    else:
        return n * 90