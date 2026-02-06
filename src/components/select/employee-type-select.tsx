import { useEffect, useRef, useState } from 'react';

import { Check } from 'lucide-react';

export type EmployeeType = 'ADMIN' | 'EMP';

interface EmployeeTypeSelectProps {
  value: EmployeeType | null;
  onChange: (value: EmployeeType) => void;
  label?: string;
}

export default function EmployeeTypeSelect({ value, onChange, label }: EmployeeTypeSelectProps) {
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
    if (value === 'ADMIN') {
      return <span className="font-medium text-[var(--foreground)]">Administrador</span>;
    }
    if (value === 'EMP') {
      return <span className="font-medium text-[var(--foreground)]">Funcionário</span>;
    }
    return <span className="text-[var(--muted-foreground)]">Selecione o tipo</span>;
  };

  const handleSelect = (type: EmployeeType) => {
    onChange(type);
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
          <div className="absolute z-10 w-40 mt-2 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden">
            {/* Opção Administrador */}
            <button
              type="button"
              onClick={() => handleSelect('ADMIN')}
              className="w-full flex items-center justify-between p-3 hover:bg-[var(--primary)]/10 transition-colors border-b border-[var(--border)]"
            >
              <span className="text-sm text-[var(--foreground)]">Administrador</span>
              {value === 'ADMIN' && <Check className="w-4 h-4 text-[var(--primary)]" />}
            </button>

            {/* Opção Funcionário */}
            <button
              type="button"
              onClick={() => handleSelect('EMP')}
              className="w-full flex items-center justify-between p-3 hover:bg-[var(--primary)]/10 transition-colors"
            >
              <span className="text-sm text-[var(--foreground)]">Funcionário</span>
              {value === 'EMP' && <Check className="w-4 h-4 text-[var(--primary)]" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
