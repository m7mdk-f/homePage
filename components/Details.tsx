import React from 'react'

export default function Details({ text }: { text: string }) {
    return (
        <p className="text-gray-400 ltr:text-sm">{text}</p>

    )
}
