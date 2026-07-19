import Link from "next/link";
import { CodeXml, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100"
        >
          <Mail className="h-4 w-4 text-blue-500" />
          <span>SABI-MAILER</span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/yourusername/sabi-mailer"
          target="_blank"
          className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <CodeXml className="h-5 w-5" />
          <span>GitHub</span>
        </Link>
      </div>
    </nav>
  );
}
