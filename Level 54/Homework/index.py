
# 2) Use the map function to double the numbers in a list: [2, 4, 6, 8, 10].

list = [2, 4, 6, 8, 10]
doubled_numbers = list(map(lambda x: x*2, list))
print(doubled_numbers)


# 3) Write a program using map to concatenate "Hello, " to each name in a list: ["Alice", "Bob", "Charlie"].

word = ["Alice", "Bob", "Charlie"]
hello_word = list(map(lambda x: "Hello, "+x,word))
print(hello_word)

# 4) Use map to calculate the lengths of strings in a list: ["apple", "banana", "kiwi"].

words = ["apple", "banana", "kiwi"]
len_word = list(map(lambda x: len(x),words))
print(len_word)

# 5) Use the filter function to keep only positive numbers from a list: [-5, 3, -2, 7, 0, 10].

num=[-5, 3, -2, 7, 0, 10]
positive = list(filter(lambda x: x>=0,num))
print(positive)

# 6) Write a program using filter to extract words starting with the letter "p" from a list: ["pear", "apple", "peach", "grape"].

words2 = ["pear", "apple", "peach", "grape"]
without_p=list(filter(lambda x: x[0] != "p",words2))
print(without_p)

# 7) Use filter to find numbers greater than 50 in a list: [10, 55, 42, 78, 65, 20].

nuumbers = [10, 55, 42, 78, 65, 20]
greater_50=list(filter(lambda x: x>50,nuumbers))
print(greater_50)