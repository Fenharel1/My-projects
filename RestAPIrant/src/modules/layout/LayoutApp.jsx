import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"

export const Layout = ({children}) => {
  return (
    <div className="flex flex-row">
      <Sidebar></Sidebar>
      <div className="py-4 px-8 w-full space-y-4 overflow-hidden h-screen">
        <Navbar></Navbar> 
        {children}
      </div>
    </div>
  )
}