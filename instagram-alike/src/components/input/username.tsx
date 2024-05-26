/** @format */

import { InputProps } from './input'

/**
 * This component renders the UserName type input.
 * @param {string} inputProps.value - prop used to manage the value HTML attribute for input.
 * @param {string} inputProps.placeholder - prop used to receive the HTML attribute 'placeholder' for input.
 * @param {string} inputProps.descriptionLabel - prop used to show the input box label.
 * @param {string} inputProps.className - prop used to define the style of input.
 * @param {number} inputProps.maxLength - prop used to manage the HTML attribute 'max length' for input.
 * @param {string} inputProps.name - this prop receive the HTML attribute 'name' for input.
 * @param {void} inputProps.onChange - prop that receives a function to verify the input value changes.
 * @author João Sá
 */

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
