var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setData = function (id, name, dept) {
        this.eid = id;
        this.ename = name;
        this.dept = dept;
    };
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.dept);
    };
    return Employee;
}());
//Object created
var emp1 = new Employee();
//var emp2 = new Employee();
emp1.eid = 286;
emp1.ename = "sharmi";
emp1.dept = "trainee";
emp1.display();
