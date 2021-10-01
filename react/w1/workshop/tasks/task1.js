class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
}

const s1 = new Student("Dipti", "d@d.com", "React");

// adding students to the students property of the b1 object

// solution 1
// const initialArr = [s1];
// const b1 = new Bootcamp("Nucamp", initialArr);

// solution 2
// const b1 = new Bootcamp("Nucamp", [s1]);

// solution 3
// const b1 = new Bootcamp("Nucamp", [s1]);
// b1.students.push(s1);
