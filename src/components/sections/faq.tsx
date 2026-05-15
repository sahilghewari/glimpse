"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Do you use AI for outreach?",
        answer: "Yes, if you prefer. We can leverage AI to create highly personalized outreach messages, or we can use your existing proven templates. It's completely up to your agency's style."
    },
    {
        question: "What exactly do you automate?",
        answer: "We automate the repetitive manual tasks in your lead generation pipeline: scraping, formatting, CRM data entry, and email sequencing. We take the robotic work out of your day."
    },
    {
        question: "Is this for any business?",
        answer: "No. We exclusively work with lead generation and vision agencies. We understand your specific workflows and build automations tailored specifically to your operational needs."
    },
    {
        question: "Will this replace my team?",
        answer: "No. Our automation acts as a force multiplier for your team, allowing them to focus on high-value tasks like strategy, relationship building, and closing deals, rather than manual data entry."
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
        <section id="faq" className="py-24 lg:py-32 bg-bg">
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
