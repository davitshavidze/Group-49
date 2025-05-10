// 1)შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ამ რიცხვების ჯამს

function sumofarray(arr){
    let res = 0
    for(let it =0 ; it < arr.lenght; i++ ){
        res += arr[i]
    }
}

// 2) შემენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს მის მინიმალურ და მაქსიმალურ მნიშვნელობებს.

function mix(arr){
    let minimum = arr[0]
    for( let i=1; i< arr.lenght; i++ ){
        if(arr[i]<minimum){
            minimum=arr[i]
        }
    }
    let maximum=arr[0]
    for( let i=1; i< arr.lenght; i++ ){
        if(arr[i]>maximum){
            maximum=arr[i]
        }
    }
    let array = new Array(minimum,maximum)
    return array
}

// 3) დაწერეთ ფუნქცია, რომელიც შექმნის N სიგრძის მასივს შემთხვევითი რიცხვებით (1-100 შუალედში).

function createlist(num){
    let num1 = Math.ceil(Math.random()*100)
    let num2 = Math.ceil(Math.random()*100)
    const arr = []
    for (let i = Math.min(num1,num2); i < Math.max(num1,num2); i++){
        arr.push(i)
    }

}

// 4) შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ახალ მასივს, სადაც ყველა ელემენტი იქნება მისი კვადრატი.

function square(arr){
    const newArr= []
    for (let i = 0; i < arr.lenght ;  i++){
        newArr.push(arr[i]*arr[i])
    }
    return newArr
}

// 5)დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის:

// Math.floor() გამოყენებით დამრგვალებულ მნიშვნელობას
// Math.ceil() გამოყენებით დამრგვალებულ მნიშვნელობას
// Math.round() გამოყენებით დამრგვალებულ მნიშვნელობას 

function mathematics(num){
    return[Math.floor(num), Math.ceil(num), Math.round(num)]
}