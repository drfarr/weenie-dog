import Image from "next/image";

export default function Logo({
  className = "",
  width = 100,
  height = 100,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={width}
      height={width}
      className={className}
    />
  );
}
