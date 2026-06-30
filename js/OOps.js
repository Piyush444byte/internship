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
