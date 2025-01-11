import React from 'react'

export default function CircleNumber({text}: {text: string}) {
  return (
    <div className="bg-slate-50 w-14 h-14 rounded-full flex items-center justify-center">
      <p className="text-2xl text-red-500">{text}</p>
    </div>
  )
}
