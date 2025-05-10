
# 1) - ახსენით რა არის abstractclasses

# Abstract class არის კლასი, რომელსაც არ შეუძლია უშუალოდ ობიექტების შექმნა, თუმცა ის შეიცავს მეთოდების შაბლონებს, რომლებიც შვილმა კლასებმა უნდა განახორციელონ. Abstract კლასები გამოიყენება, როცა გვსურს შექმნათ ზოგადი საფუძველი, რომელიც სპეციფიკურ დეტალებს შვილ კლასებში შეივსებს. Python-ში ამისთვის ვიყენებთ abc (Abstract Base Classes) მოდულს.


# 2) ახსენით რა არის და რას ნიშნავს polymorphism

# Polymorphism ნიშნავს, რომ კლასები ან ობიექტები შეიძლება ერთნაირად შეასრულონ სხვადასხვა ფუნქციონალი. ეს საშუალებას გვაძლევს ერთი და იგივე ინტერფეისით ვმართოთ სხვადასხვა ტიპის ობიექტები. მაგალითად, ერთი და იგივე მეთოდი სხვადასხვა კლასებში შეიძლება სხვადასხვანაირად იყოს განსახიერებული.

# 3) ახსენით რა არის და რას ნიშნავს aggregation

# Aggregation არის ორი კლასის ურთიერთობა, სადაც ერთი კლასი მოიცავს მეორეს, მაგრამ ამავე დროს ეს ორი კლასი ერთმანეთზე დამოუკიდებელია. ეს გამოხატავს ურთიერთობას "ხარისხით" ან "გახდი ნაწილად, მაგრამ დამოუკიდებლად".


# 4) გააკეთეთ abstractclasses მაგალითი

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


# 5) გააკეთეთ polymorphismის მაგალითი

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

# 6) გააკეთეთ aggreagationის მაგალითი

class Engine:
    def start(self):
        return "Engine is starting..."

class Car:
    def __init__(self, engine):
        self.engine = engine 
    
    def drive(self):
        return self.engine.start() + " Car is driving!"

engine = Engine()
car = Car(engine)

print(car.drive())
