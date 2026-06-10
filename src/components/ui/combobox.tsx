'use client'

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ComboboxProps {
  options: { label: string, value: string }[]
  value?: string | null
  onValueChange?: (value: string) => void
  placeholder?: string
  overflow?: boolean
}

export function Combobox({ options, value, onValueChange, placeholder, overflow }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const selectedLabel = options.find(opt => opt.value === value)?.label

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {selectedLabel || placeholder || "Selecionar"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder="Pesquisar..." className="h-9" />
          <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
          <CommandGroup className={`max-h-96 h-fit ${overflow ? 'overflow-y-auto' : 'overflow-hidden'}`}>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.label}
                onSelect={() => {
                  onValueChange?.(option.value)
                  setOpen(false)
                }}
                className="cursor-pointer"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
