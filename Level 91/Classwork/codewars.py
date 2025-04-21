
# Codewars Day ;)

# 8 Kyu Codewars -->

# Codewars No.1

# Solution:

def bmi(weight, height):
    bmi = weight / (height * height)
    
    if bmi <= 18.5:
        return "Underweight"
    elif bmi <= 25:
        return "Normal"
    elif bmi <= 30:
        return "Overweight"
    else:
        return "Obese"
    

# Codewars No.2

# Solution

def no_boring_zeros(n):
    if n == 0:
        return 0
    else:
        n = str(n)
        while n[-1] == "0":
            n = n[:-1]
        return int(n)
    

# Codewars No.3

# Solution 

def get_planet_name(id):
    return {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune"
    } [id]


# Codewars No.4

# Solution:

def human_years_cat_years_dog_years(human_years):
    cat = 0
    dog = 0
    for i in range(1, human_years + 1):
        if i  == 1:
            cat += 15
            dog += 15
        elif i == 2:
            cat += 9
            dog += 9
        elif i >= 3:
            cat += 4
            dog += 5
            
    return [human_years, cat, dog]


# 7 Kyu Codewars --> 

# Codewars No.5

def get_count(sentence):
    vovel_count = 0
    for vow in ["a", "e", "i", "o", "u"]:
        vovel_count += sentence.count(vow)
    return vovel_count


# Codewars  No.6

def high_and_low(numbers):
    numbers = [int(x) for x in numbers.split(" ")]
    numbers.sort()
    return f"{numbers[-1]} {numbers[0]}"

# Codewars No.7

def find_short(s):
    list = s.split()
    small_word = len(list[0])
    for i in list:
        if len(i) < small_word:
            small_word = len(i)
    return small_word

