function openGift() {

    document.querySelector(".intro").style.display = "none";

    document.querySelector("button").style.display = "none";

    document.getElementById("message").classList.remove("hidden");

}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);

function showPhotos() {

    document.getElementById("message").classList.add("hidden");

    document.getElementById("photos").classList.remove("hidden");

    document.getElementById("main-title").style.display = "none";

}