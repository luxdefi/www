'use client'
import React from "react"
import { observer } from "mobx-react-lite"

import {
    Button,
    LinkElement,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Separator
} from '@hanzo/ui/primitives'

import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'

import { useAuth } from "@hanzo/auth/service"

import { Avatar } from "../icons"
import { Ethereum } from "@hanzo/auth/icons"
import { Icons } from ".."

const MobileAuthWidget: React.FC<{
    noLogin?: boolean
    className?: string
    handleLogin?: () => void
}> = observer(({
    noLogin = false,
    handleLogin,
    className
}) => {
    const auth = useAuth()

    if (!auth) {
        return null
    }
    if (!auth.loggedIn && typeof window !== 'undefined') {
        return (noLogin ? null : (
            (handleLogin) ? (
                <div className="flex items-center py-3 px-5 gap-4">
                    <Icons.Avatar className='self-center w-6 h-6' />
                    <Button
                        variant='link'
                        className='text-2xl !min-w-0 self-center'
                        onClick={handleLogin}
                    >
                        Log In / Sign Up
                    </Button>
                </div>
            ) : (
                <LinkElement
                    def={{
                        href: `${process.env.NEXT_PUBLIC_LOGIN_SITE_URL}?redirectUrl=${window.location.href}`,
                        title: 'Login',
                        variant: 'primary',
                        newTab: false
                    } satisfies LinkDef}
                    className='h-8 w-fit !min-w-0'
                />
            )
        ))
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size='icon'
                    className={cn('rounded-full text-muted border-2 border-muted bg-level-1 hover:bg-level-2 hover:border-foreground hover:text-foreground uppercase w-8 h-8', className)}
                >{auth.user?.email[0]}</Button>
            </PopoverTrigger>
            <PopoverContent className='bg-level-0'>
                <div className="grid gap-4">
                    <div className="space-y-2 truncate">
                        {auth.user?.displayName ? (
                            <>
                                <h4 className="font-medium leading-none truncate">{auth.user.displayName}</h4>
                                <p className="text-sm opacity-50 truncate">{auth.user.email}</p>
                            </>
                        ) : (
                            <h4 className="font-medium leading-none truncate">{auth.user?.email}</h4>
                        )}
                        {auth.user?.walletAddress ? (
                            <p className="text-sm opacity-50 truncate">{auth.user.walletAddress}</p>
                        ) : (
                            <Button variant="outline" className='w-full flex items-center gap-2' onClick={auth.associateWallet.bind(auth)}>
                                <Ethereum height={20} />Connect your wallet
                            </Button>
                        )}
                    </div>
                    <Separator />
                    <Button variant="outline" onClick={auth.logout.bind(auth)}>Logout</Button>
                </div>
            </PopoverContent>
        </Popover>
    )

})

export default MobileAuthWidget