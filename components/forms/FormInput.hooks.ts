import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'

export interface UseInputStateProps {
  id: string
  name: string
  title: string
  subtitle?: string
  defaultValue?: string
}

export const useInputState = (args: UseInputStateProps) => {
  const [value, setValue] = useState<string>(() => args.defaultValue ?? '')
  useEffect(() => {
    if (args.defaultValue) setValue(args.defaultValue)
  }, [args.defaultValue])
  return {
    value,
    onChange: (obj: string | ChangeEvent<HTMLInputElement>) => {
      setValue(typeof obj === 'string' ? obj : obj.target.value)
    },
    ...args,
  }
}

export interface UseNumberInputStateProps {
  id: string
  name: string
  title: string
  subtitle?: string
  defaultValue?: number
}

export const useNumberInputState = (args: UseNumberInputStateProps) => {
  const [value, setValue] = useState<number>(() => args.defaultValue ?? 0)
  useEffect(() => {
    if (args.defaultValue) setValue(args.defaultValue)
  }, [args.defaultValue])
  return {
    value,
    onChange: (obj: number | ChangeEvent<HTMLInputElement>) => {
      setValue(typeof obj === 'number' ? obj : obj.target.valueAsNumber)
    },
    ...args,
  }
}
