import React from "react";
import { Carousel, Row } from "react-bootstrap";
import RandomCards from "./Random";
import Select from "react-select";

function Rarity() {
  const style = {
    control: (base) => ({
      ...base,
      border: "0 !important",
      boxShadow: "0 !important",
      "&:hover": { border: "0 !important" },
    }),
  };
  const Parcel = [
    { label: "   Background" },
    { label: " Skin" },
    { label: "Clothes" },
    { label: "Eyes" },
    { label: "Hats" },
  ];
  return (
    <>
      <section
        id="rarity"
        className="rarity_sec_bg py-4 py-lg-5 overflow-hidden"
      >
        <div className="container px-lg-5">
          <h2 className=" ff_space_mono fw-bold fs_91 tokemonies text-center">
            Rarity
          </h2>
          <article className="d-flex justify-content-between px-4 w-100 my-5 d-none d-xxl-flex">
            <span className="">
              <a
                className=" ff_fira_code fw-bold fs_29 text-center rarity_component px-4 py-2 d-inline-block"
                href="#"
              >
                Background
              </a>
            </span>
            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-center rarity_component px-4 py-2"
                href="#"
              >
                Skin
              </a>
            </span>
            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-center rarity_component px-4 py-2"
                href="#"
              >
                Clothes
              </a>
            </span>
            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-center rarity_component px-4 py-2"
                href="#"
              >
                Eyes
              </a>
            </span>
            <span className="">
              <a
                className="d-inline-block ff_fira_code fw-bold fs_29 text-center rarity_component px-4 py-2"
                href="#"
              >
                Hats
              </a>
            </span>
          </article>
          <label
            className="w-100 me-2 mb-4 z_index d-flex align-items-center d-xxl-none my-5"
            htmlFor="To"
          >
            {" "}
            <Select
              placeholder="Background"
              className="w-75 ff_fira_code fw-bold fs_29 bg-transparent border-0 "
              options={Parcel}
              styles={style}
            />
          </label>{" "}
          <div className="bottom_border d-block"></div>
          <Row className=" justify-content-between ">
            {RandomCards.map((cards) => {
              return (
                <div className="col-lg-3 col-sm-6 mt-5 px-0 px-xxl-5">
                  <div className="px-sm-4 px-xl-2 pt-4">
                    <article className="d-flex flex-column align-items-center random_card_bg px-4 py-5 py-sm-4 py-xl-5">
                      {" "}
                      <img className=" z_index" src={cards.Image} alt="img" />
                      <h2 className=" ff_ubuntu fw-bold fs_29 text-center text-white mt-3 pt-2">
                        {cards.head}{" "}
                        <span className="d-block">{cards.span}</span>
                      </h2>
                      <span className="random_btn py-1 px-4 mt-3 mb-5">
                        <a
                          className=" ff_source_pro fw-bolder fs_23 text-center text_black_2d"
                          href="#"
                        >
                          {cards.num}
                        </a>
                      </span>
                    </article>
                  </div>
                </div>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
}

export default Rarity;
