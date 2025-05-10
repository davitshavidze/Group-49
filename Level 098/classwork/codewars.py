
# Codewars Day ;)

# Codewars No.1

# Solution:

def move_zeros(lst):
    no_zero = [x for x in lst if x != 0]
    zero = [0] * (len(lst) - len(no_zero))
    return no_zero + zero

# Codewars No.2

# Solution:

def generate_hashtag(s):
    if not s.strip():
        return False
    
    formatted_str = "#" + "".join(word.capitalize() for word in s.split())
    
    return formatted_str if len(formatted_str) <= 140 else False

# Codewars No.3

# Solution:

def pig_it(text):
    return ' '.join(
        word[1:] + word[0] + "ay" if word.isalpha() else word
        for word in text.split()
    )

# Codewars No.4

# Solution:

def domain_name(url):
    url = url.replace("http://", "").replace("https://", "").replace("www.", "")
    
    return url.split(".")[0]