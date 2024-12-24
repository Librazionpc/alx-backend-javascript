const fs = require('fs').promises;
//async function to count students
async function countStudents(path) {
    try
    {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        const studentsData = lines.slice(1);
        const fieldscount = {};

        studentsData.forEach(student => {
            const studentFields = student.split(',');
            const firstName = studentFields[0];
            const field = studentFields[3];

            if (field in fieldscount)
            {
                fieldscount[field].count += 1;
                fieldscount[field].students.push(firstName);
            }
            else
            {
                fieldscount[field] = {
                    count: 1,
                    students: [firstName]
                };
            }
        })

        const studentslength = studentsData.length;
        console.log(`Number of students: ${studentslength}`);

        Object.entries(fieldscount).forEach(([field, data]) => {
            console.log(`Number in field: ${field}: ${data.count}. LIST ${data.students.join(", ")}`)
        });
    } catch(err) {
        console.log('Cannot load the database');
    }

}
module.exports = countStudents
