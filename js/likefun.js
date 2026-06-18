function createLikes(){
    let likes = 0;
    const display = document.getElementById("likes-count");

    function updateDisplay(){
        if (display) {
            display.textContent = `Likes: ${likes}`;
        }
    }

    return function(){
        likes++;
        updateDisplay();
    };
}

const like = createLikes();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("like").onclick = like;
});