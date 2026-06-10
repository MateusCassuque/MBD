'use client'

import { LucideIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SelectWithIconProps {
  icon: LucideIcon
  placeholder: string
  options: { value: string; label: string }[]
  value?: string
  not_edit?: boolean
  onChange: (value: string) => void
  readonly?: boolean
  startOption?: string
  notPrimary?: boolean
}

export function SelectWithIcon({ icon: Icon, placeholder, options, value, onChange, not_edit, readonly, startOption, notPrimary }: SelectWithIconProps) {

  return (
    <div className={`flex items-center gap-2 ${not_edit ? 'border-0' : 'border'} rounded-lg px-1 py-1 w-fit`}>
      <Icon size={20} className={`${notPrimary ? 'text-muted-foreground' : 'text-primary'}`} />
      <Select disabled={readonly} value={value} onValueChange={onChange}>
        <SelectTrigger className="border-0 focus:ring-0 not-sm:text-xs ">
          <SelectValue placeholder={placeholder} />
          {/* {placeholder} */}
        </SelectTrigger>
        <SelectContent >
          {startOption ?
            <SelectItem key={startOption} value={' '}>
              {startOption}
            </SelectItem>
            : undefined}
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
