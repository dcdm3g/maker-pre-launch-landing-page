interface CheckIconProps {
  color: string
}

export function CheckIcon({ color }: CheckIconProps) {
  return (
    <svg
      className="w-3 flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 9"
    >
      <path
        fill={color}
        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
      />
    </svg>
  )
}
