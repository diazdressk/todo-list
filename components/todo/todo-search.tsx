"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import type { ChangeEvent } from "react";

interface TodoSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function TodoSearch({ value, onChange, className }: TodoSearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative flex-1">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search todos..."
        value={value}
        onChange={handleChange}
        className={cn("pl-8", className)}
      />
    </div>
  );
} 