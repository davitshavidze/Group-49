
# 1) შექმენით car class, მიეცით 4 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში. ამ class'ისგან შექმენით 3 ობიექტი და სამივეზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები.

class Car:
    def __init__(self, color, year, brand, horse_power):
        self.color = color
        self.year = year
        self.brand = brand
        self.horse_power = horse_power
    def drive(self):
        print(f"You're driving {self.color} {self.brand}")
        
    def stop(self):
        print(f"You stopped the car:{self.brand}")

car1 = Car("Silver", 2000, "Mercedes", 100)
car2 = Car("Cyan", 2022, "Lamborghini", 700)
car3 = Car("White", 2024, "Rolls Royce", 330)

print(car1.color, car1.year, car1.brand, car1.horse_power)
print(car2.color, car2.year, car2.brand, car2.horse_power)
print(car3.color, car3.year, car3.brand, car3.horse_power)
car1.drive()
car2.drive()
car3.drive()

car1.stop()
car2.stop()
car3.stop()

# 2) შექმენით person class, მიეცით 3 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში.  ამ class'ისგან შექმენით რამდენიმე ობიექტი და პირველ ორზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები. ასევე შექმენით დამატებითი კლასის ცვლადი რომელიც დათვლის რამდენი ადამიანია ჯამში.

class person:
    total_people = 0
    def __init__(self, eye_color, weight, height):
        self.eye_color = eye_color
        self.weight = weight
        self.height = height
        person.total_people += 1
    def info(self):
        print(f"I'm {self.height} tall and weight {self.weight}")
    def info2(self):
        print(f"I have {self.eye_color} color eyes")

person1 = person("Dark", "80kg", "185 cm")
person2 = person("blue", "70kg", "174 cm")
person3 = person("green", "60kg", "175 cm")
print(person1.eye_color, person1.weight, person1.height)
print(person2.eye_color, person2.weight, person2.height)
print(person3.eye_color, person3.weight, person3.height)
person1.info()
person2.info()
person3.info()

person1.info2()
person2.info2()
person3.info2()

print(f"Total people: {person.total_people}")

# 3) დაწერეთ რას ეწოდება dunder method
# dunder method არის მაგ: __init__ ანუ მეთოდი რომელიც ბოლოვდება __""__. ამით ვქმნით blueprint-ებს class-ში

# 4) დაწერეთ რას ეწოდება instance variables
# instance variable არის ცვლადი რომელიც არის რაიმე ობიექტში ანუ მიეკუთვნება მას

# 5) დაწერეთ რას ეწოდება class variables
# class variables ეწოდება ცვლადს რომელიც მიეკუთვნება კლასს

# 6) ახსენით რა არის blueprint
# blueprint არის მონახაზი, რომელიც შემდეგ შეგვიძლია რომ გამოვიყენოთ და რაიმე გამოგვიტანოს