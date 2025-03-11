const PageNotFoundBackground = () => {
  return (
    <div 
      className="
        absolute inset-0
        bg-[url('/assets/images/pageNotFound/light/404-bg-360w.jpg')] dark:bg-[url('/assets/images/pageNotFound/dark/404-bg-360w-dark.jpg')] 
        sm:bg-[url('/assets/images/pageNotFound/light/404-bg-414w.jpg')] dark:sm:bg-[url('/assets/images/pageNotFound/dark/404-bg-414w-dark.jpg')] 
        md:bg-[url('/assets/images/pageNotFound/light/404-bg-768w.jpg')] dark:md:bg-[url('/assets/images/pageNotFound/dark/404-bg-768w-dark.jpg')] 
        lg:bg-[url('/assets/images/pageNotFound/light/404-bg-800w.jpg')] dark:lg:bg-[url('/assets/images/pageNotFound/dark/404-bg-800w-dark.jpg')]
        xl:bg-[url('/assets/images/pageNotFound/light/404-bg-1366w.jpg')] dark:xl:bg-[url('/assets/images/pageNotFound/dark/404-bg-1366w-dark.jpg')]
        2xl:bg-[url('/assets/images/pageNotFound/light/404-bg-1920w.jpg')] dark:2xl:bg-[url('/assets/images/pageNotFound/dark/404-bg-1920w-dark.jpg')]
        3xl:bg-[url('/assets/images/pageNotFound/light/404-bg-3840w.jpg')] dark:3xl:bg-[url('/assets/images/pageNotFound/dark/404-bg-3840w-dark.jpg')]
        bg-no-repeat bg-cover bg-center
        h-full w-full
        -z-10
      "
    ></div>
  );
};

export default PageNotFoundBackground;