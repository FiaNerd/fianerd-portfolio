import { Icon } from "@iconify/react/dist/iconify.js"
import Button from "./Button"

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center">
  <div className="flex flex-col h-full max-w-xs mx-auto bg-gray-800 dark:bg-[#240313] rounded-lg">
          <img
            className="rounded-lg rounded-b-none object-cover w-full h-40"
            src="/assets/images/portfolio/frontend/bb/brutal-hero.jpg"
            alt="thumbnail"
            loading="lazy"
          />
          <div className="flex justify-between -mt-4 px-4">
            <span
              className="inline-block ring-4 bg-[#240313] ring-[#240313] rounded-full text-sm font-medium tracking-wide text-[#f3d758] px-4 pt-2"
              >Web</span >
            <span
              className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 dark:bg-[#240313] py-1 px-2 text-xs font-medium"
            >
              <p className="text-[#240313] dark:text-[#f3d758] font-semibold text-xs tracking-wide px-4 pt-2">
               Frontend
              </p>
            </span>
          </div>
          <div className="py-2 px-4">
            <h1
              className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
            >
              <a href="#">Lorem ipsum- lorem</a>
            </h1>
          </div>
          <div className="px-4 space-y-2">
            <p className="text-gray-400 text-sm leading-5 tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia consectetur provident text..
            </p>
            <Button
              className="flex flex-row gap-2 justify-center items-center bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide"
              >read more...</Button >
          </div>

          <div className="flex items-end h-full w-full px-2 mt-4">
         
            <div className="flex border-t border-gray-700 w-full pt-3">
              <div className="flex flex-col space-x-3 border-r border-gray-700 w-full">
                  <p className="text-sm text-center font-semibold tracking-wide text-gray-200">
                  Länkar
                  </p>
                  
                <div className="flex items-center flex-shrink-0 px-2 space-x-4 ">
                    <div className="justify-center items-center flex flex-col ">
                        <Icon icon="line-md:github-twotone" width="24" height="24" className="text-btn-bg hover:text-bg-hover"/>   
                        <p className="text-xs font-light tracking-wider text-gray-300">
                            GitHub
                        </p>
                    </div>

                    <div className="justify-center items-center flex flex-col">
                        <Icon icon="line-md:linkedin" width="24" height="24" className="text-btn-bg hover:text-bg-hover" />
                        <p className="text-xs font-light tracking-wider text-gray-300">
                            LinkedIn
                        </p>
                    </div>
                    <div className="justify-center items-center flex flex-col">
                         <Icon icon="tdesign:internet-filled" width="24" height="24" className="text-btn-bg hover:text-bg-hover"/>
                        <p className="text-xs font-light tracking-wider text-gray-300">
                            Website
                        </p>
                    </div>
                </div>
              </div>
                <div className="items-center px-2">
                    <div className="grid grid-flow-col grid-rows-2 gap-4 items-center space-x-1 text-gray-400">
                        <Icon icon="skill-icons:react-dark" width="24" height="24" />
                        <Icon icon="skill-icons:tailwindcss-dark" width="24" height="24" />
                        <Icon icon="vscode-icons:file-type-typescript" width="24" height="24" />
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio