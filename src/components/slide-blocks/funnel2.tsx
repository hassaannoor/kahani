import React from "react"

const pastelPalette = [
    "#A7C7E7",
    "#FBC4AB",
    "#FDE2A7",
    "#CDB4DB",
    "#FFAFCC",
    "#BDE0FE",
    "#C1E1C1",
]

const Funnel2 = ({
    width = 1024,
    height = 768,
    levels = [],
    topWidthRatio = 0.7,
    bottomWidthRatio = 0.1,
    levelHeight = 75,
}) => {
    const centerX = width / 2
    const startY = 180

    const levelCount = levels.length
    const topWidth = width * topWidthRatio
    const bottomWidth = width * bottomWidthRatio

    const getWidthAtLevel = (index) => {
        const t = index / levelCount
        return topWidth - t * (topWidth - bottomWidth)
    }

    const getColor = (index) =>
        pastelPalette[index % pastelPalette.length]

    const paths = levels.map((label, i) => {
        const wTop = getWidthAtLevel(i)
        const wBottom = getWidthAtLevel(i + 1)

        const yTop = startY + i * levelHeight
        const yBottom = yTop + levelHeight

        const xTopLeft = centerX - wTop / 2
        const xTopRight = centerX + wTop / 2
        const xBottomLeft = centerX - wBottom / 2
        const xBottomRight = centerX + wBottom / 2

        const path = `
      M ${xTopLeft} ${yTop}
      H ${xTopRight}
      L ${xBottomRight} ${yBottom}
      H ${xBottomLeft}
      Z
    `

        return {
            path,
            label,
            color: getColor(i),
            textY: yTop + levelHeight / 2 + 4,
        }
    })

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            {paths.map((p, i) => (
                <g key={i}>
                    <path d={p.path} fill={p.color} />
                    <text
                        x={centerX}
                        y={p.textY}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="14"
                        fontFamily="Days One, sans-serif"
                        textTransform="uppercase"
                    >
                        {p.label}
                    </text>
                </g>
            ))}
        </svg>
    )
}

export default Funnel2
