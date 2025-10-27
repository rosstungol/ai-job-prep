import { BookOpenCheckIcon, FileSlidersIcon, SpeechIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Features() {
  const features = [
    {
      title: 'AI Interview Practice',
      Icon: SpeechIcon,
      description:
        'Simulate real interviews with AI that adapts to your responses. Build confidence and eliminate nervousness before the big day.',
    },
    {
      title: 'Tailored Resume Suggestions',
      Icon: FileSlidersIcon,
      description:
        'Transform your resume into an ATS-friendly, recruiter-approved document that gets you more callbacks.',
    },
    {
      title: 'Technical Question Practice',
      Icon: BookOpenCheckIcon,
      description:
        'Solve coding problems with guided hints and explanations. Perfect your approach to technical interviews.',
    },
  ]
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature) => (
            <Card
              key={feature.title}
              className='transition-all duration-300 transform hover:-translate-y-1'
            >
              <CardHeader className='pb-4'>
                <div className='w-16 h-16 mb-4 bg-primary/10 flex items-center justify-center rounded-lg'>
                  <feature.Icon className='w-8 h-8 text-primary' />
                </div>
                <CardTitle className='text-2xl font-bold text-card-foreground'>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-lg leading-relaxed'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
