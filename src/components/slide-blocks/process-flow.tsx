"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
// We need icons but let's assume we pass them as children or specific props to keep it generic,
// OR import specific generic ones. For now, we'll rely on text/layout.
import { ArrowRight, Check } from "lucide-react"

interface Step {
    id: string
    title: string
    description?: string
    status?: "completed" | "current" | "pending"
    icon?: React.ReactNode
}

interface ProcessFlowProps {
    steps: Step[]
    className?: string
}

export function ProcessFlow({ steps, className }: ProcessFlowProps) {
    return (
        <div className={cn("w-full py-8", className)}>
            <div className="relative flex justify-between items-start gap-4">
                {/* Connecting Line background */}
                <div className="absolute top-8 left-0 w-full h-1 bg-muted -z-10 rounded-full" />

                {steps.map((step, index) => {
                    let statusColor = "bg-muted text-muted-foreground"
                    if (step.status === "completed") statusColor = "bg-primary text-primary-foreground"
                    if (step.status === "current") statusColor = "bg-blue-600 text-white ring-4 ring-blue-100"

                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="flex-1 flex flex-col items-center text-center relative"
                        >
                            {/* Connector Progress Line (active) */}
                            <div
                                className={cn(
                                    "absolute top-8 right-1/2 w-full h-1 -z-10",
                                    index === steps.length - 1 ? "hidden" : "",
                                    step.status === "completed" ? "bg-primary" : "bg-transparent" // Only color the line after completed steps?
                                )}
                                style={{ left: "50%", width: "100%" }}
                            />

                            <div className={cn(
                                "w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-sm transition-all z-10 bg-background border-4",
                                step.status === "completed" ? "border-primary bg-primary text-primary-foreground" :
                                    step.status === "current" ? "border-blue-600 text-blue-600" :
                                        "border-muted text-muted-foreground"
                            )}>
                                {step.status === "completed" ? <Check size={28} /> : <span>{index + 1}</span>}
                            </div>

                            <div className="mt-4 px-2">
                                <h3 className={cn("font-bold text-lg", step.status === "current" ? "text-blue-600" : "")}>{step.title}</h3>
                                {step.description && (
                                    <p className="text-sm text-muted-foreground mt-1 leading-snug">{step.description}</p>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
