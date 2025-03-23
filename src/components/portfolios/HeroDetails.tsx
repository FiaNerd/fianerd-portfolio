import Title from '../partials/Title';
import useSmoothScroll from '../../hook/useSmoothScroll';
import useHeaderHeight from '../../hook/useHeaderHeight';

interface HeroDetailsProps {
  title: string;
  titleDescription: string;
  image: string;
  dark: string;
  light: string;
}

const HeroDetails = ({
  title,
  image,
  titleDescription,
  dark,
  light,
}: HeroDetailsProps) => {
  const headerHeight = useHeaderHeight();
  useSmoothScroll(headerHeight);

  return (
    <div
      className={`relative w-full h-[20rem] flex items-center justify-center bg-cover bg-center ${dark} ${light}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Title */}
      <div className="relative z-10 text-center flex flex-col justify-center">
        <Title
          title={title}
          dot={'.'}
          children={titleDescription}
          className="text-6xl md:text-8xl bg-black py-2 px-4 xl:px-12 md:w-auto md:rounded-lg"
          subHeadingClassName="text-amber-100"
        />
      </div>
    </div>
  );
};

export default HeroDetails;