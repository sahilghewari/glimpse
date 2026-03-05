"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "./button"
import { Sparkles } from "lucide-react"

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled ? "bg-bg/80 backdrop-blur-md border-surface-subtle" : ""
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-white leading-none">glimpse.</span>
                            <span className="text-[9px] tracking-[0.2em] font-medium text-text-muted mt-0.5 uppercase">Powered by Nexaworks</span>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                        <a href="#product" className="hover:text-white transition-colors">Product</a>
                        <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
                        <a href="#results" className="hover:text-white transition-colors">Results</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="hidden sm:inline-flex hidden md:block">Sign In</Button>
                        <Button>Apply for pilot</Button>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}
