"use client"

import { motion } from "framer-motion"
import { Radar, BrainCircuit, CalendarCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// ─── Animated Micro UI: Signal Radar ───
function SignalRadarMini() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Concentric rings */}
            <div className="absolute h-32 w-32 rounded-full border border-surface-2/40" />
            <div className="absolute h-20 w-20 rounded-full border border-surface-2/60" />
            <div className="absolute h-8 w-8 rounded-full border border-accent-1/30 bg-accent-1/5" />

            {/* Sweep arm */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-16 h-[1px] origin-left"
                style={{
                    background: "linear-gradient(90deg, rgba(91,127,255,0.8), transparent)"
                }}
            />

            {/* Signal pings appearing */}
            {[
                { top: "20%", left: "65%", delay: 0 },
                { top: "55%", left: "25%", delay: 1.2 },
                { top: "35%", left: "75%", delay: 2.4 },
            ].map((ping, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: ping.delay }}
                    className="absolute h-2 w-2 rounded-full bg-accent-1 shadow-[0_0_10px_var(--color-accent-1)]"
                    style={{ top: ping.top, left: ping.left }}
                />
            ))}

            {/* Center dot */}
            <div className="h-1.5 w-1.5 rounded-full bg-accent-1 shadow-[0_0_6px_var(--color-accent-1)] relative z-10" />
        </div>
    )
}

// ─── Animated Micro UI: Intent Score Gauge ───
function IntentScoreGauge() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
            {/* Arc gauge */}
            <div className="relative h-16 w-28">
                <svg viewBox="0 0 120 70" className="w-full h-full">
                    {/* Background arc */}
                    <path
                        d="M 10 60 A 50 50 0 0 1 110 60"
                        fill="none"
                        stroke="var(--color-surface-2)"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                    {/* Animated fill arc */}
                    <motion.path
                        d="M 10 60 A 50 50 0 0 1 110 60"
                        fill="none"
                        stroke="var(--color-accent-1)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 0.94 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        style={{ filter: "drop-shadow(0 0 6px rgba(91,127,255,0.5))" }}
                    />
                </svg>
                {/* Score number */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute inset-0 flex items-end justify-center pb-0"
                >
                    <span className="text-xl font-semibold text-white">94</span>
                </motion.div>
            </div>

            {/* Score label + bar breakdown */}
            <div className="w-full space-y-1.5 px-2">
                <div className="flex items-center justify-between text-[10px]">
                    <span className="text-text-muted">Fit</span>
                    <span className="text-accent-2 font-mono">96</span>
                </div>
                <motion.div
                    className="h-1 rounded-full bg-accent-1/80"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "96%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <div className="flex items-center justify-between text-[10px]">
                    <span className="text-text-muted">Timing</span>
                    <span className="text-success font-mono">92</span>
                </div>
                <motion.div
                    className="h-1 rounded-full bg-success/80"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                />
            </div>
        </div>
    )
}

// ─── Animated Micro UI: Calendar Auto-Book ───
function CalendarBookMini() {
    const days = ["M", "T", "W", "T", "F"]
    const slots = [
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
    ]

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-2 px-2">
            {/* Mini calendar header */}
            <div className="flex w-full justify-between px-1">
                {days.map((d, i) => (
                    <span key={i} className="text-[9px] font-mono text-text-muted w-6 text-center">{d}</span>
                ))}
            </div>

            {/* Calendar grid with auto-fill animation */}
            {slots.map((row, rowIdx) => (
                <div key={rowIdx} className="flex w-full justify-between px-1">
                    {row.map((filled, colIdx) => (
                        <motion.div
                            key={colIdx}
                            initial={{ opacity: 0.3, scale: 0.8 }}
                            whileInView={filled ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.8 }}
                            transition={{ delay: 0.3 + (rowIdx * 0.3) + (colIdx * 0.08), duration: 0.4 }}
                            className={`h-5 w-6 rounded-sm flex items-center justify-center ${filled
                                ? "bg-accent-1/20 border border-accent-1/40"
                                : "bg-surface-2/20 border border-surface-2/30"
                                }`}
                        >
                            {filled ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.6 + (rowIdx * 0.3), type: "spring" }}
                                    className="h-1.5 w-1.5 rounded-full bg-accent-1 shadow-[0_0_6px_var(--color-accent-1)]"
                                />
                            ) : null}
                        </motion.div>
                    ))}
                </div>
            ))}

            {/* Confirmation toast */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="flex items-center gap-1.5 mt-1 px-2 py-1 rounded-md bg-success/10 border border-success/20"
            >
                <div className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_6px_rgba(51,209,122,0.6)]" />
                <span className="text-[10px] font-medium text-success">Meeting booked — Tues 2pm</span>
            </motion.div>
        </div>
    )
}

export function HowItWorks() {
    const steps = [
        {
            icon: Radar,
            title: "1. Detect Signals",
            description: "We monitor funding, hiring, tech stack changes, and product launches in real-time.",
            visual: <SignalRadarMini />,
        },
        {
            icon: BrainCircuit,
            title: "2. Analyze Intent",
            description: "Our intelligence engine scores fit and timing, surfacing the top 1% of accounts.",
            visual: <IntentScoreGauge />,
        },
        {
            icon: CalendarCheck,
            title: "3. Book Meetings",
            description: "Personalized micro-audits are sent to decision-makers, booking directly on your calendar.",
            visual: <CalendarBookMini />,
        }
    ]

    return (
        <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden bg-bg">
            {/* Background motif */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-1/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl mb-4">
                        A precise engine for pipeline generation
                    </h2>
                    <p className="text-lg text-text-dim">
                        Forget spray and pray. We replace volume with accuracy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-[120px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent-1/30 to-transparent z-0 overflow-hidden">
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-1/3 h-full bg-gradient-to-r from-transparent via-accent-1 to-transparent"
                        />
                    </div>

                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="relative z-10 h-full"
                            >
                                <Card className="h-full bg-surface-1/30 border-surface-2 hover:border-accent-1/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(91,127,255,0.08)]">
                                    <CardContent className="pt-8">
                                        <div className="h-12 w-12 rounded-lg bg-bg border border-surface-2 flex items-center justify-center mb-6 group-hover:border-accent-1/40 group-hover:shadow-[0_0_15px_var(--color-accent-glow)] transition-all">
                                            <Icon className="h-6 w-6 text-accent-2 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                                        <p className="text-text-dim text-sm leading-relaxed mb-6">
                                            {step.description}
                                        </p>

                                        {/* Animated Micro UI Preview */}
                                        <div className="h-40 w-full rounded-lg bg-[#0A0D11] border border-surface-2/30 overflow-hidden relative">
                                            {step.visual}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
