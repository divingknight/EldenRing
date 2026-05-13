import { ImageResponse } from "next/og";

export const alt = "Nightreign Guide — Your Ultimate Elden Ring Nightreign Resource";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Moon glow effect */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "180px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #e2d9c8 0%, #c4a35a44 40%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Decorative top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #c4a35a, #e2d9c8, #c4a35a, transparent)",
            display: "flex",
          }}
        />
        {/* Site icon */}
        <div
          style={{
            fontSize: "72px",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          🌙
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#e2d9c8",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          Nightreign Guide
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#c4a35a",
            marginTop: "16px",
            display: "flex",
          }}
        >
          Elden Ring: Nightreign
        </div>
        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#a0a0b0",
            marginTop: "24px",
            maxWidth: "800px",
            textAlign: "center",
            display: "flex",
          }}
        >
          Builds · Boss Strategies · Relic Tier Lists · Walkthrough
        </div>
        {/* Bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #c4a35a, #e2d9c8, #c4a35a, transparent)",
            display: "flex",
          }}
        />
        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: "18px",
            color: "#666680",
            display: "flex",
          }}
        >
          nightreign.club
        </div>
      </div>
    ),
    { ...size }
  );
}
