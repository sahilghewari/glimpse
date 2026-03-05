"use client"

import { motion } from "framer-motion"
import { Activity, ShieldAlert, Zap, SearchCode } from "lucide-react"
import Image from "next/image"

export function ProductIntelligence() {
    return (
        <section id="intelligence" className="py-24 lg:py-32 bg-surface-1 border-t border-surface-2 relative overflow-hidden">
            {/* Background image layer */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/images/hero4.jpg"
                    alt="City skyline"
                    fill
                    className="object-cover object-center opacity-[0.07] mix-blend-screen grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-transparent to-surface-1 pointer-events-none" />
            </div>

            {/* Decorative vertical grid lines */}
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-[0.03] pointer-events-none z-0" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-[ping_1.5s_infinite] absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                            </span>
                            Live Pattern Recognition
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">
                            The end of spray and pray.
                        </h2>
                        <p className="text-lg text-text-dim mb-8 leading-relaxed">
                            Our intelligence engine ingests 40+ distinct data points per company daily. When a combination of signals aligns with your ideal buyer criteria, it automatically triggers a micro-audit.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { icon: Zap, text: "Funding rounds & executive changes", highlight: "Immediate alerts on Series A-C events." },
                                { icon: SearchCode, text: "Technology stack tracking", highlight: "Detect when competitors are installed or removed." },
                                { icon: ShieldAlert, text: "Hiring velocity & role scopes", highlight: "Identify specific pain points based on job reqs." }
                            ].map((item, idx) => {
                                const Icon = item.icon
                                return (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-2/30 transition-colors border border-transparent hover:border-surface-2"
                                    >
                                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-1/10 border border-accent-1/20 text-accent-1 shadow-[0_0_15px_var(--color-accent-glow)]">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white text-[16px] mb-1">{item.text}</p>
                                            <p className="text-sm text-text-dim">{item.highlight}</p>
                                        </div>
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Intelligence Terminal Feed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="border-b border-surface-2/50 bg-black/40 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Activity className="h-4 w-4 text-teal" />
                                <span className="text-xs font-mono text-text-muted font-medium tracking-widest uppercase">Signal Pipeline</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-surface-2" />
                                <div className="h-2.5 w-2.5 rounded-full bg-surface-2" />
                                <div className="h-2.5 w-2.5 rounded-full bg-surface-2" />
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 font-mono text-xs md:text-sm space-y-6 relative min-h-[400px]">
                            {/* Animated scanning line element */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-accent-1/5 to-transparent z-0 pointer-events-none"
                            />

                            {/* Signal Streams */}
                            {[
                                { time: "14:22:05", company: "ACME Corp", signal: "Installed Tailwind CSS", intent: 85, status: "ANALYZING" },
                                { time: "14:21:40", company: "Globex", signal: "Hired VP of Developer Relations", intent: 92, status: "MATCH FOUND" },
                                { time: "14:18:12", company: "Initech", signal: "Raised $12M Series A", intent: 78, status: "TRACKING" }
                            ].map((log, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (index * 0.3) }}
                                    className="relative z-10 group"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-text-muted opacity-60">[{log.time}]</span>
                                        <span className={`px-2 py-0.5 rounded text-[10px] ${log.status === 'MATCH FOUND' ? 'bg-success/20 text-success border border-success/30 shadow-[0_0_10px_var(--color-success)]' : 'bg-surface-2 text-text-dim'}`}>
                                            {log.status}
                                        </span>
                                    </div>

                                    <div className="bg-black/40 border border-surface-2/50 rounded-lg p-3 group-hover:border-accent-2/50 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="text-white font-sans font-semibold mb-1 flex items-center gap-2">
                                                    {log.status === 'MATCH FOUND' && (
                                                        <motion.div
                                                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className="h-1.5 w-1.5 rounded-full bg-success"
                                                        />
                                                    )}
                                                    {log.company}
                                                </div>
                                                <div className="text-teal/80">↳ {log.signal}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[10px] text-text-muted mb-1">INTENT SCORE</div>
                                                <div className={`text-lg font-sans font-bold ${log.intent > 90 ? 'text-accent-1 drop-shadow-[0_0_8px_var(--color-accent-glow)]' : 'text-text-main'}`}>
                                                    {log.intent}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-text-muted absolute bottom-6 left-6"
                            >
                                _Awaiting new signals...
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}