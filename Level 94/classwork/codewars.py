
# Codewars Day ;)

# Codewars | 8 kyu --> 

# Codewars No.1 

# Solution:

def update_light(current):
    if current == 'green':
        return 'yellow'
    elif current == 'yellow':
        return 'red'
    else:
        return 'green'
    

# Codewars No.2

# Solution:

def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]

# Codewars No.3

# Solution:

def distinct(seq):
    s = []
    for i in seq:
        if i not in s:
            s.append(i)
    return s

# Codewars No.4

# Solution:

def _if(bool, func1, func2):
    if bool == True:
        func1()
    else:
        func2()

# Codewars No.5

# Solution:

def subtract_sum(number):
    return "apple"

# Codewars | 7 kyu -->

# Codewars No.6

# Solution:

def friend(x):
    return [i for i in x if len(i) == 4]

# Codewars No.7

# Solution:

def reverse_words(text):
    list = []
    for i in text.split(' '):
        list.append(i[::-1])
        
    return ' '.join(list)

# Codewars No.8 

# Solution:

def odd_or_even(arr):
    summary = sum(arr)
    if summary % 2 == 0:
        return "even"
    else:
        return "odd"


# Codewars | 6 kyu -->

# Codewars No.9

# Solution:



