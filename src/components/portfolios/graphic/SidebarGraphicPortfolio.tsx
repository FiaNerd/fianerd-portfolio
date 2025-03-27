import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroDetails from '../../partials/HeroDetails';
import { Icon } from '@iconify/react';

interface SidebarGraphicPortfolioProps {
  isVisible: boolean;
  onClose: () => void;
  sidebarWidth?: number;
  setSidebarWidth?: React.Dispatch<React.SetStateAction<number>>;
  imageDetails?: {
    urlTitle: string;
    title: string;
    subTitle: string;
    descriptionGraphicPortfolio: string;
    image: string;
    alt: string;
  };
}

const SidebarGraphicPortfolio = ({
  isVisible,
  onClose,
  sidebarWidth: parentSidebarWidth,
  setSidebarWidth: parentSetSidebarWidth,
  imageDetails,
}: SidebarGraphicPortfolioProps) => {
  const { t } = useTranslation(['portfolio/graphicPortfolioSection']);
  const [sidebarWidth, setSidebarWidth] = useState(parentSidebarWidth || 700);
  const [maxWidth, setMaxWidth] = useState(() => window.innerWidth * 0.9);
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const minWidth = 275;

  // Sync with parent state if provided
  useEffect(() => {
    if (parentSidebarWidth !== undefined) {
      setSidebarWidth(parentSidebarWidth);
    }
  }, [parentSidebarWidth]);

  useEffect(() => {
    if (parentSetSidebarWidth) {
      parentSetSidebarWidth(sidebarWidth);
    }
  }, [sidebarWidth, parentSetSidebarWidth]);

  // Save sidebar width to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sidebarWidth', sidebarWidth.toString());
  }, [sidebarWidth]);

  // Update maxWidth dynamically on window resize and detect mobile screens
  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 768;
      setIsMobile(isMobileScreen);

      const calculatedMaxWidth = window.innerWidth * 0.9;

      if (!isMobileScreen) {
        setMaxWidth(calculatedMaxWidth);

        if (sidebarWidth > calculatedMaxWidth) {
          setSidebarWidth(calculatedMaxWidth);
        }
      } else {
        setSidebarWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarWidth]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || isMobile) {
      return;
    }

    const newWidth = startWidth.current - (e.clientX - startX.current);
    const clampedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);

    setSidebarWidth(clampedWidth);
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      document.body.style.userSelect = 'auto';
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    startX.current = e.clientX;
    startWidth.current = sidebarWidth;
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [maxWidth, isMobile]);

  if (!isVisible || !imageDetails) {
    return null; // Don't render if the sidebar is not visible or no image is selected
  }

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-80 z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={`relative bg-bg-primary flex flex-col gap-2 h-full z-50 ${
          isMobile ? 'w-full' : 'ml-auto'
        }`}
        style={{ width: isMobile ? '100%' : `${sidebarWidth}px` }}
      >
        {/* Resize Handle */}
        {!isMobile && (
          <div
            className="absolute top-0 left-0 h-full w-2 bg-accent-primary cursor-col-resize z-50"
            onMouseDown={handleMouseDown}
          />
        )}

        {/* Header Section */}
        <div className="flex flex-col items-start lg:flex-row p-8">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover:text-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1"
          >
            <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
            {t('partialTranslation:goBack')}
          </button>
        </div>

        {/* HeroDetails Component */}
        <div className="w-full overflow-auto">
          <HeroDetails
            title={imageDetails.title}
            image={imageDetails.image}
            subTitle={imageDetails.subTitle}
            light="text-[#8d4970]"
            dark="dark:text-[#55ae63]"
          />
        </div>
      </aside>
    </div>
  );
};

export default SidebarGraphicPortfolio;
