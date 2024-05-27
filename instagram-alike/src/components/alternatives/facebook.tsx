/** @format */

export const FacebookButton = (): JSX.Element => {
  return (
    <button>
      <div className="container w-64 h-9 bg-zinc-200 rounded-md flex flex-wrap items-center">
        <div className="w-16 flex items-center justify-center">
          <img src="../media/facebook.png" alt="facebook login" className="h-5" />
        </div>
        <span className="text-left w-48 h-fit text-xs pl-2">
          <strong>Continue com Facebook</strong>
        </span>
      </div>
    </button>
  )
}
