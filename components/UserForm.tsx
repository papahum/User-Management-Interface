"use client"

import { useState } from "react"
import { User, Role, Status } from "../types/user"

interface Props {
  addUser: (user: User) => void
}

export default function UserForm({ addUser }: Props) {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [role,setRole] = useState<Role>("User")
  const [status,setStatus] = useState<Status>("Active")
  const [error,setError] = useState("")

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    if(!name || !email){
      setError("All fields required")
      return
    }

    const emailRegex = /\S+@\S+\.\S+/

    if(!emailRegex.test(email)){
      setError("Invalid email")
      return
    }

    const newUser:User = {
      id: Date.now(),
      name,
      email,
      role,
      status,
      createdDate: new Date().toLocaleDateString()
    }

    addUser(newUser)

    setName("")
    setEmail("")
    setRole("User")
    setStatus("Active")
    setError("")
  }

  return (

    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded space-y-3">

      <h2 className="text-2xl font-bold mb-4 text-gray-700">
      Add New User
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
      className="w-full bg-[#163832] text-[#DAF1DE] font-semibold border border-[#235347] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8EB69B]"
      placeholder="Full Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <input
      className="w-full bg-[#163832] text-[#DAF1DE] font-semibold border border-[#235347] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8EB69B]"
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />

      <select
      className="w-full bg-[#163832] text-[#DAF1DE] font-semibold border border-[#235347] rounded-lg p-2"
      value={role}
      onChange={(e)=>setRole(e.target.value as Role)}
      >
        <option>Admin</option>
        <option>User</option>
        <option>Manager</option>
      </select>

      <select
      className="w-full bg-[#163832] text-[#DAF1DE] font-semibold border border-[#235347] rounded-lg p-2"
      value={status}
      onChange={(e)=>setStatus(e.target.value as Status)}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button className="w-full bg-[#8EB69B] hover:bg-[#DAF1DE] text-[#051F20] font-bold py-2 rounded-lg transition">
      Add User
      </button>

    </form>
  )
}