import Link from "next/link";
import React from "react";
const links = [
  {
    label: "home",
    route: "/",
  },
  {
    label: "about",
    route: "/about",
  },
];

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
