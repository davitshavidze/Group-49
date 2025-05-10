
# codewars 1 

def create_phone_number(n):
    return f"({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}"

# codewars 2

def likes(names):
    n = len(names)
    if n == 0:
        return "no one likes this"
    elif n == 1:
        return f"{names[0]} likes this"
    elif n == 2:
        return f"{names[0]} and {names[1]} like this"
    elif n == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {n-2} others like this"
    
# codewars 3

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num
    return None


# codewars 4

def move_zeros(lst):
    no_zero = [x for x in lst if x != 0]
    zero = [0] * (len(lst) - len(no_zero))
    return no_zero + zero

