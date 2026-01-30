interface TextFieldProps {
  label?: string;
  type?: string;
  id?: string;
  placeholder?: string;
}

export default function TextField({ label, type, id, placeholder }: TextFieldProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="flex items-center gap-2 text-sma leading-none font-medium select-none text-[var(--foreground)]"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className="bg-[var(--input)]/30 h-9 w-full min-w-0 rounded-md border px-3 py-1 text-[var(--base)] shadow-xs outline-none md:text-sm bg-[var(--input)] border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
