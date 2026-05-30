import type { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  url?: string;
}

export function BrowserFrame({ children, url }: BrowserFrameProps) {
  return (
    <div className="rounded-[20px] overflow-hidden border border-hairline bg-bg-card">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-hairline bg-bg-raise">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        {url && (
          <div className="flex-1 mx-2">
            <div className="bg-bg-card rounded-md px-3 py-1 text-xs text-muted text-center truncate">
              {url}
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}
// POLKAT-145: refine accordion open state
