/** @format */

import { InputProps } from './input'

/**
 * This component renders the password input type alongside with a button to reveal the password.
 * @param {string} inputProps.value - prop used to manage the value HTML attribute for input.
 * @param {string} inputProps.placeholder - prop used to receive the HTML attribute 'placeholder' for input.
 * @param {string} inputProps.descriptionLabel - prop used to show the input box label
 * @param {string} inputProps.className - prop used to define the style of input.
 * @param {'password' | 'text'} inputProps.typeInput - prop used to define the input type. If it's a 'password' type it have a button that reveals the password.
 * @param {number} inputProps.maxLength - prop used to manage the HTML attribute 'max length' for input.
 * @param {string} inputProps.name - this prop receive the HTML attribute 'name' for input.
 * @param {string} inputProps.visibleLabel - prop used to verify if the revealing password button should be shown or not.
 * @param {void} inputProps.onChange - prop that receives a function to verify the input value changes.
 * @param {void} inputProps.onClick - prop that receives a function to verify if the button to reveal password was clicked or not.
 * @author João Sá
 */

export const Userpassword = ({
  name,
  className,
  typeInput,
  onChange,
  placeholder,
  value,
  maxLength,
  onClick,
  descriptionLabel,
  visibleLabel,
}: InputProps): JSX.Element => {
  const label = !descriptionLabel ? placeholder : descriptionLabel

  const showorhide =
    value?.length === 0
      ? 'invisible absolute top-[300px] right-[30.5%] z-10 w-fit h-16 cursor-pointer'
      : 'visible absolute top-[300px] right-[30.5%] z-10 w-fit h-16 cursor-pointer'

  return (
    <>
      <div className="flex flex-wrap" id="password-container">
        <p className={'w-full h-4 text-xs text-gray-500 pl-1'}>{label}</p>
        <input
          className={className ? className : ''}
          type={typeInput}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
        />
        <div className={showorhide} onClick={onClick}>
          <span className="h-full mx-1 text-slate-700 text-sm z-[1]">
            <strong>{visibleLabel}</strong>
          </span>
        </div>
      </div>
    </>
  )
}
