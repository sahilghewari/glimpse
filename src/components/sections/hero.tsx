"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Radio, Zap, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import Image from "next/image"

const AnimatedNumber = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        const duration = 1500
        const startTime = performance.now()

        const updateNumber = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(easeOutQuart * value)
            setDisplayValue(current)

            if (progress < 1) {
                requestAnimationFrame(updateNumber)
            } else {
                setDisplayValue(value)
            }
        }

        requestAnimationFrame(updateNumber)
    }, [value])

    return <span>{displayValue}</span>
}

export function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section className="relative pt-28 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-bg">
            {/* Background image layer */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/images/hero2.jpg"
                    alt="Dark ocean waves"
                    fill
                    className="object-cover object-top opacity-30 mix-blend-soft-light"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F13]/70 via-[#0B0F13]/30 to-[#0B0F13] pointer-events-none" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* Top section: Headline + CTA */}
                <div className="text-center mb-16 lg:mb-20">


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        className="mx-auto max-w-4xl font-sans text-4xl sm:text-[64px] font-semibold tracking-tight text-white leading-[1.1]"
                    >
                        Know who is buying before <br className="hidden sm:block" /> your competitors do.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-text-dim leading-relaxed"
                    >
                        Signal intelligence that identifies high-intent companies and books qualified meetings with decision-makers, automatically.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className="mt-8 flex items-center justify-center gap-4"
                    >
                        <Button size="lg" className="group h-12 px-7 text-base font-medium">
                            Apply for pilot
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-7 text-base font-medium border-surface-2 bg-transparent hover:bg-surface-1">
                            See how it works
                        </Button>
                    </motion.div>
                </div>

                {/* Structured card panel — same design language as Case Study */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    className="rounded-2xl border border-surface-2 bg-bg overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2">

                        {/* Left panel — Signal Detection Log */}
                        <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-surface-2 relative bg-surface-1/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-1 border border-surface-2">
                                    <Radio className="h-5 w-5 text-text-muted" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-white">Live Signal Detection</h3>
                                    <p className="text-xs text-text-muted">Real-time buying intent analysis</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="text-xs font-medium text-text-dim mb-2 border-b border-surface-2/50 pb-2">Latest Signals:</div>
                                {[
                                    { text: "Series B round closed ($18M)", time: "2 min ago", score: 94 },
                                    { text: "VP Growth hired at Acme", time: "12 min ago", score: 88 },
                                    { text: "Tech stack migration (Snowflake)", time: "1 hr ago", score: 82 },
                                ].map((signal, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (idx * 0.15) }}
                                        className="flex items-center gap-3 text-sm bg-[#0A0D11] p-3 rounded-lg border border-surface-2/30"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent-1 shadow-[0_0_8px_var(--color-accent-glow)]" />
                                        <span className="text-white/90 flex-1 text-[13px]">{signal.text}</span>
                                        <span className="text-text-muted font-mono text-[11px]">{signal.time}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right panel — Key Metrics */}
                        <div className="p-8 lg:p-10 bg-[#0A0D11] relative overflow-hidden">
                            {/* Decorative background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-1/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="grid grid-cols-2 gap-4 h-full content-center relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="p-5 rounded-xl bg-bg border border-surface-2"
                                >
                                    <Zap className="h-4 w-4 text-accent-2 mb-3" />
                                    <div className="text-2xl font-semibold text-white mb-0.5">
                                        <AnimatedNumber value={107} />
                                    </div>
                                    <div className="text-xs text-text-dim">Signals This Week</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="p-5 rounded-xl bg-bg border border-surface-2"
                                >
                                    <Target className="h-4 w-4 text-success mb-3" />
                                    <div className="text-2xl font-semibold text-white mb-0.5">
                                        <AnimatedNumber value={23} />
                                    </div>
                                    <div className="text-xs text-text-dim">Meetings Booked</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="col-span-2 p-5 rounded-xl bg-gradient-to-br from-accent-1/10 to-bg border border-accent-1/20"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-semibold text-white mb-0.5">$1.2M</div>
                                            <div className="text-xs text-accent-2">Pipeline Generated (30 days)</div>
                                        </div>
                                        <div className="h-12 w-28 relative">
                                            {/* Sparkline */}
                                            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                                                <motion.path
                                                    initial={{ pathLength: 0, opacity: 0 }}
                                                    animate={{ pathLength: 1, opacity: 1 }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                                                    d="M0 35 Q 20 25, 40 30 T 70 15 T 100 5"
                                                    fill="none"
                                                    stroke="var(--color-accent-1)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <motion.path
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 0.3 }}
                                                    transition={{ duration: 1.5, delay: 1.2 }}
                                                    d="M0 35 Q 20 25, 40 30 T 70 15 T 100 5 L 100 40 L 0 40 Z"
                                                    fill="url(#hero-sparkline-gradient)"
                                                />
                                                <defs>
                                                    <linearGradient id="hero-sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="var(--color-accent-1)" stopOpacity="1" />
                                                        <stop offset="100%" stopColor="var(--color-accent-1)" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
