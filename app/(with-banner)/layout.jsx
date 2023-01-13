export default function layout({ children }) {
  return (
    <div>
      <marquee style={{ background: `white`, color: `blue` }}>
        esto es un ejemplo
      </marquee>
      {children}
    </div>
  );
}
