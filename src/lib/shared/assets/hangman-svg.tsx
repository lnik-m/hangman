interface Props {
  state: number
}

export const HangmanSvg = ({ state }: Props) => {
  const renderStick = () => {
    if (state <= 1) return
    return (
      <rect
        x="105.161"
        y="1"
        width="4"
        height="100"
        transform="rotate(45 105.161 1)"
        fill="#1A1818"
      />
    )
  }
  const renderHead = () => {
    if (state <= 2) return
    return (
      <circle cx="160.451" cy="54" r="18" stroke="#1A1818" strokeWidth="4" />
    )
  }

  const renderBody = () => {
    if (state <= 3) return
    return <rect x="158.451" y="73" width="5" height="47" fill="#1A1818" />
  }
  const renderLeftHand = () => {
    if (state <= 4) return
    return (
      <rect
        x="159.199"
        y="76"
        width="4"
        height="35"
        transform="rotate(45 159.199 76)"
        fill="#1A1818"
      />
    )
  }
  const renderRightHand = () => {
    if (state <= 5) return
    return (
      <rect
        x="160.451"
        y="78.8284"
        width="4"
        height="35"
        transform="rotate(-45 160.451 78.8284)"
        fill="#1A1818"
      />
    )
  }
  const renderLeftLeg = () => {
    if (state <= 6) return
    return (
      <rect
        x="159.359"
        y="115.911"
        width="4"
        height="46.5397"
        transform="rotate(45 159.359 115.911)"
        fill="#1A1818"
      />
    )
  }
  const renderRightLeg = () => {
    if (state <= 7) return
    return (
      <rect
        x="160.451"
        y="119.829"
        width="4"
        height="45"
        transform="rotate(-45 160.451 119.829)"
        fill="#1A1818"
      />
    )
  }
  const renderEyes = () => {
    if (state <= 8) return
    return (
      <>
        <line
          x1="166.395"
          y1="49.591"
          x2="169.931"
          y2="53.1265"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="166.042"
          y1="53.1267"
          x2="169.577"
          y2="49.5911"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="151.395"
          y1="49.591"
          x2="154.931"
          y2="53.1265"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="151.042"
          y1="53.1267"
          x2="154.577"
          y2="49.5911"
          stroke="black"
          strokeWidth="1.5"
        />
      </>
    )
  }
  const renderMouth = () => {
    if (state <= 9) return
    return (
      <path
        d="M154.451 63.7713C159.312 58.7971 161.944 58.689 166.451 63.7713"
        stroke="black"
        strokeWidth="2"
      />
    )
  }

  return (
    <svg
      width="196"
      height="205"
      viewBox="0 0 196 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-2/3"
    >
      <rect x="0.450684" y="200" width="70" height="5" fill="#1A1818" />
      <rect x="33.4507" width="5" height="200" fill="#1A1818" />
      <rect x="33.4507" width="130" height="5" fill="#1A1818" />
      <rect x="158.451" width="5" height="35" fill="#1A1818" />
      {renderStick()}
      {renderHead()}
      {renderBody()}
      {renderLeftHand()}
      {renderRightHand()}
      {renderLeftLeg()}
      {renderRightLeg()}
      {renderEyes()}
      {renderMouth()}
    </svg>
  )
}
