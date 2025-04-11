
# codewars 1
def Greet(language):

    if language=='english':
        return('Welcome')
    elif language=='czech':
        return('Vitejte')
    elif language=='danish':
        return('Velkomst')
    elif language=='dutch':
        return ('Welkom')
    elif language=='estonian':
        return('Tere tulemast')
    elif language=='finnish':
        return('Tervetuloa')
    elif language=='flemish':
        return('Welgekomen')
    elif language=='french':
        return('Bienvenue')
    elif language=='german':
        return('Willkommen')
    elif language=='irish':
        return('Failte')
    elif language=='italian':
        return('Benvenuto')
    elif language=='latvian':
        return ('Gaidits')
    elif language=='lithuanian':
        return ('Laukiamas')
    elif language=='polish':
        return ('Witamy')
    elif language=='spanish':
        return('Bienvenido')
    elif language=='swedish':
        return('Valkommen')
    elif language=='welsh':
        return('Croeso')
    else:
        return('Welcome')
    
# codewars 2

la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5

total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals

# codewars 3

def two_sort(array):
    array.sort()
    return "***".join(array[0])

# codewars 4

def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    else:
        return "drink whisky"
    
# codewars 5

def solution(a, b):
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a
    
# codewars 6 

def fix_the_meerkat(arr):
    return arr[::-1]