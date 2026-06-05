class Employee{
    empId:number;
    empName:string

    constructor(empId:number, empName:string){
        this.empId = empId;
        this.empName = empName;
    }

    display():void{
        console.log(`Employee ID: ${this.empId}, Employee Name: ${this.empName}`);
    }       

}

const e = new Employee(101, "John Doe");
e.display();
console.log(e.empId);
