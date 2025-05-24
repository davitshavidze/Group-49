
// 1) ახსენით რა არის promise

// promise -> წარმოადგენს ასინქრონული ოპერაციების გარკვეული ტიპის მექანიზმს და ჯაჭვს. promise არის წარმოდგენილი ობიექტის სახით, რომელიც აღწერს ასინქონულ პროცესს და შეიძლება დაგვიბრუნოს 2 პასუხი: resolve ან reject მიღებული შედეგისა და response-ს მიხედვით.

// 2) შექმენით promise რომელიც აresolveბს (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე)

const obj1 = {
    drivers: 1000,
    seniorDrivers: 200,
    headquarter: 10
}

function Executor(resolve, reject){
    if (obj1.drivers > 500){
        setTimeout(() => {
            resolve("There are Enough bus Drivers")
        }, 500)
    } else{
        reject("There are not Enough bus Drivers")
    }
}

const drivers = new Promise(Executor)

console.log(drivers)

// 3) შექმენით promise რომელიც აrejectებს (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე) 

// მაგალითს ვაკეთებ ისევ obj1-ზე დაყრდნობით

function newExecutor(){
    if (obj1.seniorDrivers > 300){
        setTimeout(() => {
            resolve("There are Enough Senior bus Drivers")
        }, 500)
    } else {
        reject("There are not Enough Senior bus Drivers")
    }
}

const seniorDrivers = new Promise(newExecutor)

console.log(seniorDrivers)

// 4) შექმენით promise რომელიც ან აresolveბს ან აrejectებს, გარკვეული პირობის მიხედვით (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე)

// anyway, ფაქტიურად შევქმენი წინა 2 დავალებაში და გაკეთებული მაქვს.