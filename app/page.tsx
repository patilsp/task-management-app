import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Header from "@/components/Header"
import BoardCard from "@/components/BoardCard"


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Header />
      <div>
        <BoardCard />
      </div>
    </section>
  )
}
