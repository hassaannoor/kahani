"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FunnelData {
    id: string
    label: string
    value: number | string
    color?: string
    description?: string
}

interface FunnelProps {
    data: FunnelData[]
    orientation?: "vertical" | "horizontal"
    showPercentage?: boolean
    className?: string
    width?: number | string
    height?: number | string
}

export function Funnel({
    data,
    orientation = "vertical",
    showPercentage = true,
    className,
    width = "100%",
    height = 400,
}: FunnelProps) {
    // Sort data by value if they are numbers to ensure funnel shape? 
    // actually, funnels usually respect the order given (e.g. Lead -> Deal), even if values don't strictly decrease (though they should).
    // We'll keep input order.

    const maxVal = Math.max(...data.map((d) => (typeof d.value === "number" ? d.value : 0)))

    return (
        <div
            className={cn("flex items-center justify-center p-4", className)}
            style={{ width, height }}
        >
            <div
                className={cn(
                    "relative flex gap-1",
                    orientation === "vertical" ? "flex-col w-full max-w-md" : "flex-row h-full items-center"
                )}
            >
                {data.map((item, index) => {
                    const isLast = index === data.length - 1
                    const nextItem = data[index + 1]

                    // Calculate widths/heights for visual tapering
                    // For vertical: width decreases
                    // For horizontal: height decreases

                    const percent = typeof item.value === "number" && typeof data[0].value === "number"
                        ? Math.round((item.value / data[0].value) * 100)
                        : 0

                    return (
                        <motion.div
                            layout // Enable layout animations
                            key={item.id}
                            initial={{ opacity: 0, y: orientation === "vertical" ? 20 : 0, x: orientation === "horizontal" ? -20 : 0 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }} // Add exit animation support
                            transition={{ delay: index * 0.1 }}
                            className="relative flex-1 group"
                        >
                            <div
                                className={cn(
                                    "flex items-center justify-between text-white font-bold p-4 transition-all hover:brightness-110",
                                    orientation === "vertical" ? "mx-auto rounded-md mb-1 min-h-[60px]" : "mx-auto rounded-md mr-1 min-w-[100px] h-full flex-col justify-center"
                                )}
                                style={{
                                    backgroundColor: item.color || `hsl(var(--primary) / ${1 - index * 0.15})`, // Fallback fade
                                    // Visual tapering logic could be complex clip-paths, but for "SlideBlocks" a clean shrinking block design is often more readable and modern than a literal trapezoild.
                                    // However, user asked for "Funnel". Let's do a trapezoid shape via clip-path or simple with dynamics.
                                    // Simple width dynamics for Vertical:
                                    width: orientation === "vertical" ? `${100 - (index * (50 / data.length))}%` : "100%",
                                    // Simple height dynamics for Horizontal:
                                    height: orientation === "horizontal" ? `${100 - (index * (50 / data.length))}%` : "100%",
                                }}
                            >
                                <div className="flex flex-col items-center justify-center w-full z-10 drop-shadow-md">
                                    <span className="text-lg leading-tight">{item.label}</span>
                                    <span className="text-sm opacity-90 font-mono">{item.value}</span>
                                    {showPercentage && index > 0 && (
                                        <span className="text-xs bg-black/20 px-1 rounded mt-1">{percent}%</span>
                                    )}
                                </div>

                                {/* Optional description tooltip or side-text */}
                                {item.description && (
                                    <div className={cn(
                                        "absolute opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs p-2 rounded shadow-lg z-20 w-48 pointer-events-none",
                                        orientation === "vertical" ? "left-full ml-2 top-1/2 -translate-y-1/2" : "top-full mt-2 left-1/2 -translate-x-1/2"
                                    )}>
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
