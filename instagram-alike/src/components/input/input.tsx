/** @format */

import { ChangeEvent, ReactNode } from 'react'

export type InputProps = {
  descriptionLabel: string
  className?: string
  typeInput?: string
  name?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  placeholder?: string
  maxLength?: number
  children?: ReactNode
  visibleLabel?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * This component was created to render a box to receive infos about the user to login.
 * @param {Object} inputProps - object used to define the component props
 * @param {string} inputProps.description - prop used to show the input box label
 * @param {'password' | 'text'} inputProps.type - prop used to define the input type. If it's a 'password' type it have a button that reveals the password.
 * @author João Sá
 */

export const Input = ({ children, className }: InputProps): JSX.Element => {
  return (
    <div
      id="input"
      className={
        className
          ? className
          : 'flex flex-wrap w-64 h-9 border-2 rounded-sm bg-stone-100 overflow-hidden'
      }>
      {children}
    </div>
  )
}
