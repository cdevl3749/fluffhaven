import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1px solid #eadfd9",
        background: "#ffffff",
        color: "#17110f",
        fontSize: "24px",
        fontWeight: "700",
        cursor: "pointer",
        zIndex: "9999",
        boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      ↑
    </button>
  );
}