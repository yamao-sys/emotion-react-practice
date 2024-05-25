'use client'

import { ThemeProvider } from '@emotion/react'
import { theme } from '../../../../../styles/theme'
import { BaseLayout } from '../BaseLayout'

export const Sample = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}>
				<BaseLayout title="会員登録" phase="form">
					<InputFormArea
						type="text"
						name="email"
						placeholder="例) test@example.com"
						value={inputEmail}
						onChange={handleChangeInputEmail}
						validationErrors={emailValidationErrors}
					/>
					<InputFormArea
						type="password"
						name="password"
						placeholder="8文字以上20文字以内"
						value={inputPassword}
						onChange={handleChangeInputPassword}
						validationErrors={passwordValidationErrors}
					/>
					<BaseButton title="次へ進む" onClick={handleValidateSignUp} />
				</BaseLayout>
			</ThemeProvider> */}
      <ThemeProvider theme={theme}>
        <BaseLayout title='sample page'>bbb</BaseLayout>
      </ThemeProvider>
    </>
  )
}
