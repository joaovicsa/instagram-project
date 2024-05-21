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
          className="flex flex-wrap w-64 h-9 border-2 rounded-sm bg-stone-100 overflow-hidden">
          <p className="w-full h-4 text-xs text-gray-500 pl-1">{description}:</p>
          <input
            className="w-[254px] h-[35px] bg-stone-100 text-xs z-10 pl-1 border-b-2 border-r-2 fixed focus:w-full focus:h-4 focus:z-0 focus:relative focus:border-none"
            type="text"
            name="username"
            id="username"
            placeholder={description}
          />
        </div>
      ) : (
        <div id="input" className="flex w-64 h-9 border-2 rounded-sm bg-stone-100">
          <div className="flex flex-wrap ">
            <p className="w-full h-4 text-xs text-gray-500 pl-1">{description}:</p>
            <input
              className="w-[254px] h-[35px] bg-stone-100 text-xs z-10 pl-1 border-b-2 border-r-2 fixed focus:w-full focus:h-4 focus:z-0 focus:relative focus:border-none"
              type="password"
              name="user password"
              id="userpassword"
              placeholder={description}
            />
          </div>
          <div className="w-fit">
            <button type="submit" className="h-full mx-1 text-slate-700 text-sm">
              <strong>Mostrar</strong>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
