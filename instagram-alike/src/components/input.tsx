/** @format */

export type InputProps = {
  description: string
  type: 'password' | 'text'
}

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
