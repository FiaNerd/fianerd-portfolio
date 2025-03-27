import { useEffect, useRef, useState } from 'react';

interface SidebarGraphicPortfolioProps {
  isVisible: boolean;
  onClose: () => void;
  sidebarWidth?: number; // Optional if managed locally
  setSidebarWidth?: React.Dispatch<React.SetStateAction<number>>; // Optional if managed locally
}

const SidebarGraphicPortfolio = ({
  isVisible,
  onClose,
  sidebarWidth: parentSidebarWidth,
  setSidebarWidth: parentSetSidebarWidth,
}: SidebarGraphicPortfolioProps) => {
  const [sidebarWidth, setSidebarWidth] = useState(parentSidebarWidth || 700); // Default to 700px
  const [maxWidth, setMaxWidth] = useState(() => window.innerWidth * 0.9);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile
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
      const isMobileScreen = window.innerWidth <= 768; // Mobile breakpoint
      setIsMobile(isMobileScreen);

      const calculatedMaxWidth = window.innerWidth * 0.9;

      if (!isMobileScreen) {
        setMaxWidth(calculatedMaxWidth);

        // Only clamp the width if it exceeds the maxWidth
        if (sidebarWidth > calculatedMaxWidth) {
          setSidebarWidth(calculatedMaxWidth);
        }
      } else {
        setSidebarWidth(window.innerWidth); // Full width on mobile
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarWidth]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || isMobile) return;

    const newWidth = startWidth.current - (e.clientX - startX.current);
    const clampedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);

    setSidebarWidth(clampedWidth);
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      document.body.style.userSelect = 'auto'; // Re-enable text selection
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    startX.current = e.clientX;
    startWidth.current = sidebarWidth;
    document.body.style.userSelect = 'none'; // Prevent text selection while resizing
  };

  // Attach mousemove and mouseup listeners to the document
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [maxWidth, isMobile]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-orange-800 bg-opacity-50 z-40"
        onClick={onClose} // Close the sidebar when clicking on the overlay
      ></div>

      {/* Sidebar */}
      <aside
        className={`relative bg-green-500 flex flex-col gap-2 h-full z-50 ${
          isMobile ? 'w-full' : 'ml-auto'
        }`}
        style={{ width: isMobile ? '100%' : `${sidebarWidth}px` }}
      >
        {/* Resize Handle */}
        {!isMobile && (
          <div
            className="absolute top-0 left-0 h-full w-2 bg-gray-300 cursor-col-resize z-50"
            onMouseDown={handleMouseDown}
          />
        )}

        <button onClick={onClose} className="self-start p-4">
          Close
        </button>

        {/* Content */}
        <div className="p-4">Sidebar Content</div>
      </aside>
    </div>
  );
};

export default SidebarGraphicPortfolio;
