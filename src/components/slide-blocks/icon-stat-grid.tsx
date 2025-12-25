"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
// We'll let the user pass Lucide components or similar as ReactNodes, or simple elements
import { TrendingUp } from "lucide-react"

interface StatItem {
    id: string
    label: string
    value: string | number
    icon?: React.ReactNode
    trend?: string // e.g., "+20%"
    trendUp?: boolean
    description?: string
    color?: string
}

interface IconStatGridProps {
    stats: StatItem[]
    columns?: 2 | 3 | 4
    className?: string
}

export function IconStatGrid({ stats, columns = 3, className }: IconStatGridProps) {
    return (
        <div
            className={cn("grid gap-6 w-full", className)}
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
            {stats.map((stat, i) => (
                <motion.div
                    layout
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card text-card-foreground p-6 rounded-xl border shadow-sm hover:shadow-md transition-all flex flex-col items-start"
                >
                    <div
                        className="mb-4 p-3 rounded-lg bg-primary/10 text-primary"
                        style={{ color: stat.color, backgroundColor: stat.color ? `${stat.color}15` : undefined }}
                    >
                        {stat.icon || <TrendingUp />}
                    </div>

                    <div className="text-4xl font-extrabold tracking-tight mb-1">{stat.value}</div>

                    <div className="flex items-center gap-2 mb-2 font-medium text-lg">
                        {stat.label}
                        {stat.trend && (
                            <span className={cn("text-xs px-1.5 py-0.5 rounded", stat.trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                                {stat.trend}
                            </span>
                        )}
                    </div>

                    {stat.description && <p className="text-muted-foreground text-sm">{stat.description}</p>}
                </motion.div>
            ))}
        </div>
    )
}
