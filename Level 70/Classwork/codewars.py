
# Codewars 1
def largest_pair_sum(numbers): 
    x = max(numbers)
    numbers.remove(x)
    y = max(numbers)
    return x + y


[
    [5, 23, 100, 1],
    [50, 10, 8,9],
    [5, 6, 2, 3],
    [11, 7, 4, 49]
]

# Codewars 2

def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    
    res = []
    for i in range(cols):
        res.append([])
        for x in range(rows):
            res[i].append(matrix[x][i])
    
    return res

# Codewars 3

def unique_in_order(sequence):
    if not sequence:
        return []
    
    unique_list = [sequence[0]]
    
    for i in sequence[1:]:
        if i != unique_list[-1]:
            unique_list.append(i)
    
    return unique_list