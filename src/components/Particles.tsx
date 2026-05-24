export function Particles({ count = 24 }: { count?: number }) {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const duration = 12 + Math.random() * 18;
        const delay = Math.random() * -duration;
        const size = 2 + Math.random() * 3;
        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
