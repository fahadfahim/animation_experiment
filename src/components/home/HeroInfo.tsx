import { Button, Typography } from 'antd'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
const { Title, Text } = Typography;
const HeroInfo = () => {
    return (
        <>  <Text className="flex items-center justify-around !text-[#A2C6BE] border border-[#403333]  px-4 py-2 max-w-[268px] cursor-pointer rounded-full">
            Elevate your earning journey{" "}
            <AiOutlineArrowRight
                style={{
                    color: "#18f6b4",
                    marginTop: "4px",
                    marginLeft: "8px",
                    fontSize: "20px",
                }}
            />
        </Text>
            <Title className="!text-[#FBFBFB] !text-[48px] font-bold !leading-[60px] text-center !mt-2">
                Increase your earnings by <br /> bringing in fresh players
            </Title>
            <Text className="!text-[#B1A495] !text-[20px] !leading-[32px] text-center mb-10">
                Sign Up, bring in new players to Localbet, and <br /> receive a
                commission of 25-40%.
            </Text>
            <Button className="bg-[#F59115] py-4 px-8 text-[#000] h-auto border-none hover:!text-[#000] !text-[18px] !rounded-lg font-semibold">
                Join Us Now
            </Button></>
    )
}

export default HeroInfo