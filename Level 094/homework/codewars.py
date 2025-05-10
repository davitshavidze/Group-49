
# Codewars Day ;)

# Codewars No.1

# Solution: 

def generate_C(size):
    arr = []
    for i in range(size):
        arr.append('C'*5*size)
    for i in range(size*3):
        arr.append('C'*size)
    for i in range(size):
        arr.append('C'*5*size)
    return '\n'.join(arr)

# Codewars No.2

# Solution:

def same_case(a, b): 
    if a.isalpha() and b.isalpha():
        
        if (a.istitle() and b.istitle()) or (a.islower() and b.islower()):           
            return 1
        else:
            return 0
    else:
        return -1

# Codewars No.3

# Solution:

def longest(a1, a2):
    return "".join(sorted(set(a1 + a2)))

# Codewars No.4

# Solution:

def disemvowel(string):
    vowels = "aeiouAEIOU"
    answer = ''
    for i in string:
        if i not in vowels:
            answer += i
    return answer

# Codewars No.5

# Solution:

def square_digits(num):
    digits = str(num)
    
    square = ''.join(str(int(digit) ** 2) for digit in digits)
    
    return int(square)

# Codewars No.6

# Solution:

def who_is_paying(name):
    list = [name]
    if len(name) > 2:
        list.append(name[0:2])
    return list

# Codewars No.7

# Solution:

def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1) ** 2
    return -1

# Codewars No.8

# Solution:

def solution(a, b):
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a
    
# Codewars No.9

# Solution:

def unique_in_order(sequence):
    if not sequence:
        return []
    
    unique_list = [sequence[0]]
    
    for item in sequence[1:]:
        if item != unique_list[-1]:
            unique_list.append(item)
    
    return unique_list

# Codewars No.10

# Solution:

def binary_array_to_number(arr):
    return int(''.join(map(str, arr)), 2)

# Codewars No.11

# Solution:

def largest_pair_sum(numbers): 
    x = max(numbers)
    numbers.remove(x)
    y = max(numbers)
    return x + y

# Codewars No.12

# Solution:

def get_participants(handshakes):
    n = 1
    while n * (n - 1) // 2 < handshakes:
        n += 1
    return n

# Codewars No.13

# Solution:

def delete_nth(order, max_e):
    counts = {}
    result = []
    for num in order:
        if counts.get(num, 0) < max_e:
            result.append(num)
            counts[num] = counts.get(num, 0) + 1
    return result

# Codewars No.14

# Solution:

def count_repeats(s):
    count = 0
    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            count += 1
    return count

# Codewars No.15

# Solution:

def bonus_time(salary, bonus):
    if bonus:
        return "$" + str(salary * 10)
    return "$" + str(salary)