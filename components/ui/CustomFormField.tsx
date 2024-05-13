import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Control, FieldPath } from 'react-hook-form'
import { z } from "zod"
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface CustomFormFieldProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    type: string,
    inputMode?: 'numeric' | "email" | "decimal",
    autocomplete?: string,
}

const CustomFormField = ({ control, name, label, type, placeholder, inputMode, autocomplete }: CustomFormFieldProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input type={type} placeholder={placeholder} inputMode={inputMode} autoComplete={autocomplete} className="input-class" {...field} />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomFormField