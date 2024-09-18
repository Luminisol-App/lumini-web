import React from 'react'

type ContentStyle = React.CSSProperties

type PageProps = {
  children?: React.ReactNode
  contentStyle?: ContentStyle
  backgroundContent?: React.ReactNode
}

export function Page({ children, backgroundContent, contentStyle }: PageProps) {
  return (
    <div className="proposal-shadow relative top-0 flex h-[29.7cm] w-[21cm]">
      <div className="absolute bottom-0 left-0 right-0 top-0">
        {backgroundContent}
      </div>
      <div style={{ ...contentStyle }} className="relative w-full">
        {children}
      </div>
    </div>
  )
}
