
# 2) ახსენით რაში გვჭირდება super()
# super()-ს ვიყენებთ რომ parent-ის მეთოდები და ატრიბუტები გამოვიძახოთ

# 3) ახსენით როგორ მუშაობს super()
# super() აკავჭირებს მშობელ კლასს შვილთა. მაგალიტად შვილს თუ super().__init__() უწერია ეს მშობლისას . ასევე შეგვიძლია წამოვიღოთ და თან დავამატოთ რაიმე property.

# 4) გააკეთეთ super()'ის მაგალითი, ანუ აიღეთ რაიმე კლასი და როდესაც მის child class'ს შექმნით დაამატეთ ახალი property  და წამოიღეთ ძველებიც

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, my name is {self.name} and I'm {self.age} years old.")

class Employee(Person):
    def __init__(self, name, age, job):
        super().__init__(name, age) 
        self.job = job

    def work(self):
        print(f"I am a {self.job}")


Erekle2 = Employee("David", 15, "Front-End Developer")

Erekle2.introduce()
Erekle2.work()