import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  label = "Usmonjon",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span className={cn("relative block shrink-0", className)} role="img" aria-label={label}>
      <Image
        src="/images/brand/usm-logo.png"
        alt=""
        fill
        sizes="120px"
        className="object-contain"
        priority
      />
    </span>
  );
}
