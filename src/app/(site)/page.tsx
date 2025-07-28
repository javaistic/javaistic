import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl max-w-6xl mx-auto">
        Learn{" "}
        <span className="bg-gradient-to-br from-green-400 to-cyan-500 bg-clip-text font-extrabold text-transparent">
          Java
        </span>{" "}
        programming very fast and easily with{" "}
        <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text font-extrabold text-transparent">
          Javaistic.
        </span>
      </h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs/installation"
          className="text-fd-foreground font-semibold underline"
        >
          /docs/installation
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
