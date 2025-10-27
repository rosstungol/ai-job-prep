import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Stats() {
  const stats = [
    {
      value: '2.3x',
      label: 'Faster job placement',
      description:
        'Our users land offers in 4-6 weeks vs industry average of 12+ weeks',
    },
    {
      value: '65%',
      label: 'Fewer interviews needed',
      description:
        'Average 3-4 interviews to land an offer vs typical 8-10 interviews',
    },
    {
      value: '89%',
      label: 'Interview success rate',
      description:
        'Users who complete our prep program receive offers at 9/10 interviews',
    },
    {
      value: '$15K+',
      label: 'Higher starting salaries',
      description:
        'Better negotiation skills lead to significantly higher compensation',
    },
  ]

  return (
    <section className='py-20 bg-muted/30'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h3 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            Our users land jobs{' '}
            <span className='text-primary'>faster and better</span>
          </h3>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Don&apos;t just take our word for it. See how Landr users
            consistently outperform the competition in every metric that
            matters.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='text-center p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300'
            >
              <div className='text-4xl sm:text-5xl font-bold text-primary mb-2'>
                {stat.value}
              </div>
              <div className='text-lg font-semibold text-foreground mb-3'>
                {stat.label}
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <p className='text-sm text-muted-foreground mb-8 text-pretty'>
            * Based on internal data from 2,500+ successful job placements in
            2024
          </p>
          <Button size='lg' className='h-12 px-6' asChild>
            <Link href='/app'>Join thousands of successful job seekers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
