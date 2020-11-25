/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import React from "react";

const Notification: React.FC = () => (
  <p sx={{
    backgroundColor: "surface",
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    px: 3,
    py: 2,
    margin: 0,
    textAlign: "center",
  }}>
      Follow our research and development on <NotificationLink href="https://instagramt.com/minimodular">Instagram</NotificationLink>
  </p>
  )
  
export default Notification;
  
const NotificationLink: React.FC = ({ children, href }) => (
  <Link sx={{
    display: "inline-block",
    px: "2",
    py: "1",
    backgroundColor: "#ff5555",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
  }} href={href}>{children}</Link>
)