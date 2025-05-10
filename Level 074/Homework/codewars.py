
# Codewars 1

def missing_values(seq):
    freq = {}
    for num in seq:
        if num in freq:
            freq[num] += 1
        else:
            freq[num] = 1
    
    once = None
    twice = None
    for num, count in freq.items():
        if count == 1:
            once = num
        elif count == 2:
            twice = num

    return once * twice

# Codewars 2

def compose(s1, s2):
    splited_s1 = s1.split("\n")
    splited_s2 = s2.split("\n")
    
    length = len(splited_s2[-1])
    
    result = []
    
    for i in range(len(splited_s1)):
        result.append(splited_s1[i][:i + 1] + splited_s2[-(i + 1)][:length])
        length -= 1
        
    return "\n".join(result)