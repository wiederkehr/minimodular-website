/** @jsx jsx */
import { jsx } from "theme-ui";
import MenuItemLink from "./MenuItemLink";

interface MenuItemProps {
  children?: React.ReactNode;
  href: string;
  last?: boolean;
}

const MenuItem = (props: MenuItemProps) => (
  <li sx={{
    display: "inline-block",
  }}
  >
    <MenuItemLink href={props.href}>
      {props.children}
    </MenuItemLink>
  </li>
);

export default MenuItem;