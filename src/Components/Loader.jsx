import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
function Loader() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      {" "}
      <Container>
        {" "}
        {loading ? (
          <div id="root">
            {" "}
            <div class="loader-wrapper">
              <div class="loader"></div>{" "}
            </div>{" "}
          </div>
        ) : (
          <></>
        )}{" "}
      </Container>{" "}
    </>
  );
}
export default Loader;
