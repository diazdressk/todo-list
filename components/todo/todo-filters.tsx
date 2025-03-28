"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";
import type { FilterType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";

interface TodoFiltersProps {
  value: FilterType;
  onValueChange: (value: FilterType) => void;
  className?: string;
}

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
] as const;

export function TodoFilters({ value, onValueChange, className }: TodoFiltersProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={cn(
        "w-[140px] h-9 bg-background/50 border-0 ring-1 ring-border/50 hover:ring-border/80 focus-visible:ring-2",
        className
      )}>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium">{filterOptions.find(opt => opt.value === value)?.label}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {filterOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 