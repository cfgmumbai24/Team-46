"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Component() {
    const router = useRouter();
  return (
    <main className="flex flex-col gap-12 py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Explore Literacy</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unlock the Power of Language</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Dive into a world of literature, poetry, and storytelling. Discover new perspectives and expand your
            linguistic horizons.
          </p>
          <Link
            href="/speech"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Explore Maths</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unlock the Power of Numbers</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Dive into the world of mathematics, from basic arithmetic to advanced calculus. Discover the beauty and
            logic behind the numbers.
          </p>
          <Link
            href="/maths"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  )
}