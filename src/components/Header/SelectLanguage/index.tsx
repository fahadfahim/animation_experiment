"use client";
import { Select, Typography } from "antd";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import CountryData from "../../../temp/country.json";

const SelectLanguage = () => {
  // const { isHeaderTheme } = useAppSelector((state) => state.theme);
  const { country } = CountryData;

  const handleSelectCurrency = (value: string) => {
    console.log(`selected currency: ${value}`);
  };

  return (
    <Select
      showSearch
      defaultValue={"BD"}
      style={{ width: 90, background: "transparent" }}
      className="select-language ml-2"
      onChange={handleSelectCurrency}
      popupClassName="sof-select-popup"
      options={country?.map((item: any) => {
        return {
          label: (
            <div className="country-item flex items-center gap-2">
              <div className="w-[15px] h-[15px]">
                <Image
                  src={item?.flag}
                  alt="Flag"
                  className="w-full h-full"
                  width={20}
                  height={20}
                />
              </div>
              <Typography.Text
              // className={`$ `}
              >
                {item?.code}
              </Typography.Text>
            </div>
          ),
          value: `${item?.code}`,
          key: `${item?.code}`,
        };
      })}
      suffixIcon={<IoIosArrowDown className={`text-base mt-2`} />}
    />
  );
};

export default SelectLanguage;
