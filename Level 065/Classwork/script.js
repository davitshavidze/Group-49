
// 1) განიხილეთ განსხვავებები და მსგავსებები python'ის dictionary'ებსა და js'ის object'ებს შორის
// მსგავსებები:

// ორივე ინახავს „გასაღები-ღირებულების“ წყვილებს.
// იყენებენ {} ფიგურულ ფრჩხილებს.
// შესაძლებელია გასაღებების დამატება და წაშლა.

// განსხვავებები:

// Python Dictionary: გასაღებები შეიძლება იყოს სხვადასხვა ტიპის (str, int, tuple).
// JavaScript Object: გასაღებები ყოველთვის არის სტრინგები ან სიმბოლოები.
// Python: არასწორ გასაღებაზე გამოაქვს შეცდომა (KeyError).
// JavaScript: არასწორ გასაღებაზე აბრუნებს undefined.

// 2) შექმენით რაიმე ობიექტი რომელსაც ექნება 3 property და ერთ-ერთი იქნება რაიმე მეთოდი
const car = {
    name: "Teodore",
    lastname: "Ratiani",
    age: 15,
    ageplus: function() {
        this.age+=1
    }
  };

// 3) ახსენით რა განსხვავებაა ფუნქციასა და მეთოდს შორის (დეტალურად)
// ფუნქცია კოდის დამოუკიდებელი ბლოკია, რომელსაც შეუძლია იყოს 
// განსაზღვრული და გამოძახებული ნებისმიერ ადგილას. არ არის დაკავშირებული რომელიმე ობიექტთან.
// მეთოდი - ფუნქციაა, რომელიც ეკუთვნის ობიექტს. მისი გამოძახება ხდება ობიექტის მეშვეობით.
//  მას აქვს წვდომა ობიექტის property-ებზე this საკვანძო სიტყვით.

// მთავარი განსხვავება: მეთოდი ყოველთვის ეკუთვნის ობიექტს და იყენებს this-ს, ხოლო ფუნქცია დამოუკიდებელია.

// 4) შექმენით person Object Constructor 3 property'ით
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  const person1 = new Person("Teodore", 15, "male");

// 5) შექმენით მანქანის Object constructor რომელსაც ექნება 5 property, აქედან ერთერთი აუცილებლად უნდა იყოს horsePower და 
// კიდევ ერთი აუცილებლად მეთოდი რომელიც ამ horsePower'ს გაზრდის 100'ით

function Car(brand, model, year, color, horsePower) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.horsePower = horsePower;
  
    this.horsePowerplus = function() {
      this.horsePower += 100;}
}