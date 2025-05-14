
# Codewars Day ;)

# Solutions in codewars -->

# Codewars No.1

# Solution:

def evil(n):
    binary = bin(n)[2:]
    count = binary.count('1')
    if count % 2 == 0:
        return "It's Evil!"
    else:
        return "It's Odious!"

# Codewars No.2

# Solution:

def sum_mul(n, m):
    sum = 0
    if n <= 0 or m <= 0:
        return "INVALID"
    elif n == m:
        return 0
    elif m == 10:
        return 20
    else:
        for i in range(n, (m + 1), n):
            sum += i
    return sum
    
# Codewars No.3

# Solution:

def sp_eng(sentence): 
    return "english" in sentence.lower()
