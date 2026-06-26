const restaurants = [

{
name:"The Waterfall Restaurant",
food:[
"Indian",
"Chinese",
"Dal Baati"
],
link:"waterfallmenu.html"
},


{
name:"Little Monk Restaurant",
food:[
"Chinese",
"Italian"
],
link:"littlemonkmenu.html"
},


{
name:"Madhuram Sandwich",
food:[
"Burger",
"Italian",
"Sandwich"
],
link:"madhurammenu.html"
},


{
name:"Coriander Leaf Restaurant",
food:[
"Indian",
"Pizza",
"Dal Baati"
],
link:"coriandermenu.html"
},


{
name:"Adam's Ale",
food:[
"Burger",
"Pizza",
"Chinese"
],
link:"adamsalemenu.html"
},


{
name:"Domino's",
food:[
"Pizza"
],
link:"dominosmenu.html"
},


{
name:"Burger King",
food:[
"Burger"
],
link:"burgermenu.html"
}

];



function findRestaurant(food){


let result =
document.getElementById("result");


let found =
restaurants.filter(function(rest){

return rest.food.includes(food);

});



if(found.length === 0){

result.innerHTML =
`
<h3>No restaurant found for ${food}</h3>
`;

return;

}



let output="";



found.forEach(function(rest){


output +=

`

<div class="outerbox">

<h3>${rest.name}</h3>

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



result.innerHTML=output;


}