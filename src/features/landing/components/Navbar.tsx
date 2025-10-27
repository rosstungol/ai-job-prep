import { Suspense } from 'react'

import Link from 'next/link'

import { SignInButton } from '@clerk/nextjs'
import { BrainCircuitIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/services/clerk/lib/getCurrentUser'

export default function Navbar() {
  return (
    <nav className='border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50'>
      <div className='container'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center gap-2'>
            <BrainCircuitIcon className='size-8 text-primary' />
            <h1 className='text-2xl font-bold text-foreground'>Landr</h1>
          </div>
          <Suspense
            fallback={
              <SignInButton forceRedirectUrl='/app'>
                <Button variant='outline'>Sign In</Button>
              </SignInButton>
            }
          >
            <NavButton />
          </Suspense>
        </div>
      </div>
    </nav>
  )
}

async function NavButton() {
  const { userId } = await getCurrentUser()

  if (userId == null) {
    return (
      <SignInButton forceRedirectUrl='/app'>
        <Button variant='outline'>Sign In</Button>
      </SignInButton>
    )
  }

  return (
    <Button asChild>
      <Link href='/app'>Dashboard</Link>
    </Button>
  )
}
