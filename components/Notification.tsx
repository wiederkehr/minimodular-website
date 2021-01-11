/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import React from "react";

const Notification: React.FC = () => (
  <p sx={{
    backgroundColor: "surface",
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: 0,
    px: 3,
    py: [3, 2],
    textAlign: "center",
  }}>
      Follow our research and development on <NotificationLink href="https://instagram.com/minimodular">Instagram<img
      sx={{
        marginLeft: 2,
      }}
        src={"/launch-app.svg"}
        height="16px"
        alt="External Link Icon"
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
    alignItems: "center",
    backgroundColor: "text",
    borderRadius: "4px",
    color: "surface",
    display: ["flex", "inline-flex"],
    justifyContent: "center",
    mt: 2,
    mb: [0, 2],
    px: 2,
    py: 1,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "primary",
    }
  }} href={props.href}>{props.children}</Link>
)