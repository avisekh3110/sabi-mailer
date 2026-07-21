import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center gap-8 px-12 py-8 border-t border-t-zinc-400 dark:border-t-zinc-800">
      <span>
        Built with ❤️ by{" "}
        <Link href={"https://github.com/avisekh3110"}>Avisekh Sabi</Link>
      </span>
    </footer>
  );
}
