import { useEffect, useRef, useState } from 'react';

import { Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string | null;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
}

export default function Select({ value, onChange, options, label, placeholder = 'Selecione uma opção' }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSelectedOption = () => {
    const selected = options.find((option) => option.value === value);
    if (selected) {
      return <span className="font-medium text-[var(--foreground)]">{selected.label}</span>;
    }
    return <span className="text-[var(--muted-foreground)]">{placeholder}</span>;
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2" ref={selectRef}>
      {label && (
        <label className="flex items-center gap-2 text-sm leading-none font-medium select-none text-[var(--foreground)]">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Select Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs bg-[var(--input)] border-[var(--border)] text-[var(--foreground)]"
        >
          {getSelectedOption()}
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute z-10 w-fit min-w-full mt-2 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full flex items-center justify-between p-3 hover:bg-[var(--primary)]/10 transition-colors ${
                  index < options.length - 1 ? 'border-b border-[var(--border)]' : ''
                }`}
              >
                <span className="text-sm text-[var(--foreground)] whitespace-nowrap">{option.label}</span>
                {value === option.value && <Check className="w-4 h-4 text-[var(--primary)] ml-3" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
