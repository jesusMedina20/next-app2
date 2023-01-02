import Link from "next/link";
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
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>my first app with next js 13</title>
      </head>
      <body>
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

        {children}
      </body>
    </html>
  );
}
