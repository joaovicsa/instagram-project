/** @format */

export const GetApp = (): JSX.Element => {
  return (
    <div className="w-96 grid grid-rows-2 grid-cols-2">
      <div className="row-span-1 col-span-2 row-start-1 col-start-1 flex justify-center items-center">
        <span>Obtenha o aplicativo.</span>
      </div>
      <div className="row-span-1 col-span-1 row-start-2 col-start-1 flex justify-center items-center">
        <button>
          <div
            className="grid grid-rows-2 grid-cols-3 bg-black text-white w-44 h-16 rounded-lg
        ">
            <div className="row-start-1 col-start-1 row-span-2 col-span-1 flex justify-center items-center h-full">
              <img
                className=" h-11"
                src="../media/disponivelgoogle.png"
                alt="disponível no google"
              />
            </div>
            <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-end">
              <span className="text-xs uppercase ">disponível no</span>
            </div>
            <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-start mb-2">
              <span className="capitalize text-xl">google play</span>
            </div>
          </div>
        </button>
      </div>
      <div className="row-span-1 col-span-1 row-start-2 col-start-2 flex justify-center items-center">
        <button>
          <div
            className="grid grid-rows-2 grid-cols-3 bg-black text-white w-44 h-16 rounded-lg
        ">
            <div className="row-start-1 col-start-1 row-span-2 col-span-1 flex justify-center items-center h-full">
              <img
                className=" h-11"
                src="../media/disponivelmicrosoft.png"
                alt="baixe da microsoft"
              />
            </div>
            <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-end">
              <span className="text-xs uppercase ">baixe da</span>
            </div>
            <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-start mb-2">
              <span className="capitalize text-xl">microsoft</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
