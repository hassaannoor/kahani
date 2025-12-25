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
        <main className="min-h-screen bg-slate-50 p-8 md:p-12 space-y-12">

            <div className="text-center space-y-4 flex justify-center flex-col py-12">
                <h1 className="text-6xl font-black tracking-tight text-slate-900 flex items-center mx-auto">
                    <img className="inline-block w-16 h-16 rounded-xl mr-2" src="/kahani-logo-192x192.png" alt="Kahani Logo" />
                    Kahani</h1>
                <p className="text-xl text-slate-600">A Complete Storytelling Kit with 20+ Infographic Components</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* COMPONENT 1: FUNNEL */}
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">01. Funnel</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px]">
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
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">02. Process Flow</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px]">
                        <ProcessFlow
                            steps={[
                                { id: "1", title: "Discovery", description: "Needs", status: "completed" },
                                { id: "2", title: "Design", description: "UX/UI", status: "current" },
                                { id: "3", title: "Build", description: "React", status: "pending" },
                            ]}
                        />
                    </div>
                </section>

                {/* COMPONENT 3: TIMELINE */}
                <section className="space-y-4 flex flex-col md:col-span-2 xl:col-span-1">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">03. Timeline</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px]">
                        <Timeline
                            items={[
                                { id: "1", date: "Q1 2024", title: "Kickoff", description: "Goal setting" },
                                { id: "2", date: "Q2 2024", title: "MVP", description: "Beta launch" },
                                { id: "3", date: "Q3 2024", title: "Growth", description: "Scale up" },
                            ]}
                        />
                    </div>
                </section>

                {/* COMPONENT 4: COMPARISON MATRIX */}
                <section className="space-y-4 flex flex-col md:col-span-2 xl:col-span-2">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">04. Comparison</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px]">
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
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">05. 2x2 Matrix</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center aspect-square md:aspect-auto min-h-[300px]">
                        <Matrix2x2
                            axes={{ xLow: "Niche", xHigh: "Visionary", yLow: "Challenger", yHigh: "Leader" }}
                            quadrantLabels={["Challengers", "Leaders", "Niche", "Visionaries"]}
                            items={[
                                { id: "1", label: "Us", x: 85, y: 85, color: "#3b82f6", size: "lg" },
                                { id: "2", label: "Comp X", x: 70, y: 60, color: "#94a3b8" },
                                { id: "3", label: "Startup Y", x: 30, y: 80, color: "#94a3b8" },
                            ]}
                        />
                    </div>
                </section>

                {/* COMPONENT 6: ICON STAT GRID */}
                <section className="space-y-4 flex flex-col md:col-span-2 xl:col-span-3">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">06. Icon Stat Grid</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[200px]">
                        <IconStatGrid
                            stats={[
                                { id: "1", label: "Revenue", value: "$1.2M", icon: <DollarSign />, trend: "+12%", trendUp: true, color: "#10b981" },
                                { id: "2", label: "Users", value: "85.2k", icon: <Users />, trend: "+5%", trendUp: true, color: "#3b82f6" },
                                { id: "3", label: "Uptime", value: "99.9%", icon: <Activity />, color: "#8b5cf6" },
                                { id: "4", label: "Speed", value: "< 2m", icon: <Zap />, trend: "-15%", trendUp: true, color: "#f59e0b" },
                            ]}
                            columns={4}
                        />
                    </div>
                </section>

                {/* COMPONENT 7: BEFORE AFTER SPLIT */}
                <section className="space-y-4 flex flex-col md:col-span-2 xl:col-span-3">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">07. Before / After</h2>
                    <div className="bg-white p-1 rounded-xl shadow-sm border min-h-[400px]">
                        <BeforeAfterSplit
                            aspectRatio="16/9"
                            beforeLabel="Old Way"
                            afterLabel="New Way"
                            beforeContent={
                                <div className="flex flex-col items-center justify-center w-full h-full text-slate-400 px-10 text-center">
                                    <div className="w-64 h-64 bg-slate-200 rounded-full mb-4" />
                                    <p className="font-mono">Hard to read charts</p>
                                </div>
                            }
                            afterContent={
                                <div className="flex flex-col items-center justify-center w-full h-full bg-blue-50 text-blue-600 px-10 text-center">
                                    <div className="text-6xl font-black mb-2">WOW</div>
                                    <p className="font-bold">Engaging Visuals</p>
                                </div>
                            }
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}
