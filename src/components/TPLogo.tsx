import logo from "@/assets/tp-logo.jpg";

export function TPLogo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="TP Store"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-full object-cover ring-2 ring-brand"
      />
      <div className="leading-none">
        <div className="font-display text-base font-bold tracking-wider">TP STORE</div>
        <div className="text-[9px] tracking-[0.3em] text-brand font-semibold">MULTIMARCAS</div>
      </div>
    </div>
  );
}
