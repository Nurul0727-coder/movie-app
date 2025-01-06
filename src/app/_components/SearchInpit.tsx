'use client';

import { ChangeEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchInputProps = {
    value: string;
    handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ value, handleChange }: SearchInputProps) => {
    return (
        <Input
            type="text"
            value={value}
            placeholder="Search"
            onChange={handleChange}
            className="w-10 p-4"
        />
    );
};
