import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/services/clerk/lib/getCurrentUser'
import Navbar from './_Navbar'

export default async function AppLayout({ children }: { children: ReactNode }) {
  const { userId, user } = await getCurrentUser({ allData: true })

  if (userId == null) return redirect('/')
  if (user == null) return redirect('/onboarding')

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  )
}
