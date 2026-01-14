import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectOption {
    value: string
    label: string
}

interface SelectDropdownProps {
    placeholder?: string
    options: SelectOption[]
    defaultValue?: string
    onChange?: (value: string) => void
    className?: string
}

export function SelectDropdown({
    placeholder = "Select",
    options,
    defaultValue,
    onChange,
    className = "w-[180px]"
}: SelectDropdownProps) {
    return (
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
