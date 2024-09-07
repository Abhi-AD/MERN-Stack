import { SORT_OPTIONS } from "@/config/restaurant-options-config";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
  const selectedSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    SORT_OPTIONS[0].label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <span>
          <Button variant="outline" className="w-full">
            Sort by: {selectedSortLabel}
          </Button>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value} // Adding a unique key prop
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
