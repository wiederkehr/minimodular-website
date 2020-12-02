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
      Follow our research and development on <NotificationLink href="https://instagram.com/minimodular">Instagram<img
          sx={{marginLeft: 2}}
          src={"/launch-app.svg"}
          height="16px"
          alt="Minimodules Logo"
        /></NotificationLink>
  </p>
  )
  
export default Notification;

interface NotificationLinkProps {
  children?: React.ReactNode;
  href: string
}

const NotificationLink = (props: NotificationLinkProps) => (
  <Link target="blank" sx={{
    display: "inline-flex",
    alignItems: "center",
    px: "2",
    py: "1",
    backgroundColor: "#ff5555",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#000",
    }
  }} href={props.href}>{props.children}</Link>
)