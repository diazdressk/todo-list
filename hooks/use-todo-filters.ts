import type { FilterType, SortType, Todo } from "@/lib/types";
import { useMemo, useState } from "react";

interface Filters {
  search: string;
  filter: FilterType;
  sort: SortType;
  direction: "asc" | "desc";
}

export function useTodoFilters(todos: Todo[]) {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    filter: "all",
    sort: "createdAt",
    direction: "desc",
  });

  const filteredTodos = useMemo(() => {
    let result = [...todos];

    if (filters.filter === "active") {
      result = result.filter((todo) => !todo.completed);
    } else if (filters.filter === "completed") {
      result = result.filter((todo) => todo.completed);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (todo) =>
          todo.title.toLowerCase().includes(searchLower) ||
          todo.description?.toLowerCase().includes(searchLower)
      );
    }

    result.sort((a, b) => {
      if (filters.sort === "title") {
        return filters.direction === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (filters.sort === "priority") {
        const priorityOrder = { low: 0, medium: 1, high: 2 };
        return filters.direction === "asc"
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        const aTime = new Date(a.createdAt).getTime();
        const bTime = new Date(b.createdAt).getTime();
        return filters.direction === "asc"
          ? aTime - bTime
          : bTime - aTime;
      }
    });

    return result;
  }, [todos, filters]);

  return {
    filters,
    setFilters: (newFilters: Partial<Filters>) =>
      setFilters((prev) => ({ ...prev, ...newFilters })),
    filteredTodos,
  };
} 