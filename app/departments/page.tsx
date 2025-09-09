import DepartmentsHero from "@/components/Departments/DepartmentsHero"
import DepartmentsList from "@/components/Departments/DepartmentsList"

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col">
      <DepartmentsHero />
      <DepartmentsList />
    </div>
  )
}
