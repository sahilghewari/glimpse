import * as React from "react"
import Image from "next/image"

export function GlimpseLogo({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image 
                src="https://i.postimg.cc/cJgxD549/hivemetal.png"
                alt="Hive Logo"
                fill
                className="object-contain"
                unoptimized
            />
        </div>
    )
}
