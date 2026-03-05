"use client"

import { motion } from "framer-motion"
import { Building2, LineChart, Target, CalendarDays, ArrowRight } from "lucide-react"

export function CaseStudy() {
    return (
        <section className="py-24 lg:py-32 bg-surface-elevated/20 border-y border-surface-subtle">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-surface-subtle bg-surface-elevated/50 px-3 py-1 text-[11px] font-mono text-text-muted mb-4 tracking-wide uppercase">
                            Early Pilot Result · Confidential Client
                        </div>
                        <h2 className="text-3xl font-medium tracking-tight text-white mb-2">
                            Proof of Work
                        </h2>
                        <p className="text-text-secondary">
                            We don't sell theories. We sell booked pipeline.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="rounded-2xl border border-surface-subtle bg-bg overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2">

                        {/* Context & Signal Log */}
                        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-surface-subtle relative bg-surface-elevated/30">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-elevated border border-surface-subtle">
                                    <Building2 className="h-6 w-6 text-text-muted" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white">DevTools Startup</h3>
                                    <p className="text-sm text-text-muted">Series A • Infrastructure SaaS</p>
                                </div>
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-8">
                                Their SDR team was burning leads sending generic sequences. We replaced cold volume with perfectly timed micro-audits triggered by specific network events.
                            </p>

                            <div className="space-y-4">
                                <div className="text-sm font-medium text-white mb-2 border-b border-surface-subtle/50 pb-2">Signals Detected:</div>
                                {[
                                    { text: "VP Engineering hire detected", time: "Day 1" },
                                    { text: "DevOps hiring spike (+4 roles)", time: "Day 3" },
                                    { text: "Major product feature launch", time: "Day 7" }
                                ].map((signal, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        className="flex items-center gap-4 text-sm bg-[#0A0D11] p-3 rounded-lg border border-surface-subtle/30"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_var(--color-brand-glow)]" />
                                        <span className="text-text-primary flex-1">{signal.text}</span>
                                        <span className="text-text-muted font-mono text-xs">{signal.time}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Results Grid */}
                        <div className="p-10 lg:p-12 bg-[#0A0D11] relative overflow-hidden">
                            {/* Decorative background grid and glow */}
                            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-[0.03]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full content-center relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-6 rounded-xl bg-bg border border-surface-subtle"
                                >
                                    <CalendarDays className="h-5 w-5 text-brand-400 mb-4" />
                                    <div className="text-3xl font-semibold text-white mb-1">3</div>
                                    <div className="text-sm text-text-secondary">Meetings Booked</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="p-6 rounded-xl bg-bg border border-surface-subtle"
                                >
                                    <Target className="h-5 w-5 text-green-400 mb-4" />
                                    <div className="text-3xl font-semibold text-white mb-1">1</div>
                                    <div className="text-sm text-text-secondary">Became SQL</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="sm:col-span-2 p-6 rounded-xl bg-gradient-to-br from-brand-500/20 to-surface-base border border-brand-500/30"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <LineChart className="h-5 w-5 text-brand-400 mb-4" />
                                            <div className="text-3xl font-semibold text-white mb-1">$240k</div>
                                            <div className="text-sm text-brand-200">Pipeline Created (30 days)</div>
                                        </div>
                                        <div className="h-16 w-32 relative">
                                            {/* Simple visual sparkline */}
                                            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                                                <motion.path
                                                    initial={{ pathLength: 0, opacity: 0 }}
                                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    d="M0 35 Q 20 25, 40 30 T 70 15 T 100 5"
                                                    fill="none"
                                                    stroke="var(--color-brand-400)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <motion.path
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 0.3 }}
                                                    transition={{ duration: 1.5, delay: 0.5 }}
                                                    d="M0 35 Q 20 25, 40 30 T 70 15 T 100 5 L 100 40 L 0 40 Z"
                                                    fill="url(#sparkline-gradient)"
                                                />
                                                <defs>
                                                    <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="var(--color-brand-400)" stopOpacity="1" />
                                                        <stop offset="100%" stopColor="var(--color-brand-400)" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Credibility footnote */}
                            <div className="mt-4 pt-3 border-t border-surface-subtle/30 relative z-10">
                                <p className="text-[10px] text-text-muted font-mono leading-relaxed">
                                    Results from a 30-day pilot engagement. Client identity withheld under NDA. Verified pipeline value.
                                </p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
