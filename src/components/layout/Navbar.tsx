import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSelamatPagi } from "@/context/SelamatPagiContext";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Sun } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", color: "bg-pink-400" },
  { to: "/videos", label: "Videos", color: "bg-purple-400" },
  { to: "/shorts", label: "Shorts", color: "bg-blue-400" },
  { to: "/songs", label: "Songs", color: "bg-rose-400" },
  { to: "/tweets", label: "Tweets", color: "bg-yellow-500" },
  { to: "/ioarts", label: "ioArts", color: "bg-green-400" },
  { to: "/clips", label: "Clips", color: "bg-teal-400" },
];

export default function Navbar() {
  const { enabled, toggle } = useSelamatPagi();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-bold tracking-tight text-foreground no-underline">
          Yopipi
        </NavLink>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors no-underline",
                    isActive
                      ? `${item.color} text-white shadow-sm`
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )
                }
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span
                  className={cn(
                    "inline-block h-4 w-6 rounded sm:hidden",
                    item.color,
                  )}
                />
              </NavLink>
            ))}
          </nav>

          {/* Selamat Pagi toggle */}
          <div className="hidden items-center gap-1.5 border-l border-border/40 pl-3 md:flex">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1.5">
                  <Sun className={cn("h-4 w-4 transition-colors", enabled ? "text-yellow-500" : "text-muted-foreground")} />
                  <Switch
                    checked={enabled}
                    onCheckedChange={toggle}
                    aria-label="Selamat Pagi mode"
                    className="scale-75"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Selamat Pagi mode — replace thumbnails with Iofi's morning tweets</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
}
