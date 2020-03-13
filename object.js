var student = {id:121, phn:123, name:"Abir"};
var student2 = {id: 131, phn:134, name:"Asad"};
//three way to find out property
var phone = student.phn;
var phoneNo = student2["phn"];

var phoneProp = "phn";
var mobilephn = student[phoneProp];
//end

// how to change a property(update phone number)
student.phn = 622;
student[phoneProp] = 622;
student2["phn"] = 333;

//add new property(add class)

student.class = "nine"
student2.class = "nine"

console.log(student);
console.log(student2);
console.log(phone);
console.log(phoneNo);
console.log(mobilephn);

