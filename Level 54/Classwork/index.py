
# 1) რომლებია mutable მონაცემთა ტიპები?
# ესენია: list,dictionary,set. 

# 2) რომლებია immutable მონაცემთა ტიპები?
# ესენია:int, str, complex, float, tuple, .

# 3) რა ეწოდება lambda ფუნქციას მეორენაირად?
# Lambda ფუნქციას მეორენაირად "ანონიმური ფუნქცია" ეწოდება.

# 4) რა განსხვავებაა map'სა და filter'ს შორის?
# Map: ყველა ელემენტზე ამუშავებს ფუქნცია.
# filter: მხოლოდ იმ ელემენტებზე ამუშავებს რომლებიც რაიმე პირობას აკმაყოფილებენ

# 5) რა ჰქვია ორი სტრინგის შეერთებას?
# Concatenation


# map function usage

# 1.გამოიყენეთ map ფუნქცია რომ შექმნათ list'ი სადაც იქნება ამ რიცხვების კვადრატები: [1, 2, 3, 4, 5]

num=[1, 2, 3, 4, 5]
squared_num=list(map(lambda x: x ** 2 ,num))
print(squared_num)

# 2.დაწერეთ პროგრამა mapის გამოყენებით რომ გადაიყვანოთ ამ list'ში მოცემული celsius'ები fahrenheit'ში: [0, 20, 30, 40] (1 celsius == 33.8 fahrenheit)

celsius=[0, 20, 30, 40]
fahrenheit=list(map(lambda x: (x*9/5)+ 32 ,celsius))
print(fahrenheit)

# 3.გამოიყენეთ map ფუნქცია რომ გაადიდოთ ყველა სიტყვის პირველი ასო ამ list'ში: ["hello", "world", "python"].

words=["hello", "world", "python"]
big_words=list(map(lambda x: x.capitalize(), words))
print(big_words)



# filter function usage

# 1.გამოიყენეთ filter ფუნქცია რომ ამოწეროთ მხოლოდ ლუწი რიცხვები list'იდან: [1, 2, 3, 4, 5, 6, 7, 8].

numbers=[1, 2, 3, 4, 5, 6, 7, 8]
even_num=list(filter(lambda x: x % 2 == 0,numbers))
print(even_num)

# 2.დაწერეთ პროგრამა filterის გამოყენებით რომ ამოწეროთ ისეთი string'ები რომლებიც შეიცავენ 4 სიმბოლოს ან მასზე მეტს: ["cat", "house", "tree", "car"].

word_list=["cat", "house", "tree", "car"]
words_list=list(filter(lambda x: len(x) >= 4, word_list))
print(words_list)

# 3.გამოიყენეთ filter ფუნქცია რომ ამოწეროთ სამის ჯერადი რიცხვები: [3, 9, 15, 22, 27, 30].

numbers2=[3, 9, 15, 22, 27, 30]
three_numbers=list(filter(lambda x: x % 3 ==0 , numbers2))
print(three_numbers)