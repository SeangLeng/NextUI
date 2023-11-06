import React from 'react'
import Sidebar from './components/Sidebar'

export default function BoardLayout({ children }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}
