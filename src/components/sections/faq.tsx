"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Do you use generic outreach templates?",
        answer: "No. We generate hyper-personalized micro-audits specific to the prospect's company and exact gap. Each message contains live data visualizations proving why they need to act now."
    },
    {
        question: "What makes your intent signals different?",
        answer: "Static databases provide historical data. We ingest live streams across hiring boards, press releases, social activity, and tech stack telemetry to find the exact day a budget opens."
    },
    {
        question: "How does the '3 meetings' guarantee work?",
        answer: "The pilot runs for 30 days. If we don't land at least 3 qualified meetings with decision-makers at target accounts, your fee is fully refunded. No questions asked."
    },
    {
        question: "Will this replace my SDR team?",
        answer: "No. Glimpse is designed to arm your Account Executives with high-intent pipeline or superpowers your best SDRs by removing the research and signal detection burden entirely."
    }
]

function AccordionItem({ item, isOpen, onClick }: { item: any; isOpen: boolean; onClick: () => void }) {
    return (
        <div className="border-b border-surface-subtle/70 last:border-0">
            <button
                type="button"
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-white group-hover:text-brand-400 transition-colors">
                    {item.question}
                </span>
                <ChevronDown
                    className={`h-5 w-5 text-text-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-text-secondary leading-relaxed max-w-3xl">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0)

    return (
        <section className="py-24 lg:py-32 bg-bg">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
                        Common questions
                    </h2>
                    <p className="text-text-secondary">Everything you need to know about the product.</p>
                </div>

                <div className="divide-y divide-surface-subtle border-y border-surface-subtle">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
