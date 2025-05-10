
// 2) შექმენით while loop'ი რომელიც გამოიტანს კენტ რიცხვებს 1'დან 200'მდე

let x=1

while (x <= 200){
    if (x % 2 == 1){
    console.log(x);
    x++}
}

// 3) შექმენით while loop'ი რომელიც გამოიტანს 3'ის ჯერად რიცხვებს 51'დან 150'მდე

let y = 51

while (y < 150){
    if (y % 3 == 0){
        console.log(y);
        y++
    }
}

// 4) შექმენით for loop'ი რომელიც გამოიტანს ყველა რიცხვს 0'დან 100'მდე

for (let num = 0; num <= 100; num++){
    console.log(num)
}

// 5) შექმენით for loop'ი რომელიც გამოიტანს ყოველ მეორე რიცხვს 100'დან 300'მდე 

for(let number=100; number<300; number+=2){
    console.log(number)
}
