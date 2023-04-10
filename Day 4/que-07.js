students = [{name:"Vasanth",jsScore:80},{name:"Ravi",jsScore:90},{name:"Ram",jsScore:70}];
passedStudents = students.filter((student) => student.jsScore > 70);
console.log(passedStudents);