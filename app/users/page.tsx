import ProfileCard from "@/components/ProfileCard";

interface User {
  id: number;
  name: string;
  email: string;
  company: Company;
}

interface Company {
  name: string;
}

export default async function UsersPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const renderProfileCard = (user: User) => {
    const {id, name, company} = user;
    return <ProfileCard key={id} name={name} role={company?.name || 'No Company'}/>
  }

  try {
    const response = await fetch(`${apiUrl}/api/my-users`, {cache: 'no-store'})
    const users: User[] = await response.json()

    if (users.length === 0) {
      return (<div className="p-4">No users found.</div>);
    }

    return (<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      { users.map(user => renderProfileCard(user)) }
    </div>);
  } catch (error) {
    console.error('Error fetching users:', error);
    return <div className="p-4">Failed to load users.</div>;
  }
}

