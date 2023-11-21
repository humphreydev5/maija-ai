// import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p className="text-6xl text-blue-500 pt-10">Maija Ai Dashboard (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
export default DashboardPage;