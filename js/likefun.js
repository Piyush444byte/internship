document.addEventListener("DOMContentLoaded", () => {
    const likeButton = document.getElementById("like");
    const display = document.getElementById("likes-count");
    let likes = 0;
    let liked = false;

    if (likeButton && display) {
        likeButton.addEventListener("click", () => {
            if (liked) {
                likes -= 1;
                liked = false;
            } else {
                likes += 1;
                liked = true;
            }
            display.textContent = `Likes: ${likes}`;
        });
    }
});