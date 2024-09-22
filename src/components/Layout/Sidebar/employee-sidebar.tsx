import { LayoutDashboard, BarChart3, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from ".";

const routes = [
  { path: "/products", icon: <BarChart3 size={20} />, text: "Products" },
  // { path: "/settings", icon: <Settings size={20} />, text: "Products" },
];

export default function EmployeeSidebar() {
  return (
    <Sidebar>
      <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
      {routes.map((route, key) => (
        <SidebarItem
          key={key}
          icon={route.icon}
          text={route.text}
          path={route.path}
        />
      ))}
      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
    </Sidebar>
  );
}
