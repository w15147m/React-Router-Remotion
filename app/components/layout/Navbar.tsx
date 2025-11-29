import { Link } from "react-router";

export function Navbar() {
  return (
    <div className="shadow-md">
      <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground size-9 mr-2 h-[34px] w-[34px]"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link className="flex items-center space-x-2" to="/dashboard">
         
          <div className="ml-1 grid flex-1 text-left text-sm">
            <span className="mb-0.5 truncate leading-tight font-semibold">
              Laravel Starter Kit
            </span>
          </div>
        </Link>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center space-x-2">
          <div className="relative flex items-center space-x-1">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground size-9 group h-9 w-9 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search !size-5 opacity-80 group-hover:opacity-100"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground has-[>svg]:px-3 size-10 rounded-full p-1"
            type="button"
          >
            <span className="relative flex shrink-0 size-8 overflow-hidden rounded-full">
              <span className="flex size-full items-center justify-center rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                WA
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
