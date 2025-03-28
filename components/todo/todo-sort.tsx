"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
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
      <SelectTrigger className={cn("w-full", className)}>
        <ArrowUpDown className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Sort todos" />
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