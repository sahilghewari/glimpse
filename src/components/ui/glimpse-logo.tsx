import * as React from "react"

export function GlimpseLogo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                {/* Advanced 3D Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Inner Shadow Filter for 3D depth */}
                <filter id="inner-shadow">
                    <feOffset dx="0" dy="2" />
                    <feGaussianBlur stdDeviation="3" result="offset-blur" />
                    <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                    <feFlood floodColor="black" floodOpacity="0.4" result="color" />
                    <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                    <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>

                {/* Core gradient for the petals */}
                <linearGradient id="apertureGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A5B4FC" />   {/* Indigo 300 */}
                    <stop offset="50%" stopColor="#6366F1" />  {/* Indigo 500 */}
                    <stop offset="100%" stopColor="#3730A3" /> {/* Indigo 800 */}
                </linearGradient>
                <linearGradient id="apertureGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#818CF8" />   {/* Indigo 400 */}
                    <stop offset="60%" stopColor="#4F46E5" />  {/* Indigo 600 */}
                    <stop offset="100%" stopColor="#312E81" /> {/* Indigo 900 */}
                </linearGradient>

                {/* Center jewel gradient */}
                <radialGradient id="centerJewel" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E0E7FF" />   {/* Indigo 100 */}
                    <stop offset="60%" stopColor="#818CF8" />  {/* Indigo 400 */}
                    <stop offset="100%" stopColor="#4338CA" /> {/* Indigo 700 */}
                </radialGradient>
            </defs>

            {/* Base ambient shadow */}
            <circle cx="60" cy="60" r="45" fill="#4F46E5" opacity="0.15" filter="url(#glow)" />

            <g style={{ mixBlendMode: 'screen' }} transform="translate(10, 10)">
                {/* Outer larger ambient petals */}
                <ellipse cx="50" cy="50" rx="46" ry="20" transform="rotate(0 50 50)" fill="url(#apertureGrad1)" opacity="0.4" filter="url(#glow)" />
                <ellipse cx="50" cy="50" rx="46" ry="20" transform="rotate(45 50 50)" fill="url(#apertureGrad2)" opacity="0.4" filter="url(#glow)" />
                <ellipse cx="50" cy="50" rx="46" ry="20" transform="rotate(90 50 50)" fill="url(#apertureGrad1)" opacity="0.4" filter="url(#glow)" />
                <ellipse cx="50" cy="50" rx="46" ry="20" transform="rotate(135 50 50)" fill="url(#apertureGrad2)" opacity="0.4" filter="url(#glow)" />

                {/* Inner sharp solid petals with inner shadow for 3D structural feel */}
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(22.5 50 50)" fill="url(#apertureGrad2)" opacity="0.85" filter="url(#inner-shadow)" />
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(67.5 50 50)" fill="url(#apertureGrad1)" opacity="0.85" filter="url(#inner-shadow)" />
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(112.5 50 50)" fill="url(#apertureGrad2)" opacity="0.85" filter="url(#inner-shadow)" />
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(157.5 50 50)" fill="url(#apertureGrad1)" opacity="0.85" filter="url(#inner-shadow)" />

                {/* Bright highlight strokes on inner petals */}
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(22.5 50 50)" stroke="#C7D2FE" strokeWidth="0.5" opacity="0.6" />
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(67.5 50 50)" stroke="#C7D2FE" strokeWidth="0.5" opacity="0.6" />
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(112.5 50 50)" stroke="#C7D2FE" strokeWidth="0.5" opacity="0.6" />
                <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(157.5 50 50)" stroke="#C7D2FE" strokeWidth="0.5" opacity="0.6" />
            </g>

            {/* Central glowing core / jewel */}
            <g transform="translate(10, 10)">
                <circle cx="50" cy="50" r="10" fill="#312E81" opacity="0.6" filter="url(#glow)" />
                <circle cx="50" cy="50" r="7" fill="url(#centerJewel)" filter="url(#inner-shadow)" />
                <circle cx="50" cy="48.5" r="3" fill="#FFFFFF" opacity="0.7" filter="url(#glow)" /> {/* Bright top highlight */}
            </g>
        </svg>
    )
}
