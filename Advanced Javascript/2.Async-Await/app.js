const mainEl = document.querySelector("body");

const fetchStudents = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const renderData = async () => {
  const students = await fetchStudents();
  averageAgeAndGrade(students, mainEl);
  studentOverSixtyAndUnderThirty(students, mainEl);
  studentsOverThirtyAndAverageGrade4(students, mainEl);
  findStudent(students, mainEl);
  youngestAndOldestStudents(students, mainEl);
  lastNameLong(students, mainEl);
  bestStudents(students, mainEl);
  ifAllStudentsAreAdultsAndLowGrade(students, mainEl);
};
renderData();
//
//
//
const averageAgeAndGrade = (students, htmlEl) => {
  const numberOfUsers = students
    .map((student) => student.age)
    .reduce((acc, num) => {
      return acc + num;
    }, 0);

  let averageGrade = 0;

  students.forEach((student) => {
    averageGrade += student.averageGrade;
  });

  htmlEl.innerHTML += `<h3>1.Show the average age and average grade of all students combined</h3>
  <div>Average Grade Of All Students: ${averageGrade / students.length}<br>
  Average Age Of All Students: ${numberOfUsers / students.length}</div>`;
};
//
//
//
const studentOverSixtyAndUnderThirty = (students, htmlEl) => {
  let studentsOver60 = students.filter((student) => student.age > 60);
  let studentsUnder30 = students.filter((student) => student.age < 30);

  htmlEl.innerHTML += `<h3>2.Show the number of students that are over 60 and the number of students that are under 30 years old</h3>
  <div>Number Of Students Over 60: ${studentsOver60.length}<br>
  Number Of Students under 30: ${studentsUnder30.length}</div>`;
};
//
//
//
const studentsOverThirtyAndAverageGrade4 = (students, htmlEl) => {
  let studentsArray = students
    .filter((student) => student.age > 30 && student.averageGrade >= 4)
    .map(
      (student) =>
        `<li>${student.firstName} ${student.lastName} - ${student.city}`
    );

  htmlEl.innerHTML += `<h3>3.Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above</h3>
    <div><ol>${studentsArray}</ol></div>`;
};
//
//
//
const findStudent = (students, htmlEl) => {
  let foundStudent = students.find(
    (student) => student.firstName === "Arthur" && student.lastName === "Cadore"
  );

  htmlEl.innerHTML += `<h3>4.Find the student named Artuh Cador and display all of his information</h3>
  <div>
  First Name: ${foundStudent.firstName}<br>
  Last Name: ${foundStudent.lastName}<br>
  Email: ${foundStudent.email}<br>
  Gender: ${foundStudent.gender}<br>
  City: ${foundStudent.city}<br>
  Average Grade: ${foundStudent.averageGrade}<br>
  Age: ${foundStudent.age}<br>
  </div>`;
};
//
//
//
const youngestAndOldestStudents = (students, htmlEl) => {
  const oldest = students.reduce((one, two) => (one.age > two.age ? one : two));
  const youngest = students.reduce((one, two) =>
    one.age < two.age ? one : two
  );
  htmlEl.innerHTML += `<h3>5.Find the oldest and youngest student and display their information on the screen</h3>
  <div>
  Oldest:<br>
  First Name: ${oldest.firstName}<br>
  Last Name: ${oldest.lastName}<br>
  Email: ${oldest.email}<br>
  Gender: ${oldest.gender}<br>
  City: ${oldest.city}<br>
  Average Grade: ${oldest.averageGrade}<br>
  Age: ${oldest.age}<br>
  <br>
  Youngest:<br>
  First Name: ${youngest.firstName}<br>
  Last Name: ${youngest.lastName}<br>
  Email: ${youngest.email}<br>
  Gender: ${youngest.gender}<br>
  City: ${youngest.city}<br>
  Average Grade: ${youngest.averageGrade}<br>
  Age: ${youngest.age}<br>
  </div>`;
};
//
//
//
const lastNameLong = (students, htmlEl) => {
  const studentsWitLongNames = students
    .filter((student) => student.lastName.length > 8)
    .map((student) => `<li>${student.firstName} ${student.lastName}</li>`)
    .join("");

  htmlEl.innerHTML += `<h3>6.Show a list of the full names of students that have a last name longer than 8 characters</h3>
  <div>
  <ul>${studentsWitLongNames}</ul>
  </div>`;
};
//
//
//
const bestStudents = (students, htmlEl) => {
  const copyOfStudents = students.map((student) => student);

  const bestStudents = copyOfStudents
    .sort((one, two) =>
      one.averageGrade < two.averageGrade
        ? 1
        : one.averageGrade > two.averageGrade
        ? -1
        : 0
    )
    .slice(0, 10)
    .map((student) => `<li>${student.firstName} ${student.lastName}</li>`)
    .join("");
  htmlEl.innerHTML += `<h3>7.Show a list of the top 10 best students by average grade</h3>
  <div>
  <ol>${bestStudents}</ol>
  </div>`;
};
//
//
//

const ifAllStudentsAreAdultsAndLowGrade = (students, htmlEL) => {
  const allAreAdults = students.every((student) => student.age > 18);
  const studentsWithLowGrade = students.some(
    (student) => student.averageGrade === 1
  );

  htmlEL.innerHTML += `<h3>8.Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)</h3>
  <div>Are All Students Adults: ${allAreAdults}<br>
  Do Some Students Have An Average Grade Of 1: ${studentsWithLowGrade}</div>`;
};
