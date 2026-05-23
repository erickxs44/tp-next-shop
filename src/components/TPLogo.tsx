import logo from "@/assets/tp-logo.png";

export function TPLogo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="TP Multimarcas" width={size} height={size} style={{ width: size, height: size }} />
      <div className="leading-none">
        <div className="font-display text-base font-bold tracking-wider">TP MULTIMARCAS</div>
        <div className="text-[9px] tracking-[0.3em] text-brand font-semibold">SURF &amp; GRIFFE</div>
      </div>
    </div>
  );
}
