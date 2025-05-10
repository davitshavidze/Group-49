
# 1) ახსენით რა არის კომპოზიცია, რითი განსხვავდება აგრეგაციისგან და გააკეთეთ 1 მაგალითი


# კომპოზიციად და აგრეგაციაც, როვე OOP ტიპებია, რომელიც გვეხმარება კლასებს შორის ურთიერთობის დახმარებაში და დაკავშირებაში.

# Composition 

# თუ მაგალითად რაღაც Parent კლასი გავუწერეთ Child კლასის თვისებებს, ხოლო ამის შემდეგ ამოვშლით Parenc კლასს, მაშინ პროგრამა შეწყვეტს მუშაობას. შვილობილი კლასი რეალურად დამოკიდებულია Parent კლასსზე.

# Agreggation

# თუ მაგალითად რაღაც Parent კლასს გავუწერთ Child კლასის თვისებებს, ხოლო ამის შემდეგ ამოვშლით Parent კლასს, მაშინ პროგრამა არ შეწყვეტს მუშაობას. ანუ შვილობილი კლასი შეძლებს დამოუკიდელად არსებობას და მუშაობას Parent class-ის გარეშე.


class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self, engine):
        self.engine = engine 

    def start(self):
        self.engine.start()
        print("Car started")

engine = Engine()
car = Car(engine)  
car.start()

# 2) განიხილეთ instance, static და class მეთოდები და გააკეთეთ სამივეს მაგალითი

# სულ გავქვს 3 კლასის მეთოდი, ესენია: instance, static, class მეთოდები.

# instance მეთოდი მუშაობს კონკრეტულ ობიექტზე, არ სჭირდება decorator-ი და სჭირდება პარამეტრი self
# Static მეთოდი მუშაობს ისე, რომ არ აქვს წვდომა ობიექტის ან კლასის მონაცემებზე. გამოიყენება დამხმარე ფუნქციად. სჭირდება @staticmethod დეკორატორი. 
# Class მეთოდი მუშაობს კლასსზე, სჭირდება @class decorator-ი და პარამეტრი cls

# Instance Method

class example:
    def __init__(self, value):
        self.value = value

    def instance_method(self):
        return f"method: {self.value}"

obj = example(10)
print(obj.instance_method())

# Static Method

class Example:
    @staticmethod
    def static_method():
        return "no exapmple"

print(Example.static_method())  

# Class Method

class Example2:
    class_var = "Class"

    @classmethod
    def class_method(cls):
        return f"Class method is : {cls.class_var}"

print(Example2.class_method())


# 3) გაიხსენეთ და ახსენით რა არის multiple და multilevel inheritance

# Multiple inheritance ნიშნავს იმას, რომ რომ ერთ რაიმე კლასს შეუძლია მემკვიდრეობით მიიღოს რამდენიმე მშობელი კლასი. ეს ნიშნავს, რომ შვილობილ კლასს ექნება ყველა მშობელი კლასის თვისებები და მეთოდები რომელიც აქვთ გაწერილი. მაგ: Grandparent class --> Parent class --> Child class მემკვიდრეობით

# Multilevel inheritance ნიშნავს, რომ ერთი კლასი მემკვიდრეობით იღებს კლასს, რომელიც თავის მხრივ მემკვიდრეობით იღებს სხვა კლასს და ა.შ. ეს ქმნის იერარქიულ სტრუქტურას, სადაც კლასები ერთმანეთისგან გაკოპირებენ და ითვისებენ სხვებისთვისებებს და მეთოდებს.


#  4) მოიყვანეთ მაგალითი რა შემთხვევაში დაგვჭირდება data hiding და გააკეთეთ მსგავსი რამ კოდით

# data hiding მოგეხსენებათ რომ ასევე არის OOP პროგრამირების ერთ-ერთი ნაწილი და პრინციპი, რომელიც გამოიყენება იმისათვის, რომ კლასის შიგნით არსებულ მონაცემებზე და ცვლდებზე პირდაპირი წვდომა შეზღუდული იყოს და მისი ნახვა ყველას ვერ შეეძლოს. ეს ხელს უწყობს შენახული მონაცემების უსაფრთხოების გაუმჯობესებას და მათ შეცდომებისგან, სხვისგან ნახვისგან დაცვას და ა.შ. ამის პრაქტიკული გამოყენება შეიძლება მაგ: როდესაც მომხმარებლის პირადი ინფორმაცია უნდა დავიცვათ ან შეგვაქ ინფორმაცია მომხმარებლის საბანკო რეკვიზიტების შესახებ.

class Student:

    def __init__(self, name, grades):
        self.name = name
        self.grades = grades

    def grade(self, grade):
        if 0 <= grade <= 100:
            self.__grades.append(grade)
        else:
            print("Enter exam gramde in input")

    def avarage(self):
        if self.__grades:
            return sum(self.__grades) / len(self.__grades)
        else:
            return "Your avarage is 0"
        
    def show_grades(self):
        return self.__grades
    

student = Student("Lasha", [23,89,87])

print("Exam Grade and points:", student.show_grades())
student.add_grade(95)
print("Update", student.show_grades())
print("Avarage points:", student.get_average())
