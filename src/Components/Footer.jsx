import React from "react";
import twitter from "../assets/img/png/twitter.png";
import discords from "../assets/img/png/discord1.png";

function Footer() {
  return (
    <>
      <section className=" bg_black_1c py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8">
              <ul className="d-flex justify-content-between ps-0">
                <li>
                  <a
                    className=" ff_ubuntu fw-normal fs_32 text-white opacity-75"
                    href="#"
                  >
                    Tokemonics
                  </a>
                </li>
                <li>
                  <a
                    className=" ff_ubuntu fw-normal fs_32 text-white opacity-75"
                    href="#"
                  >
                    Rarity
                  </a>
                </li>
                <li>
                  <a
                    className=" ff_ubuntu fw-normal fs_32 text-white opacity-75"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    className=" ff_ubuntu fw-normal fs_32 text-white opacity-75"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <article className=" d-flex justify-content-lg-end justify-content-center mt-4 mt-lg-0 gap-5">
                {" "}
                <a href="#">
                  <img src={twitter} alt="social-icon" />
                </a>
                <a href="#">
                  <img src={discords} alt="social-icon" />
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
