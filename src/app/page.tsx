import { SignInButton, UserButton } from '@clerk/nextjs'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function HomePage() {
  return (
    <div className='p-4 space-y-4'>
      <div className='flex items-center gap-4'>
        <SignInButton />
        <UserButton />
        <ThemeToggle />
      </div>
    </div>
  )
}
