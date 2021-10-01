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

  registerStudent(newStudent) {
    console.log("line 17", newStudent);
    const duplicateStudents = this.students.filter((existingStudent) => {
      return existingStudent.email === newStudent.email;
    });
    console.log(duplicateStudents);

    if (duplicateStudents.length > 0) {
      console.log(`This email ${newStudent.email} is already registered`);
    } else {
      this.students.push(newStudent);
      console.log(
        `Registering ${newStudent.email} to the ${this.name} bootcamp`
      );
    }
  }
}

const s1 = new Student("Dipti", "d@d.com", "React");
const s2 = new Student("Joe", "j@j.com", "React");
const s3 = new Student("David", "da@da.com", "React");

const s4 = new Student("Heather", "he@he.com", "React");

const b1 = new Bootcamp("Nucamp", 2, [s1, s2, s3]);
const b2 = new Bootcamp("Nucamp1", 2, [s1, s2, s3]);
const b3 = new Bootcamp("Nucamp2", 2, [s1, s2, s3]);
const b4 = new Bootcamp("Nucamp3", 2, [s1, s2, s3]);
const b5 = new Bootcamp("Nucamp4", 2, [s1, s2, s3]);
const b6 = new Bootcamp("Nucamp5", 2, [s1, s2, s3]);
const b7 = new Bootcamp("Nucamp6", 2, [s1, s2, s3]);

b1.registerStudent(s4);
