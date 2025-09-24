'use client'

import { useState, useEffect } from 'react'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const themes = [
  {
    name: 'Light',
    Icon: Sun,
    value: 'light',
  },
  {
    name: 'Dark',
    Icon: Moon,
    value: 'dark',
  },
  {
    name: 'System',
    Icon: Monitor,
    value: 'system',
  },
] as const

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevents hydration mismatch

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          {resolvedTheme === 'dark' ? <Moon /> : <Sun />}
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {themes.map(({ value, Icon, name }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className={cn(
              'cursor-pointer',
              theme === value && 'bg-accent text-accent-foreground'
            )}
          >
            <Icon className='size-4' />
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
