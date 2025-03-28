"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
      <SelectTrigger className={cn("w-full", className)}>
        <Filter className="mr-2 h-4 w-4 " />
        <SelectValue placeholder="Filter todos" />
      </SelectTrigger>
      <SelectContent className="">
        {filterOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 