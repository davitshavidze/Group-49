// 1) შექმენით ობიექტი, სადაც გექენებათ 5 კუთვნილება. თქვენი დავალებაა გადაუაროთ ამ ობიექტს for in ციკლის მეშვეობით და დაბეჭდოთ ამ ობიექტში თითოეული კუთვნილების მნიშვნელობა

const person = {
    name: "David",
    age: 15,
    profession: "Front-End Developer",
    city: "Tbilisi",
    hobby: "Coding"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

