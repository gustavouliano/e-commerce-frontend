import { LayoutDashboard, BarChart3, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from ".";

export default function EmployeeSidebar() {
  return (
    <Sidebar>
      <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
      <SidebarItem icon={<BarChart3 size={20} />} text="Products" />
      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
    </Sidebar>
  );
}
