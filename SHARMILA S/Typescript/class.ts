class Employee {
    eid: number;
    ename: string;
    dept: string;

    constructor(id:number, name:string, dept:string){
        this.eid=id;
        this.ename=name;
        this.dept=dept;
    }

    setData(id:number, name:string, dept:string):void{
        this.eid=id;
        this.ename=name;
        this.dept=dept;
    }

    display():void{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.dept);
    }
} 

//Object created
var emp1 = new Employee(286,"sharmi","trainee");
//var emp2 = new Employee();

// emp1.eid=286;
// emp1.ename="sharmi";
// emp1.dept="trainee";

//emp.setData(286,"sharmi","trainee");
emp1.display();