import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 1) {
    return <h2>viewing feature for {params[0]}</h2>;
  } else if (params.length === 2) {
    return (
      <h2>
        Viewing feature for {params[0]} concept for {params[1]}
      </h2>
    );
  } else if (params.length === 3) {
    return (
      <h2>
        Viewing feature for {params[0]} concept for {params[1]} and example for{" "}
        {params[0]}
      </h2>
    );
  }
  return <div>This is doc page</div>;
};

export default Doc;
