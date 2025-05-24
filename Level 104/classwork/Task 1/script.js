
const root = document.getElementById("root")

fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((el) => {
        root.innerHTML = `
            <div>
                <p>Title: ${el.title}</p>
                <p>Price: ${el.price}</p>
                <p>Description: ${el.description}</p>
                <img src="${el.image}" width=200 />
            </div>
        `
    })