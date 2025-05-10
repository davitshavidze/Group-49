
# Codewars 1 - Wery Hard

def speedify(s): 

    lst = [' '] * (len(s)+26)
    for i,c in enumerate(s):
        lst[i+ord(c)-65] = c
    return ''.join(lst).rstrip()