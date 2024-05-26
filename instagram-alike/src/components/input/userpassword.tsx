/** @format */

import { InputProps } from './input'

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
      <div className="flex flex-wrap peer" id="password-container">
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
