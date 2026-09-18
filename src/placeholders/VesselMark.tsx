/** LOCAL PLACEHOLDER — abstract plant vessel. Not a product render. */
export function VesselMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 420"
      className={className}
      role="img"
      aria-label="Placeholder plant vessel"
    >
      <rect x="92" y="28" width="10" height="118" rx="5" fill="currentColor" opacity="0.55" />
      <rect x="114" y="8" width="10" height="148" rx="5" fill="currentColor" opacity="0.7" />
      <rect x="136" y="0" width="10" height="164" rx="5" fill="currentColor" opacity="0.85" />
      <rect x="158" y="8" width="10" height="148" rx="5" fill="currentColor" opacity="0.7" />
      <rect x="180" y="28" width="10" height="118" rx="5" fill="currentColor" opacity="0.55" />
      <rect x="78" y="158" width="124" height="18" rx="4" fill="currentColor" opacity="0.35" />
      <rect x="70" y="176" width="140" height="220" rx="70" fill="currentColor" opacity="0.9" />
      <rect x="88" y="198" width="104" height="176" rx="52" fill="var(--color-background-body)" opacity="0.18" />
    </svg>
  );
}
