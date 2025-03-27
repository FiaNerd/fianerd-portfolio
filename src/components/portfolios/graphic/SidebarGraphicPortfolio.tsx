import { useEffect, useRef, useState } from 'react';

interface SidebarGraphicPortfolioProps {
  isVisible: boolean;
  onClose: () => void;
  sidebarWidth: number;
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarGraphicPortfolio = ({
  isVisible,
  onClose,
  sidebarWidth,
  setSidebarWidth,
}: SidebarGraphicPortfolioProps) => {
  const [maxWidth, setMaxWidth] = useState(() => window.innerWidth * 0.9);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const minWidth = 275;

  // Update maxWidth dynamically on window resize
  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth * 0.9);
      if (sidebarWidth > window.innerWidth * 0.9) {
        setSidebarWidth(window.innerWidth * 0.9);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarWidth, setSidebarWidth]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    // Calculate the new width based on mouse movement
    const newWidth = startWidth.current + (startX.current - e.clientX);

    // Clamp the width between minWidth and maxWidth
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
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    startX.current = e.clientX;
    startWidth.current = sidebarWidth;
    document.body.style.userSelect = 'none';
  };

  // Attach mousemove and mouseup listeners to the document
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [maxWidth]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 right-0 h-full z-50 flex overflow-y-hidden select-none">
      {/* Resize Handle */}
      <div
        className="w-2 bg-gray-black cursor-col-resize bg-black"
        onMouseDown={handleMouseDown}
      ></div>
      <aside
        className="relative bg-green-500 flex flex-col gap-2"
        style={{ width: `${sidebarWidth}px` }}
      >
        <button onClick={onClose} className="self-end p-2">
          Close
        </button>
        <div className="p-4">Sidebar Content</div>
      </aside>
    </div>
  );
};

export default SidebarGraphicPortfolio;
