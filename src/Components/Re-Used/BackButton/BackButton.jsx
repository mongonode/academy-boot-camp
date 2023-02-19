import "./BackButton.css"
import React, { useEffect } from "react";

const BackButton =( props )=> {

    useEffect(() => {
        window.addEventListener("popstate", restoreScrollPosition);
    
        return () => {
          window.removeEventListener("popstate", restoreScrollPosition);
        };
      }, []);
    
      const handleBackClick = () => {
        window.history.back();
      };
    
      const restoreScrollPosition = () => {
        const { scrollX, scrollY } = window.history.state || {};
    
        if (scrollX !== undefined && scrollY !== undefined) {
          window.scroll(scrollX, scrollY);
        }
      };

    return (
        <div className="BackButton">
            <button onClick={handleBackClick}>
                <i class="bi bi-arrow-left-short"></i>
                <p>{props.Title}</p>
            </button>
        </div>
    )
}

export default BackButton