
//  Scope (სკოპი) განსაზღვრავს, თუ რომელი ცვლადები და ფუნქციებია ხელმისაწვდომი კოდის მოცემულ ნაწილში.

//  JavaScript-ში სკოპის სამი ტიპი არსებობს: გლობალური, ფუნქციის, ბლოკის

//  Hoisting არის მექანიზმი, რომლის მიხედვითაც ცვლადებისა და ფუნქციების დეკლარაციები "წინ იწევს" (hoist) კოდის ზედა ნაწილში, კომპილაციის პროცესში

const form = document.getElementById("form");
const tipAmount = document.getElementById("tip-amount")
const total = document.getElementById("total-amount")
const reset = document.getElementById("reset")

form.addEventListener('submit', function(e){
    e.preventDefault();

    const bill1 = form.elements.bill;
    const tip1 = form.elements.tip;
    const people1 = form.elements.people;

    tipAmount.textContent = `Tip amount / person: $${String(Number(bill1.value) * Number(tip1.value) / 100 / (people1.value)).slice(0,4)}`;

    total.textContent = `Tip amount / person: $${String((Number(bill1.value) + Number(bill1.value) * Number(tip1.value) / 100) / Number(people1.value)).slice(0,5)}`;
})

reset.addEventListener('click', function(){
    tipAmount.textContent = "Tip amount / person: $0";
    total.textContent = "Total / person: $0";
})