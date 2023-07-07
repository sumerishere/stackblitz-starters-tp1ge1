const students = [
  {
    name: 'John',
    chemistryMarks: 75,
    biologyMarks: 80,
    dob: '10-03-2000'
  },
  {
    name: 'Alice',
    chemistryMarks: 80,
    biologyMarks: 85,
    dob: '15-02-2001'
  },
  // Add more student objects as needed
];

students.sort((a, b) => {
  // Rule 1: Sort by total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }
  
  // Rule 2: Sort by biology marks if total marks are the same
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }
  
  // Rule 3: Sort by date of birth if biology marks are the same
  const [dayA, monthA, yearA] = a.dob.split('-');
  const [dayB, monthB, yearB] = b.dob.split('-');
  const dateA = new Date(yearA, monthA - 1, dayA);
  const dateB = new Date(yearB, monthB - 1, dayB);
  
  return dateA - dateB;
});

console.log(students);
