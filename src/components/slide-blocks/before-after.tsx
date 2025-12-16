"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
// import { GripVertical } from "lucide-react"

interface BeforeAfterSplitProps {
    beforeImage?: string
    afterImage?: string
    beforeLabel?: string
    afterLabel?: string
    aspectRatio?: "16/9" | "4/3"
    className?: string
    // For text/content based splits
    beforeContent?: React.ReactNode
    afterContent?: React.ReactNode
}

export function BeforeAfterSplit({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    aspectRatio = "16/9",
    className,
    beforeContent,
    afterContent
}: BeforeAfterSplitProps) {

    const [sliderPosition, setSliderPosition] = React.useState(50)
    const [isDragging, setIsDragging] = React.useState(false) // eslint-disable-line @typescript-eslint/no-unused-vars
    const containerRef = React.useRef<HTMLDivElement>(null)

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = "touches" in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX
        const position = ((x - rect.left) / rect.width) * 100
        setSliderPosition(Math.min(100, Math.max(0, position)))
    }

    const onMouseDown = () => {
        setIsDragging(true)
        // Add global listeners for drag
        window.addEventListener("mousemove", handleMove as any)
        window.addEventListener("mouseup", onMouseUp)
    }

    const onMouseUp = () => {
        setIsDragging(false)
        window.removeEventListener("mousemove", handleMove as any)
        window.removeEventListener("mouseup", onMouseUp)
    }

    // If content is provided instead of images
    const isContentMode = !!beforeContent || !!afterContent

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full overflow-hidden rounded-xl border select-none bg-muted", className)}
            style={{ aspectRatio: isContentMode ? "auto" : aspectRatio === "16/9" ? 16 / 9 : 4 / 3 }}
        >
            {/* AFTER Layer (Background) */}
            <div className="absolute inset-0 w-full h-full">
                {afterImage ? (
                    <img src={afterImage} alt={afterLabel} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-blue-50 p-8 flex items-center justify-end">
                        {afterContent}
                    </div>
                )}
                <span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-xs rounded font-bold uppercase backdrop-blur-md">
                    {afterLabel}
                </span>
            </div>

            {/* BEFORE Layer (Foreground, clipped) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden border-r shadow-2xl"
                style={{ width: `${sliderPosition}%` }}
            >
                {beforeImage ? (
                    <img src={beforeImage} alt={beforeLabel} className="w-full h-full object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth }} />
                ) : (
                    <div className="w-full h-full bg-slate-100 p-8 flex items-center justify-start text-slate-800" style={{ width: containerRef.current ? containerRef.current.offsetWidth : "100%" }}>
                        {beforeContent}
                    </div>
                )}
                <span className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-xs rounded font-bold uppercase backdrop-blur-md">
                    {beforeLabel}
                </span>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:w-1.5 transition-[width]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={onMouseDown}
                onTouchStart={onMouseDown}
            >
                <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center -ml-[13px]">
                    {/* Icon or simple dots */}
                    <div className="flex gap-0.5">
                        <div className="w-0.5 h-3 bg-slate-300" />
                        <div className="w-0.5 h-3 bg-slate-300" />
                    </div>
                </div>
            </div>
        </div>
    )
}
