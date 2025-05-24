
const form = document.getElementById("form");
const result = document.getElementById("res");

form.addEventListener("submit", async (e) => {

    e.preventDefault()

    const val = document.getElementById("searchInp").value;
    const url = fetch(`https://www.googleapis.com/books/v1/volumes?q=${val}`)

    const res = await fetch(url);
    const data = await res.json();

    resultsDiv.innerHTML = "";

    if (!data.items) {
        resultsDiv.innerHTML = `
            <p>No book Found by name</p>
        `
    }

    data.items.forEach((item) => {
        const info = item.volumeInfo;

        const title = info.title || "found"
        const year = info.publishedDate || " found"
        const description = info.description || "not found"
        const pageCount = info.pageCount || "not found"

        const book = `
            <div class="book">
                <div class="book-info">
                    <h3>${title}</h3>
                    <p>Publish Date: ${year}</p>
                    <p>Page Count: ${pageCount}</p>
                    <p>${description}</p>
                </div>
            </div>
        `
        result.innerHTML += book;
    })
})