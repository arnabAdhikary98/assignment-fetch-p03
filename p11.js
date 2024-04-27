const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  
  // Define the findTopStudent function
  function findTopStudent(school, courseName) {
    // Find the students taking the specified course
    const studentsTakingCourse = school.students.filter(student => student.scores.hasOwnProperty(courseName));
  
    // Sort students based on score in the specified course
    studentsTakingCourse.sort((a, b) => b.scores[courseName] - a.scores[courseName]);
  
    // Return the top student for the specified course
    return studentsTakingCourse[0];
  }
  
  // Call the function and log the output for 'math' course
  console.log(findTopStudent(school, 'math'));
  