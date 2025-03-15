import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useScrollSpy = (sectionIds: string[], threshold: number = 0.6) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isNavigating = useRef(false); // To prevent conflicts when clicking NavLink

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigating.current) return; // Skip updates if a NavLink was just clicked

        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const sectionId = visibleSection.target.id;
          
          // Only update URL if it's different
          if (!location.hash.includes(sectionId)) {
            navigate(`#${sectionId}`, { replace: true });
          }
        }
      },
      { threshold }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, [navigate, sectionIds, threshold, location]);

  // Handle NavLink clicks (manual navigation)
  useEffect(() => {
    if (location.hash) {
      isNavigating.current = true; // Mark that we're navigating manually
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => (isNavigating.current = false), 500); // Reset after scroll animation
        }, 100); // Small delay ensures layout is ready
      }
    }
  }, [location.hash]);
};

export default useScrollSpy;
