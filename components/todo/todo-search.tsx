"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface TodoSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function TodoSearch({ value, onChange, className }: TodoSearchProps) {
  const [searchTerm, setSearchTerm] = useState(value);

  const debouncedSearch = useCallback(
    (term: string) => {
      const timeoutId = setTimeout(() => {
        onChange(term);
      }, 300);

      return () => clearTimeout(timeoutId);
    },
    [onChange]
  );

  useEffect(() => {
    const cleanup = debouncedSearch(searchTerm);
    return cleanup;
  }, [searchTerm, debouncedSearch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={handleChange}
        className={cn("pl-8", className)}
      />
    </div>
  );
} 