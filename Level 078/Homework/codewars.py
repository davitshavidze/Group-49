
# Codewars 1

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
    

# Codewars 2

def dig_pow(n, p):
    sum = 0
    for c in str(n):
        sum += int(c) ** p
        p += 1
    if sum % n == 0:
        return sum / n
    else:
        return -1
    
# Codewars 3

def matrix_div(result, factor, position):
    n = len(result)
    k = len(factor[0])

    other_factor = [[0] * k for _ in range(n)]

    if position == 0:
        for i in range(n):
            for j in range(k):
                other_factor[i][j] = result[i][j][0] // factor[i][0]
    else:
        for i in range(n):
                other_factor[i][j] = result[i][j][0] // factor[j][0]

    return other_factor


# Codewars 4

def draw_stairs(n):
    for i in range(n):
        return (" " * i + "I")
    
# Codewars 5

def usdcny(usd):
    sum = usd * 6.75
    return f"{sum:.2f} Chinese Yuan"

