import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TfiArrowCircleDown } from "react-icons/tfi";

export interface LayoutProps {
  imgUrl: string;
  menuList: { icons: "" }[];
}

const Layouts: React.FC<LayoutProps> = ({ imgUrl, menuList }) => {
  // Store the index of the hovered item
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Set the hovered index on mouse enter
  const handleMouseEnter = (index: number) => setHoveredIndex(index);

  // Reset the hovered index on mouse leave
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      }}
    >
      <div
        style={{
          width: "8%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <img
          src={imgUrl}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {menuList.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "13px",
                textAlign: "center",
                background: "#F5F5F5",
                borderRadius: "50%",
                cursor: "pointer",
                color: hoveredIndex === index ? "blue" : "black",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.icons}
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            cursor: "pointer",
            // alignItems: "center",
          }}
        >
          <h2
            style={{
              padding: "0px",
              margin: "0px",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            Raksmey
          </h2>
          <span
            style={{
              padding: "0px",
              margin: "0px",
              fontFamily: "sans-serif",
              fontSize: "12px",
            }}
          >
            Web Developer
          </span>
        </div>
        <TfiArrowCircleDown
          style={{
            fontFamily: "sans-serif",
            fontWeight: "500",
            fontSize: "18px",
            cursor: "pointer",
          }}
        />
      </div>
    </section>
  );
};

export default Layouts;
