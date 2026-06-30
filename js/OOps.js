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

class Sudent{
    constructor(name,attendance){
        this.name = name;
        this.attendance = attendance;
    }

    isPresent(){
        this.attendance++;
        console.log(
            `${this.name} is present. total attendance = ${this.attendance}`
        );
    
    }
}

const student1 = new Sudent("Piyush",0);
const student2 = new Sudent("Rohan",0);

student1.isPresent();
student2.isPresent();

student2.isPresent();
student2.isPresent();