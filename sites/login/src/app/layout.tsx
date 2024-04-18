import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport, 
  ChatWidget
} from '@luxfi/core'

import { Toaster } from '@hanzo/ui/primitives'

import { AuthServiceProvider } from '@hanzo/auth/service'
import { getUserServerSide } from '@hanzo/auth/server'
import type { AuthServiceConf } from '@hanzo/auth/types'

import { CommerceServiceProvider } from '@hanzo/commerce'

import siteDef from '../site-def'
import _metadata from '../metadata'

import '@luxfi/core/style/lux-global.css'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  {
  const currentUser = await getUserServerSide()

  return (
    <AuthServiceProvider user={currentUser} conf={{} as AuthServiceConf}>
      <RootLayoutCommon siteDef={siteDef} header={false} >
        {children}
        <ChatWidget
          title='LUX'
          subtitle='AI'
          chatbotUrl='https://lux.chat/iframe'
        />
        <div className="hidden">
          <iframe id={'lux.market'} src={'https://lux.market'} />
        </div>
      </RootLayoutCommon>
    </AuthServiceProvider>
  )
}

export default RootLayout
