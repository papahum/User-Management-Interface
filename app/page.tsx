"use client"

import { useState, useEffect } from "react"
import UserForm from "../components/UserForm"
import UserTable from "../components/UserTable"
import SearchBar from "../components/SearchBar"
import { User } from "../types/user"

export default function Home() {

  const [users,setUsers] = useState<User[]>([])
  const [search,setSearch] = useState("")
  const [sortField,setSortField] = useState<string>("")
  const [sortOrder,setSortOrder] = useState<"asc" | "desc">("asc")

  useEffect(() => {

   const savedUsers = localStorage.getItem("users")
   if(savedUsers){
    setUsers(JSON.parse(savedUsers))
   }
  },[])


   useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(users))
},[users])

  const addUser = (user:User)=>{
    setUsers([...users,user])
  }

  const handleSort = (field:string)=>{
   if(sortField === field){
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
   }
   else{
    setSortField(field)
    setSortOrder("asc")
   }

  }

  const filteredUsers = users
  .filter(user =>
   user.name.toLowerCase().includes(search.toLowerCase()) ||
   user.email.toLowerCase().includes(search.toLowerCase())
  )

  .sort((a,b)=>{

   const fieldA = a[sortField as keyof User]
   const fieldB = b[sortField as keyof User]

   if(!fieldA || !fieldB) return 0

   if(sortOrder === "asc"){
    return fieldA.toString().localeCompare(fieldB.toString())
   }
   else{
    return fieldB.toString().localeCompare(fieldA.toString())
   }

})

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#051F20] via-[#163832] to-[#235347] p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-[#DAF1DE] tracking-wide">
        User Management Dashboard
        </h1>

        <p className="text-gray-500 mt-2 md:mt-0">
        Manage users, roles and status easily
        </p>

        </div>

        {/* Grid Layout */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Form */}

          <div className="md:col-span-1 bg-[#0B2B26] rounded-2xl shadow-2xl p-6 border border-[#235347]">

            <UserForm addUser={addUser} />

          </div>

          {/* Table Section */}

          <div className="md:col-span-2 bg-[#0B2B26] rounded-2xl shadow-2xl p-6 border border-[#235347]">

            <div className="mb-4">
              <SearchBar search={search} setSearch={setSearch} />
            </div>

            <UserTable users={filteredUsers} handleSort={handleSort}/>

          </div>

        </div>

      </div>

    </div>

  )
}