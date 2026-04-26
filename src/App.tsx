import { useState } from 'react'
import './App.css'
import { studentsData } from './students'
import AddStudentForm from './components/AddStudentForm'

type Student = {
  _id: string
  fullName: string
  image: string
  phone: string
  email: string
  program: string
  graduated: boolean
}

const App = () => {
  const [students, setStudents] = useState<Student[]>(studentsData)

  const addStudent = (newStudent: Student) => {
    setStudents((previousStudents) => [...previousStudents, newStudent])
  }

  return (
    <div className="app">
      <AddStudentForm onAddStudent={addStudent} />

      <h1>Student List</h1>
      <div className="student-list">
        {students.map((student) => (
          <article key={student._id} className="student-card">
            <img src={student.image} alt={student.fullName} />
            <h3>{student.fullName}</h3>
            <p>Program: {student.program}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Graduated: {student.graduated ? 'Yes' : 'No'}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default App