browse.oninput = function () {
    fetch("/browse", { method: "POST", body: browse.value })
        .then((r) => r.json())
        .then((r) => {
            r.forEach((e) => {
                product_list.appendChild(
                    `<div class="product-card">
                        <img class="product-img" src="/images/product/scooter1.svg">
                        <h3 class="product-title">Scooter doggo</h3>
                        <p class="product-price">299.99€</p>
                    </div>`
                );
            });
        });
    console.log("browse");
};