"use client"

import { useState } from "react"

interface ProfileCardProps {
  name: string,
  role?: string
}

export default function ProfileCard({name, role}: ProfileCardProps) {
  const [isFollowing, setIsFollowing] = useState<boolean>(false)

  return <div className="border p-4 rounded-lg shadow-md flex justify-between items-center space-x-2">
    <span className="font-bold">{name}</span>
    <span className="text-gray-500">{role}</span>
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {setIsFollowing(!isFollowing)}}>
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  </div>
}