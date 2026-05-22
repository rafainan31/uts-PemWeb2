import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import {
  LayoutDashboard,
  Tags,
  Mic,
  CalendarDays,
  User,
  LogOut,
} from "lucide-react";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Category",
      path: "/dashboard/category",
      icon: <Tags size={20} />,
    },
    {
      name: "Pembicara",
      path: "/dashboard/pembicara",
      icon: <Mic size={20} />,
    },
    {
      name: "Event",
      path: "/dashboard/event",
      icon: <CalendarDays size={20} />,
    },
    {
      name: "Biodata",
      path: "/dashboard/biodata",
      icon: <User size={20} />,
    },
  ];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-72 min-h-screen bg-gradient-to-b from-red-700 via-red-600 to-pink-600 text-white p-5 flex flex-col justify-between shadow-2xl">
        <div>
          {/* LOGO */}
          <div className="mb-10">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg">
              <h1 className="text-3xl font-extrabold tracking-wide">
                Invofest
              </h1>
              <p className="text-sm text-red-100 mt-1">
                Event Management
              </p>
            </div>
          </div>

          {/* MENU */}
          <ul className="flex flex-col gap-3">
            {menu.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-white/90 hover:bg-white hover:text-red-600 hover:shadow-lg transition-all duration-300"
                >
                  {item.icon}
                  <span className="font-medium">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LOGOUT */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white text-red-600 rounded-xl font-semibold hover:bg-red-950 hover:text-white transition-all duration-300 shadow-md"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white min-h-full rounded-3xl shadow-md p-6 border border-gray-100">
          <Outlet />
        </div>
      </main>
    </div>
  );
}