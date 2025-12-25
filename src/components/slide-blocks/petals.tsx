import React from 'react';

const COLORS = [
    '#c44a56', // Red
    '#e38e37', // Orange
    '#f1c962', // Yellow
    '#a0bb31', // Green
    '#61aab4', // Teal
    '#6cb0e1', // Blue
    '#8dcfd9',
    '#7b861b'
];

const Petals = ({
    items = [],
    width = 600,
    height = 600,
    innerRadius = 80,
    outerRadius = 220
}) => {
    const cx = width / 2;
    const cy = height / 2;

    // Guard clause: if no items, render a placeholder or empty
    if (!items || items.length === 0) {
        return <div style={{ color: 'white' }}>No items provided</div>;
    }

    const totalSteps = items.length;
    const anglePerStep = 360 / totalSteps;
    // Gap size in degrees. If only 1 item, no gap.
    const gap = totalSteps > 1 ? 2 : 0;

    // --- MATH HELPERS ---

    // Converts degrees to radians
    const toRad = (deg) => (deg * Math.PI) / 180;

    // Calculates x,y coordinates based on center, radius, and angle (degrees)
    const getPoint = (radius, angleInDegrees) => {
        // -90 rotates it so 0 degrees is at 12 o'clock
        const angleInRad = toRad(angleInDegrees - 90);
        return {
            x: cx + radius * Math.cos(angleInRad),
            y: cy + radius * Math.sin(angleInRad)
        };
    };

    // Generates the SVG path for a donut slice
    const createSectorPath = (index) => {
        // Calculate angles
        const startAngle = (index * anglePerStep) + (gap / 2);
        const endAngle = ((index + 1) * anglePerStep) - (gap / 2);

        // Calculate the 4 corners of the slice
        const p1 = getPoint(innerRadius, startAngle); // Inner Start
        const p2 = getPoint(outerRadius, startAngle); // Outer Start
        const p3 = getPoint(outerRadius, endAngle);   // Outer End
        const p4 = getPoint(innerRadius, endAngle);   // Inner End

        // Determine if the arc is greater than 180 degrees (for large-arc-flag)
        // Usually false for infographics with > 2 steps
        const isLargeArc = endAngle - startAngle > 180 ? 1 : 0;

        // SVG Path Commands:
        // M: Move to Inner Start
        // L: Line to Outer Start
        // A: Arc to Outer End (Sweep 1 = Clockwise)
        // L: Line to Inner End
        // A: Arc back to Inner Start (Sweep 0 = Counter-Clockwise to close the ring correctly)
        // Z: Close path
        return `
      M ${p1.x},${p1.y}
      L ${p2.x},${p2.y}
      A ${outerRadius},${outerRadius} 0 ${isLargeArc} 1 ${p3.x},${p3.y}
      L ${p4.x},${p4.y}
      A ${innerRadius},${innerRadius} 0 ${isLargeArc} 0 ${p1.x},${p1.y}
      Z
    `;
    };

    return (
        <div style={{ width: '100%', maxWidth: width, margin: '0 auto', fontFamily: 'sans-serif' }}>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: 'visible' }} // Ensures shadows/tooltips don't get clipped
            >
                <defs>
                    <filter id="dropShadow" height="130%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="2" dy="2" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.2" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Center White Circle */}
                <circle cx={cx} cy={cy} r={innerRadius - 5} fill="#fff" filter="url(#dropShadow)" />

                {items.map((item, index) => {
                    const midAngle = (index * anglePerStep) + (anglePerStep / 2);
                    const color = COLORS[index % COLORS.length];

                    // Position for Content (Center of slice)
                    const textRadius = (innerRadius + outerRadius) / 2;
                    const textPos = getPoint(textRadius, midAngle);

                    // Position for Number Bubble (On the outer edge)
                    const bubblePos = getPoint(outerRadius, midAngle);

                    return (
                        <g key={index}>
                            {/* SLICE SHAPE */}
                            <path
                                d={createSectorPath(index)}
                                fill={color}
                                stroke="#fff"
                                strokeWidth="3"
                                style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.02)';
                                    e.currentTarget.style.transformOrigin = `${cx}px ${cy}px`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />

                            {/* TEXT CONTENT */}
                            {/* We use foreignObject to allow HTML text wrapping */}
                            <foreignObject
                                x={textPos.x - 45}
                                y={textPos.y - 40}
                                width="90"
                                height="80"
                                style={{ pointerEvents: 'none' }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    color: 'white',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>
                                        {item.title}
                                    </div>
                                    <div style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.6)', marginBottom: '4px' }} />
                                    <div style={{ fontSize: '9px', lineHeight: '1.2' }}>
                                        {item.content}
                                    </div>
                                </div>
                            </foreignObject>

                            {/* NUMBER BUBBLE */}
                            <g transform={`translate(${bubblePos.x}, ${bubblePos.y})`}>
                                <circle r="16" fill={color} stroke="#fff" strokeWidth="2" />
                                <text
                                    x="0"
                                    y="5"
                                    textAnchor="middle"
                                    fill="white"
                                    fontWeight="bold"
                                    fontSize="14px"
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </text>
                            </g>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default Petals;