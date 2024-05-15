/** @format */

export type InputProps = {
  description: string
  type: 'password' | 'text'
}

export const Input = ({ description, type }: InputProps): JSX.Element => {
  return (
    <>
      {type === 'text' ? (
        <div id="input" className="flex flex-wrap w-full">
          <p className="w-full h-4 text-xs text-gray-400">{description}</p>
          <input
            className="w-full h-4 bg-stone-100"
            type="text"
            name="username"
            id="username"
          />
        </div>
      ) : (
        <div id="input" className="flex flex-wrap w-full">
          <p className="w-full h-4 text-xs text-gray-400">{description}:</p>
          <input
            className="w-full h-4 bg-stone-100"
            type="password"
            name="user password"
            id="userpassword"
          />
        </div>
      )}
    </>
  )
}
