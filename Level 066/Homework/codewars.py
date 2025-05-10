
# Codewars 1

def count_red_beads(n):
    return 0 if n <= 2 else 2 * (n - 1)

# Codewars 2

def generate_shape(n):
    return '\n'.join('+' * n for i in range(n))

# Codewars 3

def bumps(road):
    if road.count("n") > 15:
        return "Car Dead"
    else:
        return "Woohoo!"
    
# Codewars 4 

def adjacent_element_product(array):
    max = array[0] * array[1];
    for i in range(1,len(array)-1):
        temp = array[i] * array[i+1]
        if max < temp:
            max = temp 
    return max

# Codewars 5

def filter_string(st):
    return int(''.join([char for char in st if char.isdigit()]))