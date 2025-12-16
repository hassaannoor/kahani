"use client"

import { Funnel } from "@/components/slide-blocks/funnel"
import { ProcessFlow } from "@/components/slide-blocks/process-flow"
import { Timeline } from "@/components/slide-blocks/timeline"
import { ComparisonMatrix } from "@/components/slide-blocks/comparison-matrix"
import { Matrix2x2 } from "@/components/slide-blocks/matrix"
import { IconStatGrid } from "@/components/slide-blocks/icon-stat-grid"
import { BeforeAfterSplit } from "@/components/slide-blocks/before-after"
import { Users, DollarSign, Activity, Zap } from "lucide-react"

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 p-8 md:p-24 space-y-24">

            <div className="text-center space-y-4">
                <h1 className="text-6xl font-black tracking-tight text-slate-900">Kahani</h1>
                <p className="text-xl text-slate-600">The Visual Component Library for Presentations</p>
            </div>

            {/* COMPONENT 1: FUNNEL */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">01. Funnel</h2>
                <div className="bg-white p-12 rounded-xl shadow-sm border aspect-video flex items-center justify-center">
                    <Funnel
                        data={[
                            { id: "1", label: "Impressions", value: 12000, color: "#3b82f6" },
                            { id: "2", label: "Visitors", value: 6500, color: "#60a5fa" },
                            { id: "3", label: "Signups", value: 3200, color: "#93c5fd" },
                            { id: "4", label: "Paid Users", value: 850, color: "#bfdbfe" },
                        ]}
                    />
                </div>
            </section>

            {/* COMPONENT 2: PROCESS FLOW */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">02. Process Flow</h2>
                <div className="bg-white p-12 rounded-xl shadow-sm border aspect-video flex items-center justify-center">
                    <ProcessFlow
                        steps={[
                            { id: "1", title: "Discovery", description: "Understanding user needs", status: "completed" },
                            { id: "2", title: "Design", description: "Wireframing and Prototyping", status: "current" },
                            { id: "3", title: "Development", description: "Implementation in React", status: "pending" },
                            { id: "4", title: "Launch", description: "Go-to-market strategy", status: "pending" },
                        ]}
                    />
                </div>
            </section>

            {/* COMPONENT 3: TIMELINE */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">03. Timeline</h2>
                <div className="bg-white p-12 rounded-xl shadow-sm border flex items-center justify-center">
                    <Timeline
                        items={[
                            { id: "1", date: "Q1 2024", title: "Project Kickoff", description: "Team assembly and goal setting" },
                            { id: "2", date: "Q2 2024", title: "MVP Release", description: "Core features available to beta users" },
                            { id: "3", date: "Q3 2024", title: "Growth Phase", description: "Marketing push and user acquisition" },
                            { id: "4", date: "Q4 2024", title: "Enterprise", description: "SOC2 Compliance and Scale" },
                        ]}
                    />
                </div>
            </section>

            {/* COMPONENT 4: COMPARISON MATRIX */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">04. Comparison</h2>
                <div className="bg-white p-12 rounded-xl shadow-sm border flex items-center justify-center">
                    <ComparisonMatrix
                        features={["Real-time Sync", "Offline Mode", "Custom Domain", "SSO Integration", "24/7 Support"]}
                        columns={[
                            { id: "us", title: "Kahani", isPrimary: true, data: [true, true, true, true, true] },
                            { id: "competitor_a", title: "Competitor A", data: [true, false, true, "Add-on", false] },
                            { id: "competitor_b", title: "Legacy Tool", data: [false, false, false, false, "Email only"] },
                        ]}
                    />
                </div>
            </section>

            {/* COMPONENT 5: MATRIX */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">05. 2x2 Matrix</h2>
                <div className="bg-white p-12 rounded-xl shadow-sm border aspect-video flex items-center justify-center">
                    <Matrix2x2
                        axes={{ xLow: "Niche Player", xHigh: "Visionary", yLow: "Challenger", yHigh: "Leader" }}
                        quadrantLabels={["Challengers", "Leaders", "Niche", "Visionaries"]}
                        items={[
                            { id: "1", label: "Our Product", x: 85, y: 85, color: "#3b82f6", size: "lg" },
                            { id: "2", label: "Competitor X", x: 70, y: 60, color: "#94a3b8" },
                            { id: "3", label: "Startup Y", x: 30, y: 80, color: "#94a3b8" },
                            { id: "4", label: "Legacy Z", x: 60, y: 20, color: "#94a3b8" },
                        ]}
                    />
                </div>
            </section>

            {/* COMPONENT 6: ICON STAT GRID */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">06. Icon Stat Grid</h2>
                <div className="bg-white p-12 rounded-xl shadow-sm border flex items-center justify-center">
                    <IconStatGrid
                        stats={[
                            { id: "1", label: "Total Revenue", value: "$1.2M", icon: <DollarSign />, trend: "+12%", trendUp: true, color: "#10b981" },
                            { id: "2", label: "Active Users", value: "85.2k", icon: <Users />, trend: "+5%", trendUp: true, color: "#3b82f6" },
                            { id: "3", label: "Server Uptime", value: "99.9%", icon: <Activity />, color: "#8b5cf6" },
                            { id: "4", label: "Deployment Time", value: "< 2m", icon: <Zap />, trend: "-15%", trendUp: true, color: "#f59e0b" },
                        ]}
                        columns={4}
                    />
                </div>
            </section>

            {/* COMPONENT 7: BEFORE AFTER SPLIT */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">07. Before / After</h2>
                <div className="bg-white p-1 rounded-xl shadow-sm border">
                    <BeforeAfterSplit
                        aspectRatio="16/9"
                        beforeLabel="Basic Chart"
                        afterLabel="Kahani Visualization"
                        beforeContent={
                            <div className="flex flex-col items-center justify-center w-full h-full text-slate-400">
                                <div className="w-64 h-64 bg-slate-200 rounded-full" />
                                <p className="mt-4 font-mono">Standard Pie Chart</p>
                            </div>
                        }
                        afterContent={
                            <div className="flex flex-col items-center justify-center w-full h-full bg-blue-50 text-blue-600">
                                <div className="text-6xl font-black">WOW</div>
                                <p className="mt-2 font-bold">Narrative Impact</p>
                            </div>
                        }
                    />
                </div>
            </section>

        </main>
    )
}
