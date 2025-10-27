import {
  BookOpenCheckIcon,
  Brain,
  FileSlidersIcon,
  SpeechIcon,
} from 'lucide-react'

export default function DetailedFeatures() {
  return (
    <section className='py-20 bg-muted/20'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h3 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            Everything you need to{' '}
            <span className='text-primary'>ace your interviews</span>
          </h3>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Get hands-on experience with real interview scenarios, personalized
            feedback, and industry-proven strategies
          </p>
        </div>

        <div className='space-y-20'>
          {/* AI Interview Practice */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <SpeechIcon className='w-6 h-6 text-primary' />
                </div>
                <h4 className='text-2xl font-bold text-foreground'>
                  AI Interview Practice
                </h4>
              </div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Practice with our advanced AI interviewer that adapts to your
                responses and provides real-time feedback. Experience realistic
                interview scenarios for behavioral, technical, and case study
                questions.
              </p>
              <ul className='space-y-3 text-muted-foreground'>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Real-time voice interaction with AI interviewer
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Personalized feedback on communication style
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Industry-specific question banks
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Progress tracking and improvement metrics
                </li>
              </ul>
            </div>
            <div className='bg-card rounded-2xl p-6 border border-border shadow-lg'>
              <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center'>
                    <Brain className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-sm font-medium text-foreground'>
                    AI Interviewer
                  </span>
                </div>
                <p className='text-sm text-muted-foreground italic'>
                  &quot;Tell me about a time when you had to work with a
                  difficult team member...&quot;
                </p>
              </div>
              <div className='bg-primary/5 rounded-lg p-4'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center'>
                    <span className='text-xs font-bold text-primary'>You</span>
                  </div>
                  <span className='text-sm font-medium text-foreground'>
                    Your Response
                  </span>
                </div>
                <p className='text-sm text-muted-foreground'>
                  &quot;In my previous role, I worked with a colleague who
                  consistently missed deadlines...&quot;
                </p>
                <div className='mt-3 flex items-center gap-2'>
                  <span className='text-xs bg-primary/20 text-primary px-2 py-1 rounded-full'>
                    Strong storytelling
                  </span>
                  <span className='text-xs bg-primary/20 text-primary px-2 py-1 rounded-full'>
                    Good structure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Optimization */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='lg:order-2'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <FileSlidersIcon className='w-6 h-6 text-primary' />
                </div>
                <h4 className='text-2xl font-bold text-foreground'>
                  Smart Resume Analysis
                </h4>
              </div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Transform your resume with AI-powered suggestions that optimize
                for ATS systems and recruiter preferences. Get specific,
                actionable feedback tailored to your target role and industry.
              </p>
              <ul className='space-y-3 text-muted-foreground'>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  ATS compatibility scoring and optimization
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Job description matching analysis
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Industry-specific keyword suggestions
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Before/after impact measurement
                </li>
              </ul>
            </div>
            <div className='lg:order-1 bg-card rounded-2xl p-6 border border-border shadow-lg'>
              <div className='mb-4'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-sm font-medium text-foreground'>
                    Resume Score
                  </span>
                  <span className='text-2xl font-bold text-primary'>87%</span>
                </div>
                <div className='w-full bg-muted rounded-full h-2'>
                  <div
                    className='bg-primary h-2 rounded-full'
                    style={{ width: '87%' }}
                  ></div>
                </div>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
                  <span className='text-sm text-foreground'>
                    ATS Compatibility
                  </span>
                  <span className='text-sm font-medium text-primary'>
                    Excellent
                  </span>
                </div>
                <div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
                  <span className='text-sm text-foreground'>Keyword Match</span>
                  <span className='text-sm font-medium text-primary'>92%</span>
                </div>
                <div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
                  <span className='text-sm text-foreground'>
                    Impact Statements
                  </span>
                  <span className='text-sm font-medium text-primary'>Good</span>
                </div>
              </div>
              <div className='mt-4 p-3 bg-primary/10 rounded-lg'>
                <p className='text-xs text-primary font-medium mb-1'>
                  💡 Suggestion
                </p>
                <p className='text-xs text-muted-foreground'>
                  Add 2 more quantified achievements to increase impact score
                </p>
              </div>
            </div>
          </div>

          {/* Technical Questions */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <BookOpenCheckIcon className='w-6 h-6 text-primary' />
                </div>
                <h4 className='text-2xl font-bold text-foreground'>
                  Technical Interview Prep
                </h4>
              </div>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                Master coding interviews with our comprehensive practice
                platform. Get step-by-step guidance, hints, and detailed
                explanations for problems across all difficulty levels and
                topics.
              </p>
              <ul className='space-y-3 text-muted-foreground'>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  1000+ curated coding problems
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Real-time code execution and testing
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  AI-powered hints and explanations
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full'></div>
                  Company-specific question patterns
                </li>
              </ul>
            </div>
            <div className='bg-card rounded-2xl p-6 border border-border shadow-lg'>
              <div className='bg-muted/50 rounded-lg p-4 mb-4'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-medium text-foreground'>
                    Two Sum
                  </span>
                  <span className='text-xs bg-primary/20 text-primary px-2 py-1 rounded-full'>
                    Easy
                  </span>
                </div>
                <p className='text-xs text-muted-foreground mb-3'>
                  Given an array of integers, return indices of two numbers that
                  add up to target.
                </p>
                <div className='bg-background rounded p-2 font-mono text-xs'>
                  <span className='text-primary'>def</span>{' '}
                  <span className='text-foreground'>twoSum</span>(
                  <span className='text-primary'>nums, target</span>):
                  <br />
                  &nbsp;&nbsp;
                  <span className='text-muted-foreground'>
                    # Your solution here
                  </span>
                </div>
              </div>

              <div className='text-xs text-muted-foreground'>
                <span className='text-primary'>✓</span> 3/5 test cases passed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
