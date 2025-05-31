"use client";

import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ value, handleChange }: SearchInputProps) => {
  return (
    <div className="relative w-[400px]">
      <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">
        <Search className="w-5 h-5" />
      </span>
      <Input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        className="w-full h-[40px] pl-10 pr-4 rounded-lg"
      />
    </div>
  );
};
