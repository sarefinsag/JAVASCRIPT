class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Sei School"
    }
}

const student1 = new student(1,"Arefin");
const student2 = new student(2, "Genius");

console.log(student1, student2);
console.log(student1.name, student2.name);