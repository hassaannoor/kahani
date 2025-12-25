"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MatrixItem {
    id: string
    label: string
    x: number // 0-100 position
    y: number // 0-100 position
    color?: string
    size?: "sm" | "md" | "lg"
}

interface MatrixProps {
    items: MatrixItem[]
    axes?: {
        xLow: string
        xHigh: string
        yLow: string
        yHigh: string
    }
    className?: string
    quadrantLabels?: [string, string, string, string] // TL, TR, BL, BR
}

export function Matrix2x2({ items, axes, className, quadrantLabels }: MatrixProps) {
    return (
        <div className={cn("relative aspect-square w-full max-w-2xl mx-auto bg-slate-50 border rounded-lg p-10", className)}>

            {/* Axis Labels */}
            {axes && (
                <>
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{axes.yLow}</span>
                    <span className="absolute left-2 top-2 -translate-y-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{axes.yHigh}</span>

                    <span className="absolute bottom-2 left-10 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{axes.xLow}</span>
                    <span className="absolute bottom-2 right-10 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{axes.xHigh}</span>
                </>
            )}

            {/* Grid Lines */}
            <div className="absolute inset-10 border-l-2 border-b-2 border-slate-300">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 dashed" />
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-200 dashed" />
            </div>

            {/* Quadrant Background Labels (Subtle) */}
            {quadrantLabels && (
                <div className="absolute inset-10 grid grid-cols-2 grid-rows-2 pointer-events-none">
                    {quadrantLabels.map((lbl, i) => (
                        <div key={i} className="flex items-center justify-center p-4">
                            <span className="text-3xl font-black text-slate-100 uppercase select-none">{lbl}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Items */}
            <div className="absolute inset-10">
                {items.map((item, i) => (
                    <motion.div
                        layout
                        key={item.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className={cn(
                            "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center group cursor-pointer",
                        )}
                        style={{
                            left: `${item.x}%`,
                            bottom: `${item.y}%` // In cartesian, y goes up
                        }}
                    >
                        <div
                            className={cn(
                                "rounded-full shadow-lg border-2 border-white transition-transform group-hover:scale-125",
                                item.size === "lg" ? "w-6 h-6" : item.size === "sm" ? "w-3 h-3" : "w-4 h-4"
                            )}
                            style={{ backgroundColor: item.color || "var(--primary, #3b82f6)" }}
                        />
                        <span className="mt-1 text-xs font-bold leading-none bg-white/80 px-1 rounded shadow-sm backdrop-blur-sm whitespace-nowrap">
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
