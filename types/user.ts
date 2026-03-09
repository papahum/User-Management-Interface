export type Role = "Admin" | "User" | "Manager"
export type Status = "Active" | "Inactive"

export interface User {
  id: number
  name: string
  email: string
  role: Role
  status: Status
  createdDate: string
}