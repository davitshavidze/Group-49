
# Codewars Day ;)

# Other Codewars Tasks already made in Classwork :)

# Codewars No.1

# Solution:

def to_underscore(strng: str) -> str:
    if isinstance(strng, int):
        return str(strng)
    result = ""
    for i, char in enumerate(strng):
        if char.isupper() and i > 0:
            result += "_"
        result += char.lower()
    
    return result

# Codewars No.2

# Solution:

def alphanumeric(password):
    if not password:
        return False
    
    for char in password:
        if not (char.isalnum()):
            return False
        
    return True
