// 1) ახსენით რა არის bubbling და capturing

//Bubbling არის როდესაც ელემენტზე ხდება მოვლენა და შემდეგ ვბრცელდება მის მშობელ ელემენტებზე, ხოლო Capturing არის როდესაც მოვლენა დოკუმენტიდან child-მდე მიდის. მისი გამოყენებისტვის addEventListener-ს პარამეტრად true უნდა გავუწეროთ.

// მაგალითად, თუ ღილაკზე (button) დააჭერთ, ის ჯერ ღილაკზე იწარმოებს, მერე მის კონტეინერებზე (div, body და ასე შემდეგ).




// 2) გატესტეთ ორივე

const child = document.getElementById("child")
const parent = document.getElementById("parent")

// Bubbling Exapmle

parent.addEventListener("click", () => {
    console.log("Parent bubbling");
});
child.addEventListener("click", () =>{
    console.log("Child  bubbling");
});

// Capturing Example

parent.addEventListener("click", () => {
    console.log("Parent capturing");
},true);
child.addEventListener("click", () =>{
    console.log("Child  capturing");
},true);