'use strict';
fetch("/users", {
  method: "POST",
})
  .then((res) => res.json())
  .then(async (res) => {
    document.getElementById("thingamabob").innerText = await JSON.stringify(
      res
    );
  });