/** @format */

export type InputProps = {
  description: string
  type: 'password' | 'text'
}

/**
 * This component was created to render a box to receive infos about the user to login.
 * @param {Object} inputProps - object used to define the component props
 * @param {string} inputProps.description - prop used to show the input box label
 * @param {'password' | 'text'} inputProps.type - prop used to define the input type. If it's a 'password' type it have a button that reveals the password.
 * @author João Sá
 */

export const Input = ({ description, type }: InputProps): JSX.Element => {
  return (
    <>
      {type === 'text' ? (
        <div
          id="input"
          className="flex flex-wrap w-64 h-9 border-2 rounded-sm bg-stone-100">
          <p className="w-full h-4 text-xs text-gray-500 pl-1">{description}:</p>
          <input
            className="w-full h-4 bg-stone-100"
            type="text"
            name="username"
            id="username"
          />
        </div>
      ) : (
        <div id="input" className="flex w-64 h-9 border-2 rounded-sm bg-stone-100">
          <div className="flex flex-wrap ">
            <p className="w-full h-4 text-xs text-gray-500 pl-1">{description}:</p>
            <input
              className="w-full h-4 bg-stone-100"
              type="password"
              name="user password"
              id="userpassword"
            />
          </div>
          <div className="w-fit">
            <button type="submit" className="h-full mx-1 text-slate-700 text-sm">
              <strong>Ocultar</strong>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
