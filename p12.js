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
  
  // Define the addNewDept function
  function addNewDept(school, newDepartment) {
    // Add the new department to the school's departments using spread operator
    const updatedDepartments = {
      ...school.departments,
      ...newDepartment
    };
  
    // Return the updated school object
    return {
      ...school,
      departments: updatedDepartments
    };
  }
  
  // Define the new department object
  const newDepartment = {
    art: { teachers: 2, students: 50 }
  };
  
  // Call the function and log the output
  console.log(addNewDept(school, newDepartment));
  