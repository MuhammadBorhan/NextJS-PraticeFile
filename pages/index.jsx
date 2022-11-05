import Link from "next/link";

const Index = () => {
  document.title = "NextJS FirstProject";
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        Welcome To Home Page
      </div>
      <div
        style={{
          position: "absolute",
          left: "45%",
          bottom: "40%",
          display: "flex",
          gap: "20px",
          fontSize: "1.5rem",
          textDecoration: "underline",
        }}
      >
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
};

export default Index;
