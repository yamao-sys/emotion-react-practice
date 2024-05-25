'use client'
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { theme } from '../../../../../styles/theme'

type Props = {
  title: string
  children: ReactNode
}

const container = css({
  width: '50%',
  margin: `${theme.size.p16} auto`,
})

export const BaseLayout = ({ title, children }: Props) => {
  return (
    <>
      <div css={container}>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
      </div>
    </>
  )
}
