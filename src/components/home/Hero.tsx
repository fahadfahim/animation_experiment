"use client";
import { Button, Typography } from "antd";
import Image from "next/image";
import "./hero.scss";
import { Circle, MoneyWings } from "../assets/Assets";
import HeroInfo from "./HeroInfo";
const Hero = () => {
  return (
    <div className="md:block sm:hidden relative w-[662px] h-[662px] rounded-full left-[-20px]">
      <div className="img-svg md:flex items-center justify-center hidden">
        <Circle />
      </div>
      <div className="hero-info flex items-center justify-center flex-col absolute top-0">
        <Image
          src="/top-1.png"
          alt="person"
          width={60}
          height={60}
          className="top1-img"
        />
        <Image
          src="/top-2.png"
          alt="person"
          width={69}
          height={69}
          className="top2-img"
        />


        <HeroInfo />

        <Image
          src="/left-1.png"
          alt="left img"
          width={68}
          height={68}
          className="bl-img-1"
        />

        <Image
          src="/bl-1.png"
          alt="left img"
          width={48}
          height={48}
          className="bl-img-2"
        />
        <Image
          src="/br-1.png"
          alt="left img"
          width={64}
          height={64}
          className="bl-img-3"
        />
        <div className="br-img-1">
          <MoneyWings />
        </div>

      </div>
    </div>
  );
};

export default Hero;
