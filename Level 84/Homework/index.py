# 1) მოიძიეთ ინფორმაცია abstractmethod'ზე
# abstract method არის მეთოდი რომელსაც აქვს დეკლარაცია მაგრამ არ აქვს განხორციელება.ისინი გამოიყენება რომ შეიქმნას ინტერფეისი ან კონტრაქტი რომელიც შემდგომში უნდა იყოს გამოყენებული subclass-ისგან(child class)

# 2) ჩამოწერეთ რა გავიარეთ კლასებში და ახსენით თითეული პუნქტი დეტალურად

# Python-ში კლასი (Class) არის ობიექტზე ორიენტირებული პროგრამირების (Object-Oriented Programming - OOP) საფუძვლების ერთ-ერთი მთავარი ელემენტი. ის წარმოადგენს შაბლონს, რომელიც განსაზღვრავს ობიექტების თვისებებს (Attributes) და ქცევას (Methods). კლასები საშუალებას გვაძლევს უფრო სტრუქტურული და გაწესრიგებული კოდი დავწეროთ.


# 3) გააკეთეთ multiple inheritance'ს მაგალითი

class Animal:
    def eat(self):
        return "This animal is eating."

class Bird:
    def fly(self):
        return "This bird is flying."

class Bat(Animal, Bird):
    def use_sonar(self):
        return "This bat is using its sonar."

bat = Bat()

print(bat.eat())        
print(bat.fly())         
print(bat.use_sonar())   

# 4) გააკეთეთ multilevel inheritance'ს მაგალითი

class Grandparent:
    def family_history(self):
        return "This is the family history."

class Parent(Grandparent):
    def parenting_style(self):
        return "This is the parenting style."

class Child(Parent):
    def hobbies(self):
        return "This child loves painting and reading."

child = Child()

print(child.family_history())  
print(child.parenting_style())
print(child.hobbies())        

# 5) დაწერეთ კოდი სადაც გამოიყენებთ super() ფუნქციას

class Parent:
    def __init__(self, name):
        self.name = name
    
    def display(self):
        return f"Name: {self.name}"

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age
    
    def display(self):
        parent_display = super().display()
        return f"{parent_display}, Age: {self.age}"

child = Child("David", 15)

print(child.display())  