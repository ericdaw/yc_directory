import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import { ST } from 'next/dist/shared/lib/utils'
import React from 'react'
import StartupCard,{ StartupTypeCard }  from './StartupCard'

const UserStartUps = async ({id}: {id:String}) => {

    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, {id})
  return (
    <>
        {startups.length > 0 ? (
            startups.map((startup : StartupTypeCard) => (
            <StartupCard key={startup._id} post={startup}/>
        ))
    ): (
        <p className='no-result'>No posts yet</p>
        )}
    </>
  )
}

export default UserStartUps