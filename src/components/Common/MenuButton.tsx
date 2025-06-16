import React, { useState, ReactNode, useRef, useEffect } from "react";

interface MenuButtonProps {
  children: ReactNode;
  items: Array<{
    label: string;
    onClick?: () => void;
    href?: string;
    danger?: boolean;
  }>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ children, items }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-flex">
      <span className="inline-flex divide-x divide-primary overflow-hidden rounded border border-primary bg-dark shadow-sm">
        <div className="px-3 py-2 flex items-center text-white">
          {children}
        </div>

        <button
          type="button"
          className="px-3 py-2 z-50 text-sm font-medium cursor-pointer transition-colors hover:bg-primary focus:relative text-white"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </span>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-1 z-50 w-56 overflow-hidden rounded border border-primary bg-dark shadow-lg divide-y divide-primary"
        >
          {items.map((item, idx) =>
            item.href ? (
              <a
                key={idx}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:bg-primary text-white hover:text-darkmode`}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={idx}
                type="button"
                className={`block w-full px-3 py-2 text-left text-sm font-medium transition-colors text-white hover:bg-gray-50 hover:text-gray-900`}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};
