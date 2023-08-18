browse.oninput = function () {
    fetch("/browse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({search: browse.value}),
    })
        .then((r) => r.json())
        .then((r) => {
            r.forEach((e) => {
                let child = document.createElement("div");
                child.classList.add("product-card");
                child.innerHTML = `<img class="product-img" src="${e.img}"><h3 class="product-title">${e.title}</h3><p class="product-price">${e.price}€</p>`;
                product_list.appendChild(child);
            });
        });
    console.log("browse");
};
