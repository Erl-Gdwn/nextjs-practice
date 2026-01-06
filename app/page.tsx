import ProfileCard from "@/components/ProfileCard"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hello 2026</h1>
      <ProfileCard name="Earl Godwin Delfin" role="Full-Stack Developer"/>
      <p className="mt-4 text-xl">My journey begins.</p>
    </div>
  );
}