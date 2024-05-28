/** @format */

export const GetApp = (): JSX.Element => {
  return (
    <div className="md:w-96 md:grid md:grid-rows-2 md:grid-cols-2 md:h-fit w-full h-20 flex flex-wrap">
      <div className="md:row-span-1 md:col-span-2 md:row-start-1 md:col-start-1 w-full flex justify-center items-center mb-4 md:mb-0">
        <span>Obtenha o aplicativo.</span>
      </div>
      <div className="md:row-span-1 md:col-span-2 md:row-start-2 md:col-start-1 w-full flex justify-center items-center gap-2">
        <div className="md:row-span-1 md:col-span-1 md:row-start-2 md:col-start-1 flex justify-center items-center">
          <button>
            <div
              className="grid grid-rows-2 grid-cols-3 bg-black text-white md:w-44 w-36 h-14 rounded-lg
        ">
              <div className="row-start-1 col-start-1 row-span-2 col-span-1 flex justify-center items-center h-full">
                <img
                  className="md:h-11 h-9"
                  src="../media/disponivelgoogle.png"
                  alt="disponível no google"
                />
              </div>
              <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-end">
                <span className="text-xs uppercase ">disponível no</span>
              </div>
              <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-start mb-2">
                <span className="capitalize text-md md:text-lg lg:text-xl">
                  google play
                </span>
              </div>
            </div>
          </button>
        </div>
        <div className="row-span-1 col-span-1 row-start-2 col-start-2 flex justify-center items-center">
          <button>
            <div
              className="grid grid-rows-2 grid-cols-3 bg-black text-white md:w-44 w-36 h-14 rounded-lg
        ">
              <div className="row-start-1 col-start-1 row-span-2 col-span-1 flex justify-center items-center h-full">
                <img
                  className="md:h-11 h-9"
                  src="../media/disponivelmicrosoft.png"
                  alt="baixe da microsoft"
                />
              </div>
              <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-end">
                <span className="text-xs uppercase ">baixe da</span>
              </div>
              <div className="col-start-2 col-span-2 row-span-1 flex justify-start items-start mb-2">
                <span className="capitalize text-md md:text-lg lg:text-xl">
                  microsoft
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
