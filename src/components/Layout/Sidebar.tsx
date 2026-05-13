import { useNavigate, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navItems } from "@/data/navigation";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-220px bg-[#fafafa] border-r border-[#ebebeb] flex flex-col flex-shrink-0 min-h-screen">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-[#ebebeb] flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="font-mono text-[12px] font-medium text-[#111]">
          pipeline-watch
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3">
        {navItems.map((group) => (
          <div key={group.section} className="mb-4">
            <p className="text-[10px] font-medium text-[#bbb] uppercase tracking-widest px-2 mb-1">
              {group.section}
            </p>
            {group.items.map((item) => {
              const active = location.pathname === item.path;
              return (
                <div
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md cursor-pointer mb-0.5 transition-all ${
                    active
                      ? "bg-white border border-[#e8e8e8] shadow-sm"
                      : "hover:bg-[#f0f0f0]"
                  }`}
                >
                  <item.icon
                    size={14}
                    className={active ? "text-[#111]" : "text-[#bbb]"}
                  />
                  <span
                    className={`text-[13px] ${
                      active ? "text-[#111] font-medium" : "text-[#999]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      <Separator />

      {/* User */}
      <div className="p-2">
        <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-md hover:bg-[#f0f0f0] cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center font-mono text-[10px] text-green-500 flex-shrink-0">
            f
          </div>
          <div className="overflow-hidden flex-1">
            <p className="text-[12px] font-medium text-[#111] truncate">
              Ferdaws
            </p>
            <p className="font-mono text-[10px] text-[#bbb] truncate">
              ferdaws@gmail.com
            </p>
          </div>
        </div>
        <div
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-[#f0f0f0] cursor-pointer mt-0.5"
        >
          <LogOut size={14} className="text-[#bbb]" />
          <span className="text-[13px] text-[#999]">Logout</span>
        </div>
      </div>
    </aside>
  );
}
