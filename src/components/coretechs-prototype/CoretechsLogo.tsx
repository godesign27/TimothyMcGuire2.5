import React from 'react';

// The CoreTechs "cloud + equalizer bars" mark, rebuilt as inline SVG so it
// renders crisp at any size and needs no external asset.
export const CoretechsLogo: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = '#42484D',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M9.5 24a6 6 0 0 1-.9-11.94A7 7 0 0 1 22.2 12.6 5.2 5.2 0 0 1 22 24H9.5Z"
      fill={color}
      opacity={0.14}
    />
    {[
      { x: 8, h: 7 },
      { x: 11, h: 12 },
      { x: 14, h: 9 },
      { x: 17, h: 14 },
      { x: 20, h: 6 },
      { x: 23, h: 10 },
    ].map((b) => (
      <rect
        key={b.x}
        x={b.x}
        y={22 - b.h}
        width={1.8}
        height={b.h}
        rx={0.9}
        fill={color}
      />
    ))}
  </svg>
);
