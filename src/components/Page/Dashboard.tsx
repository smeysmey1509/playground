import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import "./Dashboard.css";
import { GoListUnordered } from "react-icons/go";
import { TbMessage2 } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const listSidebar = [
    { icons: <FaMobileScreenButton />, title: "Button" },
    { icons: <FaMobileScreenButton />, title: "Layout" },
    { icons: <FaMobileScreenButton />, title: "Table" },
    { icons: <FaMobileScreenButton />, title: "Form" },
  ];
  const navBar = [
    {
      icons: <TbMessage2 />,
    },
    {
      icons: <FaRegBell />,
    },
    {
      icons: <CiSettings />,
    },
  ];
  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "15%",
          height: "100vh",
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "8%",
          background: "#1A2942",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto   ",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src="https://static.wikia.nocookie.net/mobile-legends/images/3/30/Onic-ID.png/revision/latest?cb=20211209091437"
            alt=""
            style={{
              height: "52px",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className="sdx--sidebar"
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              color: "#596983",
            }}
          >
            Components
          </h2>
          <ul
            style={{
              listStyleType: "none",
              fontSize: "16px",
              color: "#596983",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {listSidebar.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  textAlign: "center",
                  gap: "14px",
                  cursor: "pointer",
                }}
              >
                {item.icons}
                <span>{item.title}</span>
                <IoIosArrowForward />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{
          width: "85%",
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "18px",
          boxShadow:
            "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
        }}
      >
        <div style={{ width: "100%" }}>
          <button
            style={{
              fontSize: "23px",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul style={{ listStyleType: "none", display: "flex", color: "red" }}>
          {navBar.map((Item, index) => (
            <li
              key={index}
              style={{
                fontSize: "23px",
                textAlign: "center",
                display: "flex",
                padding: "0px 12px",
                color: "#495057",
                cursor: "pointer",
              }}
            >
              {Item.icons}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
