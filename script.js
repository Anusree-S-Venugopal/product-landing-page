const productImage = document.querySelector(".product img");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;

    productImage.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;
});