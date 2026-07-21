import { BookOpen, CodeXml, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-violet-600 text-white">
            <Mail size={16} strokeWidth={2.25} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-50">
              sabi-mailer
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Reliable email delivery, with DLQ support
            </span>
          </div>
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/avisekh3110/sabi-mailer"
            title="View on GitHub"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            <CodeXml size={16} />
            Read Code
          </Link>
        </div>
      </div>
    </nav>
  );
}
