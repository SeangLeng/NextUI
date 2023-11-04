'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Root({ link }) {
    const router = useRouter(0)
    return router.push(link)
}
