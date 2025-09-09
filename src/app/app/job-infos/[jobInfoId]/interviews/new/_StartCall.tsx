'use client'

import { useVoice, VoiceReadyState } from '@humeai/voice-react'
import { env } from '@/data/env/client'
import { JobInfoTable } from '@/drizzle/schema'
import { Button } from '@/components/ui/button'

export function StartCall({
  accessToken,
  jobInfo,
  user,
}: {
  accessToken: string
  jobInfo: Pick<
    typeof JobInfoTable.$inferSelect,
    'id' | 'title' | 'description' | 'experienceLevel'
  >
  user: {
    name: string
    imageUrl: string
  }
}) {
  const { connect, readyState, disconnect } = useVoice()

  if (readyState === VoiceReadyState.IDLE) {
    return (
      <div className='h-screen-header flex items-center justify-center'>
        <Button
          size='lg'
          onClick={async () => {
            // connect
            connect({
              auth: { type: 'accessToken', value: accessToken },
              configId: env.NEXT_PUBLIC_HUME_CONFIG_ID,
              sessionSettings: {
                type: 'session_settings',
                variables: {
                  userName: user.name,
                  title: jobInfo.title || 'Not Specified',
                  description: jobInfo.description,
                  experienceLevel: jobInfo.experienceLevel,
                },
              },
            })
          }}
        >
          Start Interview
        </Button>
      </div>
    )
  }

  if (
    readyState === VoiceReadyState.CONNECTING ||
    readyState === VoiceReadyState.CLOSED
  ) {
    return null
  }

  return 'Connected'
}
