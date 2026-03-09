import { User } from "../types/user"

interface Props{
 users:User[]
 handleSort:(field:string)=>void
}

export default function UserTable({users,handleSort}:Props){

 return(

 <table className="w-full text-[#DAF1DE] font-semibold">

<thead className="bg-[#163832] text-[#DAF1DE]">
<tr>
<th onClick={()=>handleSort("name")} className="p-3 cursor-pointer">
Name ↑↓
</th>
<th onClick={()=>handleSort("email")} className="p-3 cursor-pointer">
Email ↑↓
</th>
<th onClick={()=>handleSort("role")} className="p-3 cursor-pointer">
Role ↑↓
</th>
<th className="p-3">
Status
</th>
<th onClick={()=>handleSort("createdDate")} className="p-3 cursor-pointer">
Created ↑↓
</th>
</tr>
</thead>

<tbody>

{users.map(user => (

<tr key={user.id} className="border-b border-[#235347] hover:bg-[#163832]">

<td className="p-3">{user.name}</td>
<td className="p-3">{user.email}</td>
<td className="p-3 font-medium text-indigo-600">
 {user.role}
</td>
<td className="p-3">

<span className={`px-3 py-1 text-sm rounded-full font-medium
 ${user.status === "Active"
 ? "bg-green-100 text-green-700"
 : "bg-red-100 text-red-600"}
`}>

{user.status}

</span>

</td>
<td className="p-3">{user.createdDate}</td>

</tr>

))}

</tbody>

</table>
 )

}