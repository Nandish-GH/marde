import Image from "next/image";

export function NandishPortrait({ variant = "editorial" }: { variant?: "editorial" | "team" | "home" }) {
  if (variant === "team") return <Image src="/team/nandish-team.webp" alt="Nandish Panchal, Founder and CEO of MARDE" width={440} height={440} unoptimized />;
  return <picture style={{ display: "block", height: "100%" }}>
    <source type="image/webp" srcSet="/team/nandish-editorial-480.webp 480w, /team/nandish-editorial-800.webp 800w" sizes={variant === "home" ? "(max-width: 700px) 44vw, 18vw" : "(max-width: 700px) 88vw, 44vw"} />
    <Image src="/team/nandish-editorial-800.webp" width={800} height={1000} alt="Nandish Panchal, Founder and CEO of MARDE" unoptimized />
  </picture>;
}
