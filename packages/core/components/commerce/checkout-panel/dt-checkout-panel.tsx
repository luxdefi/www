'use client'
import React, { type PropsWithChildren } from 'react'

import { ScrollArea, StepIndicator } from '@hanzo/ui/primitives'
import { AuthWidget } from '@hanzo/auth/components'
import { CartPanel } from '@hanzo/commerce'
import { cn } from '@hanzo/ui/util'

import { BackButton, Logo, Tooltip } from '../..'
import DesktopBagCarousel from './dt-bag-carousel'
import LinksRow from './links-row'

const DesktopCheckoutPanel: React.FC<PropsWithChildren & {
  index: number
  stepNames: string[]
  close: () => void
  className?: string
}> = ({
  index,
  stepNames,
  close,
  className='',
  children
}) => ( 
  <div /* id='CHECKOUT_PANEL' */  className={cn('grid grid-cols-2',  className)}>
    <div key={1} className='w-full h-full bg-background flex flex-row items-start justify-end'>
      <div className='w-full max-w-[750px] relative flex flex-col items-center justify-start px-8 pb-8'>
        <div key={1} className=' self-start h-[80px] flex items-center' >
          <Logo onClick={close} size='md' href='/' variant='text-only' outerClx='logo-outer-tooltip-class' />
          <Tooltip select='.logo-outer-tooltip-class' text='home' place='bottom-start'/>
        </div>
        <BackButton size='sm' clx='!pl-0 !pr-1 self-start back-button-tooltip-class relative -top-4' />
        <Tooltip  select='.back-button-tooltip-class' text='back' place='bottom-start'/>
        <div key={2} className='w-full max-w-[550px] mx-auto flex flex-col gap-3'>
          <DesktopBagCarousel className='h-[260px] w-[360px] lg:w-[420px] mx-auto -mt-8' constrainTo={{w: 250, h: 250}}/>
          <CartPanel 
            className='w-full border-none p-0' 
            itemClx='mb-3' 
            totalClx='sticky -bottom-1 p-1 bg-background'
            listClx='pr-3'
            scrollAfter={5}
            scrollHeightClx='h-[50vh]'
            showPromoCode
            showShipping
          />
        </div>
      </div>
    </div>
    <div key={2} className='w-full h-full flex flex-col bg-level-1 min-h-screen justify-between'>
      <ScrollArea className='w-full flex flex-row items-start justify-start overflow-y-auto'>
        <div className='h-full w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0'>
          <div key={1} className='bg-level-1 sticky h-30 pb-8 w-full top-0 flex justify-center items-end'>
            <AuthWidget noLogin className='hidden md:flex absolute top-4 right-4 '/>
            <StepIndicator dotSizeRem={1.5} steps={stepNames} currentStep={index} className='gap-2 text-base w-pr-70' />
          </div>
          <div key={2} className='w-full max-w-[550px] mx-auto pb-10'>
            {children}
          </div>
        </div>
      </ScrollArea>
      <div className='w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0'>
        <div className='w-full max-w-[550px] mx-auto flex flex-col items-center'>
          <LinksRow className='w-full' />
        </div>
      </div>
    </div>
  </div>
)

export default DesktopCheckoutPanel