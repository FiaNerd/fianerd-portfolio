import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

const Top5projects = () => {
  const { t } = useTranslation("portfolio")
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <p >{t('top5PortfolioSection.introTop5Portfolio')}</p>

      <section className=" mb-12">
        <div className="py-4 px-2 mx-auto sm:py-4 lg:px-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
              <NavLink to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img src="/assets/images/portfolio/graphic/allaTiders/allaTiders-SkjortKravaller.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                <h3 className="bg-[#000]/80 z-10 text-md font-medium text-[#2ea25f] dark:text-[#cb384c] absolute top-0 left-0 p-4 xs:text-xl md:text-xl">Alla Tiders Teater</h3>
                <p className="text-white">Graphic</p>
              </NavLink>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <NavLink to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                <img src="/assets/images/portfolio/frontend/bb/brutal-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                <h3 className="bg-[#000]/80 z-10 text-md font-medium text-[#2ea25f] dark:text-[#cb384c] absolute top-0 left-0 p-4 xs:text-xl md:text-xl">Brutal Beats</h3>
                <p>frontend</p>
              </NavLink>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <NavLink to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img src="/assets/images/portfolio/frontend/school/ux:ui/school-msb-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                  <h3 className="bg-[#000]/80 z-10 text-md font-medium text-[#2ea25f] dark:text-[#cb384c] absolute top-0 left-0 p-4 xs:text-xl md:text-xl">MSB</h3>
                </NavLink>

                <NavLink to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img src="/assets/images/portfolio/fullstack/pg/pg-login.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                  <h3 className="bg-[#000]/80 z-10 text-lg font-medium  text-[#2ea25f] dark:text-[#cb384c] absolute top-0 left-0 p-4 xs:text-xl md:text-xl">Printagon</h3>
                </NavLink>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
              <NavLink to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img src="/assets/images/portfolio/graphic/stumpen/stumpen-tyckeJagHordeHundar.jpg" alt="graphic - Tyckte jag hörde hundar" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div> */}
                <h3 className="bg-[#000]/80 w-full z-10 text-lg font-medium text-[#2ea25f] dark:text-[#cb384c] absolute top-0 left-0 p-4 xs:text-xl md:textxl">Tyckte Jag Hörde Hundar</h3>
              </NavLink>
            </div>
          </div>
        </div> 
    </section>
      
    </div>
  )
}

export default Top5projects