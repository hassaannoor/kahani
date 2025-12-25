"use client"

import { useState, useRef, useCallback } from "react"

export function useAutoReducingData<T>(initialData: T[], minItems: number = 3, intervalMs: number = 1000) {
    const [data, setData] = useState<T[]>(initialData)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const onMouseEnter = useCallback(() => {
        // Clear any existing interval just in case
        if (intervalRef.current) clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            setData((prevData) => {
                if (prevData.length <= minItems) {
                    // Loop back to initial data
                    return initialData
                }
                // Remove the last item
                return prevData.slice(0, -1)
            })
        }, intervalMs)
    }, [minItems, intervalMs, initialData]) // Added initialData to dependencies

    const onMouseLeave = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
        // Reset to initial data immediately (or we could could animate back, but prompt implied reset/hover logic)
        // "slowly remove out its elements" - implying the reduction is the key effect. 
        // Resetting instantly is standard for "mouse leave" unless specified otherwise.
        setData(initialData)
    }, [initialData])

    return {
        currentData: data,
        onMouseEnter,
        onMouseLeave,
    }
}
