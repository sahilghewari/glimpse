import { Button } from "./button"
import { GlimpseLogo } from "./glimpse-logo"

export function Footer() {
    return (
        <footer className="relative border-t border-surface-2 bg-bg overflow-hidden">
            {/* Final CTA Strip */}
            <div className="relative py-24 lg:py-32 border-b border-surface-2 overflow-hidden">
                <div className="absolute inset-0 bg-accent-1/5 mix-blend-screen pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent-1/20 blur-[150px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Stop guessing who might buy. <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-teal">Start targeting who already is.</span>
                    </h2>
                    <div className="mt-10 flex justify-center">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-[0_0_30px_var(--color-accent-glow)] hover:shadow-[0_0_40px_var(--color-accent-glow)]">
                            Apply for pilot today
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer content */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <GlimpseLogo className="h-8 w-8" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white leading-none">glimpse.</span>
                                <span className="text-[9px] tracking-[0.2em] font-medium text-text-muted mt-0.5 uppercase">Powered by Nexaworks</span>
                            </div>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                            Signal intelligence that books qualified meetings with decision-makers, automatically.
                        </p>
                    </div>

                    {/* Links — only real sections */}
                    <div className="flex gap-16">
                        <div>
                            <h3 className="text-sm font-semibold text-white">Product</h3>
                            <ul role="list" className="mt-4 space-y-3">
                                {[
                                    { label: "How it Works", href: "#how-it-works" },
                                    { label: "Results", href: "#results" },
                                    { label: "Pricing", href: "#pricing" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} className="text-sm text-text-muted hover:text-white transition-colors">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white">Legal</h3>
                            <ul role="list" className="mt-4 space-y-3">
                                {["Privacy", "Terms"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-surface-2/50">
                    <p className="text-xs text-text-muted">
                        © {new Date().getFullYear()} Glimpse by Nexaworks. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
