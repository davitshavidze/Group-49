
// 1) მომხმარებელს შემოატანინეთ რიცხვი და უთხარით მისი grade (ანუ თუ მაგალითად 90'დან 100'ის ჩათვლით ექნება ქულა 
// გამოუტანეთ "Grade A", თუ 80'დან 89'ის ჩათვლით გამოუტანეთ "Grade B" და ა.შ)

let score = Number(prompt("Enter your score:"))

if (score > 90 && score <= 100){
    alert("Grade A")
}
else if (score > 80 && score <= 90){
    alert("Grade B")
}
else if (score > 70 && score <= 80){
    alert("Grade C")
}
else if (score > 60 && score <= 70){
    alert("Grade D")
}
else if (score <= 60){
    alert("Grade F")
}


// 2) მომხმარებელს შემოატანინეთ საკუთარი ასაკი, თუ იქნება 13 წელზე ნაკლების გამოუტანეთ You are kid, თუ იქნება 
// 18 წელზე ნაკლების მაგრამ 13'ზე მეტის გამოუტანეთ You are not adult yet და თუ იქნება 18 წელზე მეტის გამოუტანეთ You are adult

let age = Number(prompt("Enter your age:"))

if (age < 18){
    alert("You are not adult yet")
}
else{
    alert("You are adult")
}

// 4) შექმენით while loop'ი რომელიც გამოიტანს რიცხვებს 0'დან 100'ის ჩათვლით

let i = 0
while (i <= 100){
    console.log(i);
    i++;
}

// 5) შექმენით for loop'ი რომელიც გამოიტანს რიცხვებს 5'დან 10'ის ჩათვლით
for(let a=5; a<=10; i++ ){
    console.log(a)
}