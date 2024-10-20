"use client";

import Link from "next/link";
import { Moon, Sun, Twitter, Github, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import LoginButton from "./auth/login-button";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import Svglogo from "./ui/svglogo";

function NavBar() {
  const { setTheme } = useTheme();
  // const router = useRouter();
  const pathname = usePathname();
  const noNavBarRoutes = [
    "/auth/login",
    "/auth/register",
    "/settings",
    "/auth/new-verification",
  ];

  return (
    <>
      {!noNavBarRoutes.includes(pathname) && (
        <nav className="bg-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <span className="md:lg:text-2xl text-xl font-bold text-primary">
                    ShadBlocks
                  </span>
                </Link>
                <div className="hidden md:block ml-10  items-baseline space-x-4">
                  <Link
                    href="/docs"
                    className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/components"
                    className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Components
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64 mr-4"
                />
                <a
                  href="https://twitter.com/blocklib"
                  className="text-secondary-foreground hover:text-primary mx-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://github.com/blocklib"
                  className="text-secondary-foreground hover:text-primary mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <div className="px-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <LoginButton asChild={false}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="font-semibold text-sm"
                  >
                    Sign In
                  </Button>
                </LoginButton>
              </div>
              <div className="flex md:hidden items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-32 mr-2"
                />
                <div className="px-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button variant="outline" size="sm" className="mr-1">
                  Sign In
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open main menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col h-full">
                      <div className="flex flex-col space-y-4 mt-4">
                        <Link
                          href="/docs"
                          className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                        >
                          Docs
                        </Link>
                        <Link
                          href="/components"
                          className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                        >
                          Components
                        </Link>
                        <a
                          href="https://twitter.com/blocklib"
                          className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                        <a
                          href="https://github.com/blocklib"
                          className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
