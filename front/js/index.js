const KanapAPI = "http://localhost:3000/api/products";
const addArticle = document.querySelector('#items');
fetch(KanapAPI)
    .then((res) => res.json())
    .then ((productsRes) => {
        for (let product of productsRes) {
            const newProduct = document.createElement("a");
            newProduct.setAttribute("href",`product.html?id=${product._id}`);
            newProduct.innerHTML = `
            <article>
            <img src="${product.imageUrl}" alt="${product.altTxt}">
            <h3 class="">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
          </article>`;
          addArticle.appendChild(newProduct);
        };
    }
);