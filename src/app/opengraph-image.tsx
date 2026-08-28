import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "wmprawiro - Product Designer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <p
          style={{
            fontSize: 20,
            color: "#737373",
            marginBottom: "16px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          wmprawiro.dev
        </p>
        <h1
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "#ffffff",
            margin: "0 0 16px 0",
            lineHeight: 1.1,
          }}
        >
          Wahyu Maulana Prawiro
        </h1>
        <p
          style={{
            fontSize: 24,
            color: "#a3a3a3",
            margin: 0,
            letterSpacing: "0.05em",
          }}
        >
          Product Designer · Fintech
        </p>
      </div>
    ),
    { ...size }
  );
}
