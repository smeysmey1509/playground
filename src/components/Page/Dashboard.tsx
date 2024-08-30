import React, { useState, useEffect } from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import "./Dashboard.css";
import { TbMessage2 } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import ButtonComponent from "../ButtonComponent";
import { Box } from "@mui/material";
import ProfileCard from "../ProfileCard";
import GenericForm from "../FormComponent/GenericForm";
import Avatar from "../Avatar";

type ButtonProps = {
  label: string;
  primary: boolean;
  size: "small" | "medium" | "large";
  backgroundColor: string;
  onClick: () => void;
};

type ProfileCardProps = {
  name: string;
  title: string;
  imageUrl: string;
  posts: number;
  followers: number;
  following: number;
};

type AvatarProps = {
  src: string;
  alt: string;
  size: number;
  shape: "circle" | "square";
  fallback: string;
  object: "cover" | "contain";
};

type ComponentPropsMap = {
  Button: ButtonProps;
  ProfileCard: ProfileCardProps;
  Avatar: AvatarProps;
  // Add other components and their props here
};

type ActiveComponentProps = ComponentPropsMap[keyof ComponentPropsMap];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [activeComponent, setActiveComponent] =
    useState<keyof ComponentPropsMap>("Button");
  const [componentProps, setComponentProps] = useState<ActiveComponentProps>({
    label: "Click Me",
    primary: false,
    size: "small",
    backgroundColor: "red",
    onClick: () => alert(123),
  } as ActiveComponentProps);

  useEffect(() => {
    const savedProps = localStorage.getItem("componentProps");
    if (savedProps) {
      setComponentProps(JSON.parse(savedProps));
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleSidebarItemClick = (item: keyof ComponentPropsMap) => {
    setActiveComponent(item);
    if (item === "Button") {
      setComponentProps({
        label: "Click Me",
        primary: true,
        size: "small",
        backgroundColor: "red",
        onClick: () => alert(123),
      } as ActiveComponentProps);
    } else if (item === "ProfileCard") {
      setComponentProps({
        name: "Rkasmey",
        title: "asd",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:1108/1*yAqUEyn3-z-U6n2rkaUBoQ.jpeg",
        posts: 55,
        followers: 21,
        following: 124,
      } as ActiveComponentProps);
    } else if (item === "Avatar") {
      setComponentProps({
        src: "data:image/jpeg;base64,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",
        alt: "Avatar",
        size: 350,
        shape: "circle",
        fallback: "A",
        object: "cover",
      } as ActiveComponentProps);
    }
  };

  const listSidebar = [
    {
      icons: <FaMobileScreenButton />,
      title: "Button" as keyof ComponentPropsMap,
    },
    {
      icons: <FaMobileScreenButton />,
      title: "ProfileCard" as keyof ComponentPropsMap,
    },
    {
      icons: <FaMobileScreenButton />,
      title: "Avatar" as keyof ComponentPropsMap,
    },
  ];

  const navBar = [
    { icons: <TbMessage2 /> },
    { icons: <FaRegBell /> },
    { icons: <CiSettings /> },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "Button":
        return <ButtonComponent {...(componentProps as ButtonProps)} />;
      case "ProfileCard":
        return <ProfileCard {...(componentProps as ProfileCardProps)} />;
      case "Avatar":
        return <Avatar {...(componentProps as AvatarProps)} />;
      // Add other cases here
      default:
        return null;
    }
  };

  const handlePropsChange = (newProps: ActiveComponentProps) => {
    setComponentProps(newProps);
  };

  const handleSave = () => {
    localStorage.setItem("componentProps", JSON.stringify(componentProps));
    console.log("Props saved:", componentProps);
  };

  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
      }}
    >
      {/* Sidebar Section */}
      <div
        style={{
          width: isSidebarOpen ? "15%" : "0",
          height: "100vh",
          padding: isSidebarOpen ? "18px" : "0",
          display: "flex",
          flexDirection: "column",
          gap: "8%",
          background: "#1A2942",
          overflow: "hidden",
          transition: "width 0.3s ease",
        }}
      >
        {isSidebarOpen && (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1024px-BMW.svg.png"
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
                  gap: "18px",
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
                      backgroundColor:
                        activeComponent === item.title
                          ? "#29384F"
                          : "transparent",
                      padding: "10px",
                      borderRadius: "4px",
                      color: activeComponent === item.title ? "#3ebfc2" : " ",
                    }}
                    onClick={() => handleSidebarItemClick(item.title)}
                  >
                    {item.icons}
                    <span>{item.title}</span>
                    <IoIosArrowForward />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Main Content and Navbar Section */}
      <div
        style={{
          width: isSidebarOpen ? "85%" : "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 16px",
            backgroundColor: "#F6F6F6",
            borderBottom: "1px solid #DDDDDD",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "18px",
            }}
          >
            <FaBars onClick={handleSidebarToggle} />
            <h4
              style={{
                color: "#1C2C44",
              }}
            >
              Dashboard
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              gap: "18px",
            }}
          >
            {navBar.map((item, index) => (
              <span key={index} style={{ cursor: "pointer" }}>
                {item.icons}
              </span>
            ))}
          </div>
        </div>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            padding: "18px",
          }}
        >
          <Box
            style={{
              width: "100%",
              // display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {renderComponent()}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              padding: "18px",
              gap: "18px",
            }}
          >
            <h2
              style={{
                width: "100%",
                textAlign: "start",
                fontSize: "18px",
              }}
            >
              Edit
            </h2>
            <GenericForm
              key={activeComponent}
              componentProps={componentProps}
              onSave={handleSave}
              onPropsChange={handlePropsChange}
            />
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default Dashboard;
