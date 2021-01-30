/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import React from "react";

const Notification: React.FC = () => (
  <Link href="https://instagram.com/minimodular" target="blank" sx={{
    backgroundColor: "surface",
    borderRadius: 8,
    display: "block",
    margin: 0,
    px: 3,
    py: [3, 2],
    textAlign: "center",
    textDecoration: "none",
    transition: "all 300ms",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    "&:hover": {
      color: "text",
      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    },
    "&:hover .NotificationButton": {
      backgroundColor: "primary",
    }
  }}>
      Follow our research and development on <NotificationButton>Instagram<img
      sx={{
        marginLeft: 2,
      }}
        src={"/launch-app.svg"}
        height="16px"
        alt="External Link Icon"
    /></NotificationButton>
  </Link>
  )
  
export default Notification;

interface NotificationButtonProps {
  children?: React.ReactNode;
}

const NotificationButton = (props: NotificationButtonProps) => (
  <span className="NotificationButton" sx={{
    alignItems: "center",
    backgroundColor: "text",
    borderRadius: 4,
    color: "surface",
    display: ["flex", "inline-flex"],
    justifyContent: "center",
    mt: 2,
    mb: [0, 2],
    px: 2,
    py: 1,
    transition: "all 300ms",
  }}>{props.children}</span>
)