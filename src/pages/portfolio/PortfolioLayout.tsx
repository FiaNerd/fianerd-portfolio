import { Outlet } from "react-router-dom"

const PortfolioLayout = () => {
  return (
    <>
    <div  id="portfolio" className="top-[20em]">PortfolioLayout</div>
    <Outlet />
    </>
  )
}

export default PortfolioLayout