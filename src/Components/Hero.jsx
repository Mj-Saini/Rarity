import React from "react";
import { Row } from "react-bootstrap";
import bus from "../assets/img/webp/bus.webp";
import twiter from "../assets/img/png/twiter.png";
import discord from "../assets/img/png/discord.png";
import shadow from "../assets/img/png/pink.png";

function Hero() {
  return (
    <>
      <section className="hero_bg overflow-hidden">
        <div className="container">
          <Row className="py-5">
            <div className="col-lg-7">
              <article className="z_index">
                <h1 className=" ff_source_pro fw-bolder fs_82 text-center text-sm-start ">
                  LOREM IPSUM
                </h1>
                <h3 className=" ff_source_pro fw-semibold fs_54 text-center text-sm-start pt-3">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
                <p className=" ff_source_pro fw_light fs_33 text-white-50 text-center text-sm-start pt-3">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  <span className="d-xxl-block">
                    {" "}
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </span>{" "}
                  aliqua.
                </p>
                <span className="d-flex gap-sm-5 gap-3 my-5 pt-xl-3 justify-content-center justify-content-sm-start ">
                  <a
                    className="btn_btn btn px-sm-4 py-3 text-white fw_500 ff_ubuntu text-white opacity-75 fs_32 "
                    href="#"
                  >
                    <img
                      className="social_icon_size me-sm-3 me-2"
                      src={twiter}
                      alt="twiter"
                    />
                    Twitter
                  </a>
                  <a
                    className="btn btn_btn1 position-relative ms-xl-5 px-sm-4 py-3 text-white fw_500 ff_ubuntu text-white opacity-75 fs_32 "
                    href="#"
                  >
                    <img
                      className="social_icon_size me-sm-4 me-2"
                      src={discord}
                      alt="twiter"
                    />
                    Discord
                  </a>
                </span>{" "}
              </article>
            </div>
            <div className="col-lg-5 position-relative mt-5 mt-lg-0">
              <span className="shadow_box mt-5 ms-lg-5"></span>
              <img
                data-aos=""
                className="w-100 ps-lg-5 z_index1  "
                src={bus}
                alt="img"
              />
            </div>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Hero;
