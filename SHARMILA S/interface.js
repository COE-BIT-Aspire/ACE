function studentDetails(_student) {
    console.log("Student Name: " + _student.studentName + "\n" + "Student Id : " + _student.studentId
        + "\n" + "Student Department: " + _student.studentDept + "\n" + "Student College: " + _student.studentCollege);
}
// function showDetails(_student: student) {
//     console.log("Student Name : "+_student.studentName+" "+"Student Id : "+_student.studentId);
// }
studentDetails({ studentName: "Sharmi", studentId: 286, studentDept: "CSE", studentCollege: "BIT" });
// showDetails({studentName: "Sharmi", studentId: 286})
