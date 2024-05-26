/** @format */

import { InputProps } from './input'

export const Username = ({
  name,
  className,
  onChange,
  placeholder,
  value,
  maxLength,
  descriptionLabel,
}: InputProps): JSX.Element => {
  const label = !descriptionLabel ? placeholder : descriptionLabel
  return (
    <>
      <p className={'w-full h-4 text-xs text-gray-500 pl-1'}>{label}</p>
      <input
        className={className ? className : ''}
        type={'text'}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
      />
    </>
  )
}
