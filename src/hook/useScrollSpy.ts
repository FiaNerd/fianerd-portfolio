import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const isElementInView = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};



const useScrollSpy = (sectionIds: string[], basePath: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && isElementInView(section)) {
          const newUrl = `${basePath}/${id}`;

          console.log("Checking section:", id);
console.log("New URL should be:", newUrl);
console.log("Current URL:", location.pathname);

          if (location.pathname !== newUrl) {
            navigate(newUrl, { replace: true }); // Update URL without reloading
          }
          break; // Stop checking after the first visible section
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, basePath, location.pathname, navigate]);
};

export default useScrollSpy;
