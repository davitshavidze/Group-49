
const root = document.getElementById("root")

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((res) => {
        res.forEach(el => {
            root.innerHTML += `
                <div>
                    <p>Title: ${el.title}</p>
                    <p>Price: ${el.price}</p>
                    <p>Description: ${el.description}</p>
                    <img src="${el.image}" width=200 />
                </div>
            `
        })
    })