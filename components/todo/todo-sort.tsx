"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";
import type { SortType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface TodoSortProps {
  value: SortType;
  onValueChange: (value: SortType) => void;
  className?: string;
}

const sortOptions = [
  { label: "Date", value: "createdAt" },
  { label: "Priority", value: "priority" },
  { label: "Title", value: "title" },
] as const;

export function TodoSort({ value, onValueChange, className }: TodoSortProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={cn(
        "w-[140px] h-9 bg-background/50 border-0 ring-1 ring-border/50 hover:ring-border/80 focus-visible:ring-2",
        className
      )}>
        <div className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4" />
          <span className="text-sm font-medium">{sortOptions.find(opt => opt.value === value)?.label}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 