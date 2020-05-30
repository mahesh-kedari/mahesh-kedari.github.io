/**
 * 
 */
import React, { ReactElement, ReactNode } from 'react'
interface Props {
    children : ReactNode
}

export default function ContentPane({children}: Props): ReactElement {
    return (
        <>{children}</>
    )
}
