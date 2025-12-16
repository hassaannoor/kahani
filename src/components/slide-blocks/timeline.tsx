"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Milestone {
    id: string
    date: string
    title: string
    description?: string
    color?: string
}

interface TimelineProps {
    items: Milestone[]
    layout?: "horizontal" | "vertical-alternating" | "vertical-left"
    className?: string
}

export function Timeline({ items, layout = "horizontal", className }: TimelineProps) {
    if (layout === "horizontal") {
        return (
            <div className={cn("relative w-full py-10", className)}>
                {/* Horizontal Line */}
                <div className="absolute top-[29px] left-0 w-full h-1 bg-border rounded-full" />

                <div className="flex justify-between items-start gap-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center flex-1"
                        >
                            <div className="w-4 h-4 rounded-full bg-background border-4 border-primary z-10 mb-4" />
                            <div className="absolute top-[35px] h-8 w-[1px] bg-border/50" /> {/* connector down */}

                            <div className="mt-4 bg-muted/30 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors w-full">
                                <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded-full mb-2 inline-block">
                                    {item.date}
                                </span>
                                <h4 className="font-bold text-md">{item.title}</h4>
                                {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    }

    // Vertical Implementation (defaulting to simplified list for now, can expand later)
    return (
        <div className={cn("relative max-w-2xl mx-auto py-8", className)}>
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8 pl-12">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />
                        <div className="bg-card p-4 rounded-lg shadow-sm border">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                            </div>
                            {item.description && <p className="text-muted-foreground text-sm">{item.description}</p>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
