import React from 'react';

interface RadarChartProps {
  data: { label: string; value: number; max: number }[];
  size?: number;
  color?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, size = 300, color = '#4f46e5' }) => {
  if (!data || data.length === 0) return null;

  const center = size / 2;
  const radius = (size / 2) * 0.75;
  const angleStep = (Math.PI * 2) / data.length;

  const getCoordinates = (value: number, max: number, index: number) => {
    const ratio = value / max;
    const angle = index * angleStep - Math.PI / 2;
    return {
      x: center + radius * ratio * Math.cos(angle),
      y: center + radius * ratio * Math.sin(angle),
    };
  };

  const points = data.map((d, i) => {
    const coord = getCoordinates(d.value, d.max, i);
    return `${coord.x},${coord.y}`;
  }).join(' ');

  const axes = data.map((_, i) => {
    const coord = getCoordinates(1, 1, i);
    return { x2: coord.x, y2: coord.y };
  });

  const labels = data.map((d, i) => {
    const coord = getCoordinates(1.2, 1, i);
    return { x: coord.x, y: coord.y, text: d.label, value: Math.round((d.value/d.max)*100) };
  });

  return (
    <div className="flex justify-center items-center w-full my-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background Web */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((level, levelIdx) => (
          <polygon
            key={levelIdx}
            points={data.map((_, i) => {
              const c = getCoordinates(level, 1, i);
              return `${c.x},${c.y}`;
            }).join(' ')}
            fill="none"
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-700"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {axes.map((axis, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={axis.x2}
            y2={axis.y2}
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-700"
            strokeWidth="1"
          />
        ))}

        {/* Data Polygon */}
        <polygon
          points={points}
          fill={color}
          fillOpacity={0.4}
          stroke={color}
          strokeWidth="2"
          className="transition-all duration-700 ease-out"
        />

        {/* Data Points */}
        {data.map((d, i) => {
          const coord = getCoordinates(d.value, d.max, i);
          return (
            <circle
              key={i}
              cx={coord.x}
              cy={coord.y}
              r="4"
              fill={color}
              className="transition-all duration-700 ease-out"
            />
          );
        })}

        {/* Labels */}
        {labels.map((label, i) => (
          <text
            key={i}
            x={label.x}
            y={label.y}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="text-xs font-semibold fill-slate-700 dark:fill-slate-300"
          >
            <tspan x={label.x} dy="-0.5em">{label.text}</tspan>
            <tspan x={label.x} dy="1.2em" className="fill-slate-500 text-[10px]">{label.value}%</tspan>
          </text>
        ))}
      </svg>
    </div>
  );
};
