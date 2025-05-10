
# 1) შექმენით Motorcycle class'ი, 4 attribute'ით და 1 class variable'ით. class variable'მა უნდა დათვალოს რამდენი მოტოციკლეტი გაკეთდა, დანარჩენი თქვენ მოიფიქრეთ, ატრიბუტები რა იქნება და ა.შ

class motorcycle:
    create_counter = 0

    def __init__(self, brand, year, color, hp):
        self.brand = brand
        self.year = year
        self.color = color
        self.hp = hp
        motorcycle.create_counter += 1

bike1 = motorcycle("Yamaha",2019,"Black", 80)
bike2 = motorcycle("Kawasaki", 2020, "White", 100)
bike3 = motorcycle("Honda", 2018, "Black", 60)

print(bike1.brand, bike1.year, bike1.color, bike1.hp)
print(bike2.brand, bike2.year, bike2.color, bike2.hp)
print(bike3.brand, bike3.year, bike3.color, bike3.hp)

# 2) გააკეთეთ inheritance'ს მაგალითი ცხოველებზე (3 child class)

# Parent class:

class Animal:
    def  __init__(self, name):
        self.name = name


# Child class:
class Dog(Animal):
    def speak(self):
        print(f"{self.name} says: Woof!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} says: Meow!")

class Bird(Animal):
    def speak(self):
        print(f"{self.name} says: Tweet!")

dog = Dog("Galaxy_Destroyer")
cat = Cat("Kit-Kat")
bird = Bird("Tweeter")

dog.speak()
cat.speak()
bird.speak()

# 3) ახსენით როგორ მუშაობს inheritance
# Inheritance-ში მუშაობს parent და child. child class თან მიყვება მშობლისგან "გენებში" დამახასიათებელი რამეები ანუ inheritance.

# 4) ახსენით რა შემთხვევაში გვჭირდება inheritanceის გამოყენება
# inheritance-ს გამოყენება გვჭირდება თუ მაგალითად კლასებს ვაკეთებთ იმ თემაზე რასაც ორი/რამდენიმე ჯგუფი გააჩნია და მაგ ჯგუფებს ერთი/რამდენიმე თვისება ან რამე აერთიანებს

# 5) მოიძიეთ ინფორმაცია და გაიგეთ რა არის multiple inheritance
# თუ child class მემკვიდრეობით ერთზე მეტ მშობელს იღებს მაშინ მას multiple inheritance ეწოდება