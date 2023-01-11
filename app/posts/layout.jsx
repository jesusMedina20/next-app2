import React from "react";
import Counter from "./Counter";

export default function PostLayout({ children }) {
  return (
    <div>
      <small> home &bull; post </small>
      <div>{children}</div>
    </div>
  );
}
