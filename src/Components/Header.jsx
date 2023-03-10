import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      <section className="">
        <nav className="pt-3 nav_bg">
          <Container>
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              className=" d-flex justify-content-between align-items-center w-100 "
            >
              <a
                className="ff_source_3 fw-bold fs_59 text_clr_cff z_index1"
                href="#"
              >
                THE LOGO
              </a>{" "}
              <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
                <li>
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke me-xxl-5 pe-xxl-3"
                    href="#tokemoniecs"
                  >
                    Tokemonics
                  </a>
                </li>
                <li>
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke me-xxl-5 pe-xxl-3"
                    href="#rarity"
                  >
                    Rarity
                  </a>
                </li>
                <li>
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke me-xxl-5 pe-xxl-3"
                    href="#about"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke me-xxl-5 pe-xxl-3"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <span className="d-flex gap-3">
                  <a
                    className="nav_btn px-4 py-2 text-white fw_500 ff_ubuntu text-white opacity-75 fs_32 me-xxl-5 pe-xxl-3"
                    href="#"
                  >
                    Roadmap
                  </a>
                </span>{" "}
              </ul>
              <label
                className="menu_formatting d-flex  justify-content-end d-lg-none"
                for="check"
              >
                <input
                  onClick={() => setNavShow(!navShow)}
                  className="menu bg-black "
                  type="checkbox"
                  id="check"
                />
                <span className="d-flex justify-content-between bg-transparent">
                  {" "}
                  <span className="span_nav12"></span>{" "}
                  <span className="span_nav11"></span>{" "}
                </span>{" "}
                <asapn className="d-flex justify-content-between bg-transparent">
                  <span className="span_nav01"></span>
                  <span className="span_nav00"></span>{" "}
                </asapn>{" "}
                <span className="d-flex justify-content-between bg-transparent m-0">
                  <span className="span_nav12 m-0"></span>
                  <span className="span_nav11 m-0"></span>{" "}
                </span>
              </label>{" "}
            </div>
            <div className="d-lg-none d-flex ">
              <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3 gap-md-5 pt-3 transition">
                  <li>
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#"
                    >
                      Tokemonics
                    </a>
                  </li>
                  <li>
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#shop"
                    >
                      Rarity
                    </a>
                  </li>
                  <li>
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#about"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      class="ff_ubuntu text-white opacity-75 fs_32 fw-normal z_index text_stroke "
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>
                  <span className="d-flex gap-3">
                    <a
                      className="nav_btn px-4 py-2 text-white fw_500 ff_ubuntu text-white opacity-75 fs_32 "
                      href="#"
                    >
                      Roadmap
                    </a>
                  </span>{" "}
                  {/* <span>
                    <a href="#">
                      {" "}
                      <img
                        onClick={() => setNavShow(false)}
                        className="close_size"
                        src={close}
                        alt="close"
                      />
                    </a>
                  </span> */}
                </ul>
              </div>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
}

export default Header;
