import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { UserAvatar } from '@/features/users/components/UserAvatar'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Google',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
      content:
        'Landr completely transformed my interview preparation. The AI practice sessions felt so realistic that I walked into my Google interview feeling completely confident. Landed the offer on my first try!',
      timeToOffer: '3 weeks',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      company: 'Stripe',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
      content:
        'I was struggling with behavioral questions until I found Landr. The AI helped me craft compelling stories and practice my delivery. Got offers from 3 different companies!',
      timeToOffer: '5 weeks',
    },
    {
      name: 'Emily Park',
      role: 'Data Scientist',
      company: 'Netflix',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
      content:
        'The resume optimization feature was a game-changer. My callback rate tripled after implementing Landr&apos;s suggestions. Worth every penny and more.',
      timeToOffer: '4 weeks',
    },
    {
      name: 'Alex Thompson',
      role: 'Frontend Developer',
      company: 'Airbnb',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
      content:
        'The technical question practice was incredible. I went from failing coding interviews to acing them. The AI&apos;s feedback helped me identify and fix my weak spots immediately.',
      timeToOffer: '2 weeks',
    },
    {
      name: 'Priya Patel',
      role: 'UX Designer',
      company: 'Figma',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
      content:
        'I was career-changing into tech and felt overwhelmed. Landr&apos;s personalized guidance gave me the confidence to pursue design roles. Now I&apos;m living my dream at Figma!',
      timeToOffer: '6 weeks',
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'AWS',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
      content:
        'The salary negotiation tips alone paid for the platform 10x over. I increased my offer by $25K just by following Landr&apos;s guidance. Absolutely worth it!',
      timeToOffer: '4 weeks',
    },
  ]

  return (
    <section className='py-20'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h3 className='text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance'>
            Success stories from{' '}
            <span className='text-primary'>real users</span>
          </h3>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Join thousands of professionals who&apos;ve accelerated their
            careers with Landr
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl h-full'
            >
              <CardContent className='p-6 h-full flex flex-col'>
                <div className='flex items-center gap-3 mb-4'>
                  <UserAvatar
                    className='size-10 flex-shrink-0'
                    user={{
                      imageUrl: testimonial.avatar,
                      name: testimonial.name,
                    }}
                  />
                  <div>
                    <div className='font-semibold text-foreground'>
                      {testimonial.name}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                <blockquote className='text-muted-foreground leading-relaxed mb-4 italic flex-grow-1'>
                  &quot;{testimonial.content}&quot;
                </blockquote>

                <div className='flex items-center justify-between'>
                  <div className='text-sm font-medium text-primary'>
                    @{testimonial.company}
                  </div>
                  <div className='text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full'>
                    Hired in {testimonial.timeToOffer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12'>
          <p className='text-muted-foreground mb-6'>
            Ready to write your own success story?
          </p>
          <Button size='lg' className='h-12 px-8' asChild>
            <Link href='/app'>Start Your Journey Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
