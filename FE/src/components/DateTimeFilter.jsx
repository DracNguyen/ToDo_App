import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { options } from "@/lib/data";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  CommandList,
  CommandInput,
} from "cmdk";

const DateTimeFilter = ({ dateQuery, setDateQuery }) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [hoveredValue, setHoveredValue] = React.useState("");

  const selectedLabel =
    options.find((option) => option.value === dateQuery)?.label ||
    options[0].label;

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="gap-2 h-8"
        >
          {selectedLabel}
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Tìm kiếm..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>Không tìm thấy kết quả</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setOpen(false);
                    setDateQuery(currentValue);
                    setSearch("");
                  }}
                  onMouseEnter={() => setHoveredValue(option.value)}
                  onMouseLeave={() => setHoveredValue("")}
                  className={cn(
                    "cursor-pointer transition-all duration-200",
                    hoveredValue === option.value &&
                      "bg-blue-50 scale-[1.02] pl-4",
                    dateQuery === option.value && "bg-blue-100 font-semibold"
                  )}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4 transition-opacity duration-200",
                      dateQuery === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DateTimeFilter;
