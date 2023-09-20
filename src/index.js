// write your code here
/*See all ramen images in the `div` 
with the id of `ramen-menu`. When the page */
fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(images => {
        images.forEach((ramen) => {
            const ramenContent = document.createElement("img");
            ramenContent.src = ramen.image;
            document.querySelector("#ramen-menu").append(ramenContent);
        })
    });
