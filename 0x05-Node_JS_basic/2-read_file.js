const fs = require('fs');

function countStudents(path) {
  try {
    if (!fs.existsSync(dataPath)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(dataPath).isFile()) {
      throw new Error('Cannot load the database');
    }
    const data = fs.readFileSync(path, 'utf8');
    

    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    const studentsData = lines.slice(1);
    const fieldscount = {};


    studentsData.forEach(student => {
        const studentFields = student.split(',');
        const firstName = studentFields[0];
        const field = studentFields[3];

      if (field in fieldscount) {
        //update the student count
        fieldscount[field].count += 1;
        fieldscount[field].students.push(firstName);
      } else {
        // creates the first student
        fieldscount[field] = {
          count: 1,
          students: [firstName]
        };
      }
    });

    const totalStudents = studentsData.length;
    console.log(`Number of students: ${totalStudents}`);
    Object.entries(fieldscount).forEach(([field, data]) => {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
    });
    
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
