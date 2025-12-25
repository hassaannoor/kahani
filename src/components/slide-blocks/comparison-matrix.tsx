"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check, X, Minus } from "lucide-react"

interface ComparisonColumn {
    id: string
    title: string
    isPrimary?: boolean // The "Us" column
    data: (boolean | string | null)[] // Corresponds to rows
}

interface ComparisonMatrixProps {
    features: string[]
    columns: ComparisonColumn[]
    className?: string
}

export function ComparisonMatrix({ features, columns, className }: ComparisonMatrixProps) {
    return (
        <div className={cn("overflow-hidden rounded-xl border bg-card text-card-foreground shadow", className)}>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-4 text-left font-semibold text-muted-foreground w-1/3">Feature</th>
                        {columns.map((col) => (
                            <th
                                key={col.id}
                                className={cn(
                                    "p-4 text-center font-bold text-lg",
                                    col.isPrimary ? "bg-primary/10 text-primary" : "bg-muted/30"
                                )}
                            >
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, rowIndex) => (
                        <motion.tr
                            layout
                            key={feature} // Assuming feature name is unique. If not, index is bad for layout animations.
                            // Note: The caller page should ensure stability. If we reduce features, rowIndex changes for others? No, map order.
                            // Ideally we need a unique ID for features, but the interface takes string[].
                            // unique string is fine.
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ delay: rowIndex * 0.05 }}
                            className="border-t border-border/50 hover:bg-muted/5 transition-colors"
                        >
                            <td className="p-4 font-medium">{feature}</td>
                            {columns.map((col, colIndex) => {
                                const val = col.data[rowIndex]
                                return (
                                    <td
                                        key={`${col.id}-${rowIndex}`}
                                        className={cn(
                                            "p-4 text-center",
                                            col.isPrimary ? "bg-primary/5 font-semibold" : ""
                                        )}
                                    >
                                        <div className="flex justify-center items-center">
                                            {val === true ? <Check className="text-green-500" /> :
                                                val === false ? <X className="text-red-400 opacity-50" /> :
                                                    val === null ? <Minus className="text-muted-foreground opacity-30" /> : val}
                                        </div>
                                    </td>
                                )
                            })}
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
