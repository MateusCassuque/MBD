'use client'

import { Input } from "@/components/ui/input"
import { Eye, EyeClosed, LucideIcon } from "lucide-react"
import { InputHTMLAttributes, useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import { Button } from "../ui/button"

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon
  iconButton?: LucideIcon
  onclickButton?: () => void
  register?: UseFormRegisterReturn
  password?: boolean
  not_edit?: boolean
  isrounded?: boolean
}

export function InputWithIcon({ icon: Icon, iconButton: IconButton, onclickButton, register, password, not_edit, isrounded, ...props }: InputWithIconProps) {
  const [passwordType, setPasswoedType] = useState(true)
  return (
    <>
      {
        password ? (
          <div className={`flex items-center gap-2 ${not_edit ? 'border-0' : 'border'} ${isrounded ? 'rounded-3xl' : 'rounded-lg'} px-2 py-1`} >
            <Icon size={20} className="text-muted-foreground" />
            <Input className="border-0 focus-visible:ring-0" {...props} {...register} type={passwordType ? 'password' : 'text'} />
            <Button onClick={(e) => {
              e.preventDefault()
              setPasswoedType(!passwordType)
            }} variant={'ghost'}> {passwordType ? <Eye className="text-primary" /> : <EyeClosed className="text-primary" />} </Button>
          </div>
        ) : (
          <div className={`flex items-center gap-2 ${not_edit ? 'border-0' : 'border'} ${isrounded ? 'rounded-3xl' : 'rounded-lg'} px-2 py-1`}>
            <Icon size={20} className="text-muted-foreground" />
            <Input className="not-sm:text-xs border-0 focus-visible:ring-0" {...props} {...register} />

            {IconButton ? <Button onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onclickButton?.()
            }} variant={'ghost'}> <IconButton className="text-primary" /> </Button> : null}
          </div>
        )
      }
    </>
  )
}
