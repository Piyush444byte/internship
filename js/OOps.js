// const Student1={
//     name:"Piyush",
//     attendance: 0,

//     isPresent:function(){
//         this.attendance++;
//         console.log(
//             `${this.name} is present. total attendance = ${this.attendance}`
//         );
    
//     },
// };

// Student1.isPresent();

// class Sudent{
//     constructor(name,attendance){
//         this.name = name;
//         this.attendance = attendance;
//     }

//     isPresent(){
//         this.attendance++;
//         console.log(
//             `${this.name} is present. total attendance = ${this.attendance}`
//         );
    
//     }
// }

// const student1 = new Sudent("Piyush",0);
// const student2 = new Sudent("Rohan",0);

// student1.isPresent();
// student2.isPresent();

// student2.isPresent();
// student2.isPresent();


class Animal{
    constructor(name,breed){
        this.name =name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is Sleeping`);
    }
}


class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    bark(){
        console.log(`${this.name} bark ${this.breed}`);
    }
}

const dog1 = new Dog("bhuraDon", "indian Stray Dog");
dog1.bark();
dog1.eat();
dog1.sleep();
dog1.breed();