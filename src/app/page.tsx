"use client"

import { Funnel } from "@/components/slide-blocks/funnel"
import { ProcessFlow } from "@/components/slide-blocks/process-flow"
import { Timeline } from "@/components/slide-blocks/timeline"
import { ComparisonMatrix } from "@/components/slide-blocks/comparison-matrix"
import { Matrix2x2 } from "@/components/slide-blocks/matrix"
import { IconStatGrid } from "@/components/slide-blocks/icon-stat-grid"
import { BeforeAfterSplit } from "@/components/slide-blocks/before-after"
import { Users, DollarSign, Activity, Zap } from "lucide-react"
import Petals from "@/components/slide-blocks/petals"
import Funnel2 from "@/components/slide-blocks/funnel2"

import { useAutoReducingData } from "@/hooks/use-demo-data"

export default function Home() {
    // 1. Funnel Data (Standard)
    const funnelData = [
        { id: "1", label: "Impressions", value: 12000, color: "#3b82f6" },
        { id: "2", label: "Visitors", value: 6500, color: "#60a5fa" },
        { id: "3", label: "Signups", value: 3200, color: "#93c5fd" },
        { id: "4", label: "Paid Users", value: 850, color: "#bfdbfe" },
        { id: "5", label: "Retained", value: 600, color: "#a5b4fc" },
    ]
    const { currentData: currentFunnel, onMouseEnter: enterFunnel, onMouseLeave: leaveFunnel } = useAutoReducingData(funnelData)

    // 1b. Funnel2 Data (from user addition)
    const funnel2Levels = [
        "Awareness",
        "Interest",
        "Consideration",
        "Evaluation",
        "Purchase",
        "Loyalty"
    ]
    const { currentData: currentFunnel2Levels, onMouseEnter: enterFunnel2, onMouseLeave: leaveFunnel2 } = useAutoReducingData(funnel2Levels)

    // 2. Process Flow Data
    const processSteps = [
        { id: "1", title: "Discovery", description: "Needs", status: "completed" as const },
        { id: "2", title: "Design", description: "UX/UI", status: "current" as const },
        { id: "3", title: "Build", description: "React", status: "pending" as const },
        { id: "4", title: "Test", description: "QA", status: "pending" as const },
        { id: "5", title: "Deploy", description: "Ship", status: "pending" as const },
    ]
    const { currentData: currentProcess, onMouseEnter: enterProcess, onMouseLeave: leaveProcess } = useAutoReducingData(processSteps)

    // 3. Timeline Data
    const timelineItems = [
        { id: "1", date: "Q1", title: "Kickoff", description: "Goal setting" },
        { id: "2", date: "Q2", title: "MVP", description: "Beta launch" },
        { id: "3", date: "Q3", title: "Growth", description: "Scale up" },
        { id: "4", date: "Q4", title: "Scale", description: "Global" },
        { id: "5", date: "2025", title: "Exit", description: "IPO" },
    ]
    const { currentData: currentTimeline, onMouseEnter: enterTimeline, onMouseLeave: leaveTimeline } = useAutoReducingData(timelineItems)

    // 4. Comparison Data
    const comparisonFeatures = ["Real-time Sync", "Offline Mode", "Custom Domain", "SSO Integration", "24/7 Support", "Analytics"]
    const { currentData: currentFeatures, onMouseEnter: enterComparison, onMouseLeave: leaveComparison } = useAutoReducingData(comparisonFeatures)

    // 5. Matrix Data
    const matrixItems = [
        { id: "1", label: "Us", x: 85, y: 85, color: "#3b82f6", size: "lg" as const },
        { id: "2", label: "Comp X", x: 70, y: 60, color: "#94a3b8" },
        { id: "3", label: "Startup Y", x: 30, y: 80, color: "#94a3b8" },
        { id: "4", label: "Legacy Z", x: 60, y: 20, color: "#94a3b8" },
        { id: "5", label: "Open Source", x: 90, y: 30, color: "#94a3b8" },
    ]
    const { currentData: currentMatrix, onMouseEnter: enterMatrix, onMouseLeave: leaveMatrix } = useAutoReducingData(matrixItems)

    // 6. Stats Data
    const statsItems = [
        { id: "1", label: "Revenue", value: "$1.2M", icon: <DollarSign />, trend: "+12%", trendUp: true, color: "#10b981" },
        { id: "2", label: "Users", value: "85.2k", icon: <Users />, trend: "+5%", trendUp: true, color: "#3b82f6" },
        { id: "3", label: "Uptime", value: "99.9%", icon: <Activity />, color: "#8b5cf6" },
        { id: "4", label: "Speed", value: "< 2m", icon: <Zap />, trend: "-15%", trendUp: true, color: "#f59e0b" },
        { id: "5", label: "Bugs", value: "0", icon: <Activity />, color: "#f43f5e" },
    ]
    const { currentData: currentStats, onMouseEnter: enterStats, onMouseLeave: leaveStats } = useAutoReducingData(statsItems)

    // 7. Petals Data
    const petalsItems = [
        { title: "Analysis", content: "Lorem ipsum dolor sit amet, consectetur." },
        { title: "Design", content: "Quisque et faucibus magna nunc at leo." },
        { title: "Develop", content: "Nunc at leo et nisi sollicitudin aliquet." },
        { title: "Testing", content: "Donec sed odio dui. Nullal vitae elit libero." },
        { title: "Deploy", content: "Cras mattis consectetur purus sit amet." },
    ]
    const { currentData: currentPetals, onMouseEnter: enterPetals, onMouseLeave: leavePetals } = useAutoReducingData(petalsItems)

    return (
        <main className="min-h-screen bg-slate-50 p-8 md:p-12 space-y-12">

            <div className="text-center space-y-4 flex justify-center flex-col py-12">
                <h1 className="text-6xl font-black tracking-tight text-slate-900 flex items-center mx-auto">
                    <img className="inline-block w-16 h-16 rounded-xl mr-2" src="/kahani-logo-192x192.png" alt="Kahani Logo" />
                    Kahani</h1>
                <p className="text-xl text-slate-600">
                    <span className="rounded-xl mr-2 shadow-lg text-white bg-pink-400 px-2 py-1 font-bold">WIP</span>
                    A Complete Storytelling Kit with 20+ Infographic Components
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">01. Petals</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterPetals}
                        onMouseLeave={leavePetals}
                    >
                        <Petals
                            items={currentPetals}
                        />
                    </div>
                </section>
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">02. Funnel</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterFunnel2}
                        onMouseLeave={leaveFunnel2}
                    >
                        <Funnel2
                            width={1024}
                            height={768}
                            levels={currentFunnel2Levels}
                        />
                    </div>
                </section>
                {/* COMPONENT 1: FUNNEL */}
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">01. Funnel</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterFunnel}
                        onMouseLeave={leaveFunnel}
                    >
                        <Funnel data={currentFunnel} />
                    </div>
                </section>

                {/* COMPONENT 2: PROCESS FLOW */}
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">02. Process Flow</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterProcess}
                        onMouseLeave={leaveProcess}
                    >
                        <ProcessFlow steps={currentProcess} />
                    </div>
                </section>

                {/* COMPONENT 3: TIMELINE */}
                <section className="space-y-4 flex flex-col md:col-span-2 xl:col-span-1">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">03. Timeline</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterTimeline}
                        onMouseLeave={leaveTimeline}
                    >
                        <Timeline items={currentTimeline} />
                    </div>
                </section>

                {/* COMPONENT 4: COMPARISON MATRIX */}
                <section className="space-y-4 flex flex-col md:col-span-2 xl:col-span-2">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">04. Comparison</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[300px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterComparison}
                        onMouseLeave={leaveComparison}
                    >
                        <ComparisonMatrix
                            features={currentFeatures}
                            columns={[
                                { id: "us", title: "Kahani", isPrimary: true, data: [true, true, true, true, true, true] },
                                { id: "competitor_a", title: "Competitor A", data: [true, false, true, "Add-on", false, false] },
                                { id: "competitor_b", title: "Legacy Tool", data: [false, false, false, false, "Email only", false] },
                            ]}
                        />
                    </div>
                </section>

                {/* COMPONENT 5: MATRIX */}
                <section className="space-y-4 flex flex-col">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">05. 2x2 Matrix</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center aspect-square md:aspect-auto min-h-[300px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterMatrix}
                        onMouseLeave={leaveMatrix}
                    >
                        <Matrix2x2
                            axes={{ xLow: "Niche", xHigh: "Visionary", yLow: "Challenger", yHigh: "Leader" }}
                            quadrantLabels={["Challengers", "Leaders", "Niche", "Visionaries"]}
                            items={currentMatrix}
                        />
                    </div>
                </section>

                {/* COMPONENT 6: ICON STAT GRID */}
                <section className="space-y-4 flex flex-col md:col-span-2 xl:col-span-3">
                    <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">06. Icon Stat Grid</h2>
                    <div
                        className="bg-white p-6 rounded-xl shadow-sm border flex-1 flex items-center justify-center min-h-[200px] transition-colors hover:border-blue-400"
                        onMouseEnter={enterStats}
                        onMouseLeave={leaveStats}
                    >
                        <IconStatGrid
                            stats={currentStats}
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
        </main >
    )
}
