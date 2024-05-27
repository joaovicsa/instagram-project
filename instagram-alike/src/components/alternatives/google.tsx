/** @format */

export const GoogleButton = (): JSX.Element => {
  return (
    <button>
      <div className="container w-64 h-9 bg-zinc-200 rounded-md flex flex-wrap items-center">
        <div className="w-16 flex items-center justify-center">
          <img src="../media/google.png" alt="google login" className="h-7" />
        </div>
        <span className="text-left w-48 h-fit text-xs pl-2">
          <strong>Continue com Google</strong>
        </span>
      </div>
    </button>
  )
}
