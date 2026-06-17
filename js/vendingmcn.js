function wendingmachine(){
    let insertedValue = 0;
    let inventory = {
        soda : {price: 50, stock: 5},
        chips : {price: 20, stock: 3},
}

return{
    insertCoin(coin){
        insertedValue += coin;
        console.log(`Inserted Value: ${insertedValue}`);
    },

    buyItem(item){
        let itemExist = inventory[item];
        if(itemExist){
            if(itemExist.price > insertedValue){
                console.log("Insert more coins!");
            }
            
           else if(itemExist.stock <= 0){
                console.log("khatam hogya re lund ke!");
            }
            else{
                insertedValue -=itemExist.price;
                itemExist.stock -=1;
                console.log("le re lund ke!")
            }
        }
        
    },
};
}

let user = vendingMachine();
user.insertCoin(20);
user.buyItem("soda")
