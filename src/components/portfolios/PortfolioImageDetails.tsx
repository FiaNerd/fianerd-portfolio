interface PortfolioImageDetailsProps {
  images?: { src: string; alt: string; span?: string }[];
}
const PortfolioImageDetails = ({images}: PortfolioImageDetailsProps ) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full bg-[#4b8668] dark:bg-accent-secondary">
          <div className="grid gap-4 pb-4 pl-4 pt-4">
            {/* Image 1 */}
            <div className="relative w-full">
              <img
                className="h-[5em] w-full rounded-lg object-cover object-center"
                src={images && images[0] ? images[0].src : ""}
                alt={images && images[0] ? images[0].alt : "Photo 1"}
              />
            </div>
            {/* Image 2 */}
            <div className="relative w-full">
              <img
                className="h-[17em] w-full rounded-lg object-cover object-center"
                src={images && images[1] ? images[1].src : ""}
                alt={images && images[1] ? images[1].alt : "Photo 2"}
              />
            </div>
            {/* Image 3 */}
            <div className="relative w-full">
              <img
                className="h-[8em] w-full rounded-lg object-cover object-center"
                src={images && images[2] ? images[2].src : ""}
                alt={images && images[2] ? images[2].alt : "Photo 3"}
              />
            </div>
          </div>

          <div className="grid gap-4 pb-4 pr-4 pt-4">
            {/* Image 4 */}
            <div className="relative w-full">
              <img
                className="h-[17em] w-full rounded-lg object-cover object-center"
                src={images && images[3] ? images[3].src : ""}
                alt={images && images[3] ? images[3].alt : "Photo 4"}
              />
            </div>
            {/* Image 5 */}
            <div className="relative w-full">
              <img
                className="h-[8em] w-full rounded-lg object-cover object-center"
                src={images && images[4] ? images[4].src : ""}
                alt={images && images[4] ? images[4].alt : "Photo 5"}
              />
            </div>
            {/* Image 6 */}
            <div className="relative w-full">
              <img
                className="h-[5em] w-full rounded-lg object-cover object-center"
                src={images && images[5] ? images[5].src : ""}
                alt={images && images[5] ? images[5].alt : "Photo 6"}
              />
            </div>
          </div>
        </div>
  )
}

export default PortfolioImageDetails;