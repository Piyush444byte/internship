
// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }

//   work() {
//     console.log(`${this.name} is working`);
//   }
// }


// class Developer extends Employee {
//   constructor(name, salary, programmingLanguage) {
//     super(name, salary);
//     this.programmingLanguage = programmingLanguage;
//   }

//   writeCode() {
//     console.log(`${this.name} is coding in ${this.programmingLanguage}`);
//   }
// }

// const developer = new Developer("Piyush", 60000, "JavaScript");

// developer.work();
// developer.writeCode();
// developer.name();






// ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // to  add  item
  addItem(itemName, price) {
    this.items.push({
      name: itemName,
      price: price
    });

    console.log(`Added ${itemName} to cart`);
  }

   calculateTotal() {
    let total = 0;

    for (let item of this.items) {
      total += item.price;
    }

    console.log(`Total Price: $${total}`);
    return total;
  }
}


const cart = new ShoppingCart();


cart.addItem("Laptop", 1200);
cart.addItem("Mouse", 25);
cart.addItem("Keyboard", 80);


cart.calculateTotal();