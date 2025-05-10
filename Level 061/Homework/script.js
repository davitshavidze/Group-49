// alert("Message") - აჩვენებს გამაფრთხილებელ შეტყობინებას.
// confirm("Question?") - აბრუნებს true (თუ OK დააჭირეს) ან false (თუ Cancel).
// prompt("Enter something:") - აძლევს მომხმარებელს მონაცემის შეყვანის საშუალებას.

let isAdult = confirm("Are you an adult?");
        
if (isAdult) {
    alert("You are adult");
} 
else {
    alert("You are kid");
}


console.log(5 == '5');  
console.log(10 == 10);   
console.log(0 == false); 
console.log(null == undefined); 
console.log('apple' == 'apple'); 

// === (მკაცრი თანასწორობა, ტიპის შემოწმებით)
console.log(5 === '5'); 
console.log(10 === 10); 
console.log(false === 0); 
console.log(null === undefined); 
console.log('apple' === 'apple'); 

// != (არათანასწორობა, ტიპის შეუმოწმებლად)
console.log(5 != '5');   
console.log(10 != 20);
console.log(false != 0); 
console.log(null != undefined); 
console.log('apple' != 'orange'); 

// !== (მკაცრი არათანასწორობა, ტიპის შემოწმებით)
console.log(5 !== '5');  
console.log(10 !== 10);  
console.log(false !== 0);
console.log(null !== undefined); 
console.log('apple' !== 'apple'); 

// > (მეტობა)
console.log(10 > 5);     
console.log(3 > 8);      
console.log(100 > 50);   
console.log(7 > 7);      
console.log(-1 > -5);    

// < (ნაკლებობა)
console.log(10 < 5);     
console.log(3 < 8);      
console.log(100 < 50);   
console.log(7 < 7);      
console.log(-10 < -5);   

// >= (მეტია ან ტოლი)
console.log(10 >= 5);    
console.log(3 >= 8);     
console.log(100 >= 100); 
console.log(7 >= 7);     
console.log(-1 >= -5);   

// <= (ნაკლები ან ტოლი)
console.log(10 <= 5);    
console.log(3 <= 8);     
console.log(100 <= 100); 
console.log(7 <= 7);     
console.log(-10 <= -5);  