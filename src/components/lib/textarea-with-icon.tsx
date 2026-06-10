'use client'

import { Textarea } from "@/components/ui/textarea"
import { LucideIcon } from "lucide-react"
import { TextareaHTMLAttributes } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface TextAreaWithIconProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon: LucideIcon
  register?: UseFormRegisterReturn
  not_edit?: boolean
}

export function TextAreaWithIcon({ icon: Icon, register, not_edit, ...props }: TextAreaWithIconProps) {
  return (
    <div className={`flex items-start gap-2 ${not_edit ? 'border-0' : 'border'} not-sm:text-xs rounded-lg px-3 py-2`}>
      <Icon size={20} className="text-muted-foreground mt-1" />
      <Textarea className="border-0 focus-visible:ring-0 resize-none" {...props} {...register} />
    </div>
  )
}
