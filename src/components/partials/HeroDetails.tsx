import Title from './Title';
import useSmoothScroll from '../../hook/useSmoothScroll';
import useHeaderHeight from '../../hook/useHeaderHeight';

interface HeroDetailsProps {
  title: string;
  subTitle: string;
  image: string;
  dark: string;
  light: string;
}

const HeroDetails = ({
  title,
  image,
  subTitle,
  dark,
  light,
}: HeroDetailsProps) => {
  const headerHeight = useHeaderHeight();
  useSmoothScroll(headerHeight);

  return (
    <div
      className={`relative w-full h-[15em] lg:h-[20rem] flex items-center justify-center bg-cover bg-center mb-8 ${dark} ${light}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Title */}
      <div className="relative z-10 text-center flex flex-col justify-center">
        <Title
          title={title}
          dot={'.'}
          children={subTitle}
          className="bg-black py-2 px-4 xl:px-12 md:w-auto md:rounded-lg"
          subHeadingClassName="text-amber-100"
          titleClassName="text-[1.8rem] md:text-[2.5rem]"
          dotClassName="text-[4rem] -ml-4 md:text-[5rem] lg:text-[6rem] leading-8 align-baseline absoulte"
        />
      </div>
    </div>
  );
};

export default HeroDetails;
