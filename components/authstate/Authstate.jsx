import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from 'antd'

const Authstate = () => {
    const [session, loading] = useSession()

    return (
        <>
            {!session && <>
                <Button onClick={signIn}>Sign in</Button>
            </>}
            {session && <>
                <span style={{marginLeft: "1em", marginRight: "1em"}}>{session.user.name}</span>
                <Button onClick={signOut}>Sign out</Button>
            </>}
        </>
    )
}

export default Authstate