export const foo = (n) => {
  console.log(n,'执行了')
}

class Person {
  constructor(name,age) {
    this.name = name,
    this.age = age
  }
  running() {
    console.log(this.name)
  }
  eating () {
    console.log(this.name,'eating')
  }
}

class Student extends Person {
  constructor(name,age,address) {
    super(name,age)
    this.address = address
  }
  running() {
    super.running()
    console.log(this.address)
  }
}

const stu = new Student('kobe',39,'洛杉矶')
console.log(stu)
stu.running()
stu.eating()
 