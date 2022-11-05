import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        lineHeight: "12px",
      }}
    >
      <h1>Error...!!!</h1>
      <h1 style={{ color: "red", fontWeight: "bold" }}>404</h1>
      <p>Page Not Found</p>
      <Link href="/" style={{ fontWeight: "bold" }}>
        Click For Go To Home
      </Link>
    </div>
  );
};

export default PageNotFound;
