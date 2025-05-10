
# 1) შექმენით Abstract Clasess მაგალითი

from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"


dog = Dog()
cat = Cat()

print(dog.make_sound())
print(cat.make_sound())

# 2) შექმენით polymorphism'ის მაგალითი

class Bird:
    def move(self):
        return "Birds can fly!"

class Penguin(Bird):
    def move(self):
        return "Penguins can swim, but they cannot fly."

def show_movement(animal):
    print(animal.move())

bird = Bird()
penguin = Penguin()

show_movement(bird) 
show_movement(penguin) 

# 3) ახსენით როგორ მუშაობს თითოეული მათგანი

# Polymorphism ნიშნავს, რომ კლასები ან ობიექტები შეიძლება ერთნაირად შეასრულონ სხვადასხვა ფუნქციონალი. ეს საშუალებას გვაძლევს ერთი და იგივე ინტერფეისით ვმართოთ სხვადასხვა ტიპის ობიექტები. მაგალითად, ერთი და იგივე მეთოდი სხვადასხვა კლასებში შეიძლება სხვადასხვანაირად იყოს განსახიერებული.

# Abstract class არის კლასი, რომელსაც არ შეუძლია უშუალოდ ობიექტების შექმნა, თუმცა ის შეიცავს მეთოდების შაბლონებს, რომლებიც შვილმა კლასებმა უნდა განახორციელონ. Abstract კლასები გამოიყენება, როცა გვსურს შექმნათ ზოგადი საფუძველი, რომელიც სპეციფიკურ დეტალებს შვილ კლასებში შეივსებს. Python-ში ამისთვის ვიყენებთ abc (Abstract Base Classes) (ABC) მოდულს.

