import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Header from "@/components/Header"
import Board from "@/components/Board"
import Sidebar from "@/components/Sidebar"
import Dashboard from "@/components/Dashboard"


export default function IndexPage() {
  return (
    <section className="">
      {/* <Header />
      <Board />
      <Sidebar /> */}

      <Dashboard />
    </section>
  )
}
