
# Codewars 1

def find_children(dancing_brigade):
    from collections import Counter
    counts = Counter(dancing_brigade)

    mothers = sorted([char for char in counts if char.isupper()])
    result = []
    for mother in mothers:
        result.append(mother)
        result.extend([mother.lower()] * counts[mother.lower()])

    return ''.join(result)

# Codewars 2

def string_transformer(s):
    reversed_words = s.split()[::-1]
    reversed_string = ' '.join(reversed_words)
    transformed_string = reversed_string.swapcase()
    return transformed_string

# Codewars 3

def hamming(a, b):
    if len(a) != len(b):
        raise ValueError("Strings must be of equal length")
    return sum(char1 != char2 for char1, char2 in zip(a, b))