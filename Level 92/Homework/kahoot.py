
# # 1) Is str data type mutable or immutable?
# → Immutable.

# 2) If str is immutable then how does .replace() method work? We are able to mutate our string even though it's immutable.

# → .replace() არ ცვლის ორიგინალ სტრიქონს, არამედ აბრუნებს ახალ სტრიქონს ცვლილებებით.

# 3) Are all collection types matched to their bracket types? list: [], tuple: {}, dict: {}, set: {}
# → არა. სწორი შესაბამისობაა:

# list: []

# tuple: ()

# dict: {}

# არა, არაა სწორი, არასწორადაა შსაბამისებული ყველა ტიპის სიები ერთმანეთის შექმნის ტიპთან.

# 4) Is sentence "I created function" syntactically correct or not?
# → არაა გრამატიკულად სწორი. სწორი იქნებოდა: "I created a function."

# 5) If python is case-sensitive language…
# → დიახ, Python არის case-sensitive ენა (e.g., Variable და variable სხვადასხვა ცვლადებია).

# 6) What will print(True + True) output?
# → 2 (True == 1, ამიტომ 1 + 1 = 2)

# 7) What will print(int("1_000_000")) output?
# → 1000000 (Python-ში ქვედახაზი დასაშვებია რიცხვებში, ვიზუალური კომფორტისთვის)

# 8) What will this code output?
# → აღარ მახსოვს დ;

# 9) Is empty list Truthy or Falsey value?
# → აიცლებლად Falsey.

# 10) What will this code output?
# → აღარ მახსოვს რა იყო დ;

# 11) Can we create list comprehension with if statement?
# → კი, რა თქმა უნდა ამის შესაძლებლობა გვაქვს, მაგალითად: [x for x in range(10) if x % 2 == 0]

# 12) Can we create list comprehension with if-else statement?
# → კი. მაგ.: [x if x % 2 == 0 else -x for x in range(5)]

# 13) Can you define function inside function?
# → კი, ე.წ. nested ან inner ფუნქციები შესაძლებელია.

# 14) Is there error type called "ZeroDivisionError"?
# → კი, ეს სტანდარტული შეცდომაა ნულზე გაყოფისას, ასეთი შეცდომა არსებობს

# 15) What are lambda functions called?
# → Lambda functions ან anonymous functions.

# 16) What will print(not "") output?
# → True (ცარიელი სტრიქონი არის Falsey, ხოლო not False == True)

# 17) If someone said "Everything is an Object in python", would it be a lie?
# → არა, ეს სიმართლეა. Python-ში ყველაფერი ობიექტია str,int,boolean,float მნიშვნელობებიც, აბსოლიტურად ყველაფერი.

# 18) Are "is" and "==" operators both exactly the same in python?
# → არა. "==" ადარებს მნიშვნელობას, "is" კი — ობიექტის იდენტურობას (memory location).

# 19) Is python high level or low level programming language?
# → Python არის high-level ენა, რაც იმას ნიშნავს რომ ყველა მარლა საფეხურზეა მანქანური ენისგან.