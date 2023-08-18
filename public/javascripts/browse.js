browse.oninput = function () {
    fetch("/browse", { method: "POST", body: browse.value })
        .then((r) => r.json())
        .then((r) => {
            r.forEach((e) => {
                product_list.appendChild(
                    `<a href="/product/${e._id}"><img src="e.img" alt="e.title"/><span>${e.title}</span></a>`
                );
            });
        });
    console.log("browse");
};
