
# Codewars 1
def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    
    res = []
    for i in range(cols):
        res.append([])
        for x in range(rows):
            res[i].append(matrix[x][i])
    
    return res


# Codewars 2
def unique_in_order(sequence):
    if not sequence:
        return []
    
    unique_list = [sequence[0]]
    
    for item in sequence[1:]:
        if item != unique_list[-1]:
            unique_list.append(item)
    
    return unique_list


# Codewars 3
def binary_array_to_number(arr):
    return int(''.join(map(str, arr)), 2)

# Codewars 4
def expanded_form(num):
    num_str = str(num)
    length = len(num_str)
    result = []
    for i, digit in enumerate(num_str):
        if digit != '0':
            result.append(digit + '0' * (length - i - 1))
    return ' + '.join(result)

# Codewars 5
def is_valid_IP(strng):
    parts = strng.split('.')
    if len(parts) != 4:
        return False
    for part in parts:
        if not part.isdigit() or not 0 <= int(part) <= 255 or (part[0] == '0' and len(part) > 1):
            return False
    return True