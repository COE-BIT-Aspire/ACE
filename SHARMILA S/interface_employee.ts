interface IEmployee
{
    empName: string;
    empID: number;
    empSalary: number;
    
    dispData:() =>void;
}

var emp:IEmployee =
{
    empName:'sharmi',
    empID: 286,
    empSalary: 20000,
    dispData():void {
        console.log(this.empName+" "+this.empID+" "+this.empSalary);
    }
}

// console.log(emp.empName);
// console.log(emp.empID);
// console.log(emp.empSalary);

emp.dispData();