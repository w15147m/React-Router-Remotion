import { Link } from "react-router";

export function DesktopSidebar() {
  return (
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex-col gap-6 rounded-xl border hidden w-64 shrink-0 p-4 shadow-lg lg:block h-fit"
    >
      <nav className="space-y-1 text-sm">
        <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-100">
          Admin Menu
        </h3>
        <Link
          className="block rounded-lg p-2 transition-colors text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
          to="/playlist"
        >
          <span>Playlist</span>
        </Link>
        <Link
          className="block rounded-lg p-2 transition-colors bg-neutral-100 font-semibold text-primary dark:bg-neutral-800 dark:text-primary"
          to="/video"
        >
          <span>Video List</span>
        </Link>
      </nav>
    </div>
  );
}

export function MobileNav() {
  return (
    <nav className="flex flex-wrap lg:hidden p-2 items-center justify-start gap-4 text-sm">
      <Link
        className="rounded-md px-3 py-2 transition-colors text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        to="/playlist"
      >
        Playlist
      </Link>
      <Link
        className="rounded-md px-3 py-2 transition-colors bg-neutral-100 font-semibold text-primary dark:bg-neutral-800 dark:text-primary"
        to="/video"
      >
        Video List
      </Link>
    </nav>
  );
}
