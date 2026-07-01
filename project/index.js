const restaurants = [

{
    name:"The Waterfall Restaurant",
    food:[
        "Indian",
        "Chinese",
        "Dal Baati"
    ],
    image:"images/waterfall.jpg",
    link:"waterfallmenu.html"
},


{
    name:"Little Monk Restaurant",
    food:[
        "Chinese",
        "Italian"
    ],
    image:"images/littlemonk.webp",
    link:"littlemonkmenu.html"
},


{
    name:"Madhuram Sandwich",
    food:[
        "Burger",
        "Italian",
        "Sandwich"
    ],
    image:"images/madhuram.webp",
    link:"madhurammenu.html"
},


{
    name:"Coriander Leaf Restaurant",
    food:[
        "Indian",
        "Pizza",
        "Dal Baati"
    ],
    image:"images/coriander.webp",
    link:"coriandermenu.html"
},


{
    name:"Adam's Ale",
    food:[
        "Burger",
        "Pizza",
        "Chinese"
    ],
    image:"images/adams.webp",
    link:"adamsalemenu.html"
},


{
    name:"Domino's",
    food:[
        "Pizza"
    ],
    image:"images/dominoz.svg",
    link:"dominosmenu.html"
},


{
    name:"Burger King",
    food:[
        "Burger"
    ],
    image:"images/Burger_King.png",
    link:"burgermenu.html"
}


];


function findRestaurant(food){


let result = document.getElementById("result");

let found = restaurants.filter(function(rest){


return rest.food.some(function(item){

return item.toLowerCase() === food.toLowerCase();

});


});

if(found.length === 0){


result.innerHTML = `

<h3>
No restaurant found for ${food}
</h3>

`;

return;

}

let output = "";

found.forEach(function(rest){

output += `

<div class="outerbox">

<img src="${rest.image}" width="150">

<h3>

${rest.name}

</h3>

<p>

Available: ${food}

</p>

<a href="${rest.link}">

<button>
View Menu
</button>

</a>
</div>
`;
});

result.innerHTML = output;

}