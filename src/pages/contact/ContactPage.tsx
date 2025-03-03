import { useLayoutEffect, useState } from "react";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const ContactPage = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

      useLayoutEffect(() => {
        const header = document.getElementById("header");
        
        if (header) {
          setHeaderHeight(header.getBoundingClientRect().height);
        }
      }, []);
    
      useSmoothScroll(headerHeight ? 0 : headerHeight);
    
  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: "padding-top 0.3s ease",
      }}
      className="bg-blend-multiply"
    >
     ContactPage</div>
  )
}

export default ContactPage