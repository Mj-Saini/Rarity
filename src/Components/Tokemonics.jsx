import React from "react";
import { Row } from "react-bootstrap";
import joker from "../assets/img/png/joker.png";
import myCard from "./Data";

function Tokemonics() {
  return (
    <>
      <section
        id="tokemoniecs"
        className="toke_bg overflow-hidden py-md-5 py-4"
      >
        <div className="container">
          <h2 className="text-center ff_space_mono fw-bold fs_91 tokemonies mb-0">
            Tokemonics
          </h2>
          <div className="row">
            <div className="col-12">
              <div className="row mt-md-5 mt-3 row_border mx-md-5 mx-2">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-4 ">
                  <span className="w-25 d-flex flex-column align-items-center pb-3">
                    {" "}
                    <img src={joker} alt="icon" />
                  </span>
                  <article className="w_65 d-flex flex-column justify-content-md-end justify-content-center">
                    <p className=" ff_open fw-normal fs_28 text_blue_e0 mb-0">
                      THE NAME TOKEN (TNAT)
                    </p>
                    <p className=" ff_open fw-normal fs_30 text-white-50 translate-middle-y mt-2 mb-0">
                      0.332627{" "}
                      <span className="fs_20 text_green_84 ps-sm-5">
                        {" "}
                        (+17.4%)
                      </span>
                    </p>
                  </article>
                </div>
                <div className="col-md-3 col_top_bottom_border">
                  <article className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50">
                      RANK
                    </p>
                    <p className=" ff_open fw-normal fs_22 text-white-50">0</p>
                  </article>
                </div>
                <div className="col-md-6 col_border">
                  <article className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50">
                      MARKET CAP
                    </p>
                    <p className=" ff_open fw-normal fs_25 text-white-50">
                      $? <span className="fs_18">USD</span>
                    </p>
                  </article>
                </div>
                <div className="col-md-3 col_top_bottom_border">
                  <article className=" d-flex flex-column align-items-center">
                    <p className=" ff_open fw-normal fs_22 text-white-50">
                      VOLUME
                    </p>
                    <p className=" ff_open fw-normal fs_22 text-white-50 text-center text-lg-start">
                      $12.65 K <span className="fs_18">USD</span>
                    </p>
                  </article>
                </div>
                <p className="py-1 ff_open fw-normal fs_22 text_blue_e0 text-center mb-0">
                  <i> Powered by CoinMarketCap</i>
                </p>
              </div>
            </div>
          </div>
          <Row className="mt-5 pt-4 mx-md-5 mx-2 justify-content-between">
            {myCard.map((data) => {
              return (
                <div
                  data-aos="fade-down-right"
                  className="col-xxl-3 col-lg-4 ps-0 mt-5"
                >
                  <article className="ps-sm-4 team_gradient pe-lg-5 pe-sm-4 px-3 pb-5 pt-4 h-100 position-relative overflow-hidden">
                    <div className="overlay "></div>
                    <article className="d-flex justify-content-between align-items-center">
                      <h2 className=" ff_source_pro fw-bolder fs_40 text-white">
                        {data.heading}
                        <span className="d-block">{data.span}</span>
                      </h2>
                      <h2 className="ff_source_pro fw-bolder fs_48 text-white">
                        {data.heading2}
                      </h2>
                    </article>
                    <p className=" ff_source_pro fw-semibold fs_23 text-white-50 mt-3 mb-0">
                      {data.para}
                    </p>
                  </article>
                </div>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
}

export default Tokemonics;
