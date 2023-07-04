class Person{
    static course="full Stack Developer"
    constructor(name,age,email,phoneno){
        this.name=name;
        this.age=age;
        this.email=email;
        this.phoneno=phoneno;
    }//instance method
    getData(){
        console.log(`my email is ${this.email}`);
    }
}
class Student extends Person{
    constructor(name,age,email,phoneno,college,studentid){
        super(name,age,email,phoneno);
        this.college=college;
        this.studentid=studentid;
    }//polymorphisim (same method name)
    getData(){
        console.log(`studentid is ${this.studentid}`);
    }
setData(email){
    this.email=email;
    console.log(`my new email is ${this.email}`);
}//static method
static coursedetails(){
    console.log(`course is ${Person.course}`);
}
}
let person1 = new Person("suriya",23,"abc@gmail.com",1234567890);
person1.getData();
let student1=new Student("suriya",23,"abc@gmail.com",1234567890,"st peters","ABC432");
student1.getData();
student1.setData("xyz@gmail.com");
//calling static method using class name
Student.coursedetails();
