import React, { useEffect } from "react";
import image from "../images/png/gsap.png";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.from(".HeroHeading", {
      xPercent: -150,
      duration: 1,
      stagger: 1,
    });
    gsap.from(".btn_animation", {
      scale: 0,
      opacity: 0,
      duration: 5,
    });
    gsap.from(".image", {
      yPercent: -150,
      duration: 4,
    });
    gsap.fromTo(
      ".sub_para",
      {
        xPercent: -50,
        repeat: 1,
        duration: 3,
        color: "white",
      },
      {
        xPercent: 50,
        duration: 3,
        color: "green",
        repeat: 1,
      }
    );
    gsap.fromTo(
      ".box_1",
      {
        scale: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        repeat: "Infinity",
        yoyo: "true",
      }
    );
  });
  return (
    <div className="bg-black ">
      <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center position-relative">
        <div className="box_1 position-absolute "></div>
        <div className="row align-items-center">
          <div className="col-6">
            <h2 className="text-white HeroHeading">what are cheerfriends ?</h2>
            <p className="text-white text-sm ff_poppins font-normal mt-3 HeroHeading">
              CheerFriends is a collection of 9,000 unique digitally mastered
              NFT's stunting and tumbling on the Ethereum Blockchain as ERC-721.
            </p>
            <p className="text-white text-sm ff_poppins font-normal mt-3 HeroHeading">
              CheerFriends is a collection of 9,000 unique digitally mastered
              NFT's stunting and tumbling on the Ethereum Blockchain as ERC-721.
            </p>
            <button className="bg-danger border-0 text-white px-3 py-1 rounded-2 mt-4 btn_animation">
              Get Start
            </button>
          </div>
          <div className="col-6">
            <div className="image">
              <img
                className="max-w-[400px] h-[300px]  w-full"
                src={image}
                alt="image"
              />
            </div>
          </div>
        </div>
        <p className="pt-4 sub_heading w-50 text-center sub_para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ex
          eaque inventore omnis ad et. Vitae pariatur fugit recusandae enim
          officia debitis culpa omnis molestias asperiores error optio,
          voluptatem labore! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ducimus atque repellendus consequuntur aliquid commodi tempora
          quam delectus fugiat laboriosam nisi nobis possimus officiis, ut
          obcaecati ipsa unde aut incidunt quaerat? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur atque asperiores,
          consequatur optio natus ipsa similique qui in architecto dolorem
          tenetur hic quo modigit accusamus laudantium vero magnam dicta quod.
        </p>
      </div>
    </div>
  );
};

export default Hero;
