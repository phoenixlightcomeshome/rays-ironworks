import { useEffect, useRef, useState } from 'react';

interface DimensionNumberInputProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

/**
 * Compact feet value input shown beside a dimension slider.
 * Typing updates the shared size state live (clamped to the slider bounds);
 * on blur the field snaps back to the committed value so it always matches
 * the slider and the drawings.
 */
export function DimensionNumberInput({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
}: DimensionNumberInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(String(value));

  useEffect(() => {
    if (document.activeElement !== inputRef.current) {
      setDraft(String(value));
    }
  }, [value]);

  const handleChange = (raw: string) => {
    setDraft(raw);
    const parsed = parseFloat(raw);
    if (!Number.isFinite(parsed)) return;
    onChange(Math.min(max, Math.max(min, parsed)));
  };

  return (
    <span className="inline-flex items-center gap-1">
      <input
        ref={inputRef}
        id={id}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={draft}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setDraft(String(value))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            (e.target as HTMLInputElement).blur();
          }
        }}
        aria-label={label}
        className="w-16 px-1.5 py-0.5 rounded bg-[#101012] border border-[#2a2a2e] text-[#f2efe8] text-xs tabular-nums text-right focus:border-[#c9883d] focus:outline-none"
      />
      <span className="text-[10px] text-[#a8a29a]">ft</span>
    </span>
  );
}
