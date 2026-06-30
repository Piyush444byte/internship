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
        this.attendance = attendance
    }
}
const Student1={
    name:"Piyush",
    attendance: 0,

    isPresent:function(){
        this.attendance++;
        console.log(
            `${this.name} is present. total attendance = ${this.attendance}`
        );
    
    },
};

Student1.isPresent();
