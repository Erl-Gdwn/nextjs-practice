"use client"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function AddUserPage() {
  return (
    <div className="p-4">
      <Input className="w-[250px]" type="text" placeholder="Enter name"></Input>
      <Input className="w-[250px]" type="email" placeholder="Enter email"></Input>
      <Input className="w-[250px]" type="text" placeholder="Enter company"></Input>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Role</SelectLabel>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="developer">Developer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit">Submit</Button>
    </div>
  )
}
