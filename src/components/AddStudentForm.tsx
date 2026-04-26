import { useState } from 'react'

type AddStudentFormProps = {
  onAddStudent: (student: {
    _id: string
    fullName: string
    image: string
    phone: string
    email: string
    program: string
    graduated: boolean
  }) => void
}

const AddStudentForm = ({ onAddStudent }: AddStudentFormProps) => {
  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [graduated, setGraduated] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newStudent = {
      _id: crypto.randomUUID(),
      fullName,
      image,
      phone,
      email,
      program,
      graduated,
    }

    onAddStudent(newStudent)

    setFullName('')
    setImage('')
    setPhone('')
    setEmail('')
    setProgram('')
    setGraduated(false)
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>

      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        required
      />

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        type="url"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="program">Program</label>
      <select
        id="program"
        value={program}
        onChange={(event) => setProgram(event.target.value)}
        required
      >
        <option value="">-- Please select --</option>
        <option value="Web Dev">Web Dev</option>
        <option value="UX/UI">UX/UI</option>
        <option value="Data">Data</option>
      </select>

      <label className="checkbox-row" htmlFor="graduated">
        <input
          id="graduated"
          type="checkbox"
          checked={graduated}
          onChange={(event) => setGraduated(event.target.checked)}
        />
        Graduated
      </label>

      <button type="submit">Add Student</button>
    </form>
  )
}

export default AddStudentForm
