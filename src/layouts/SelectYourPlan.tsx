import React, { useEffect, useState } from "react";
import Headings from "../components/Headings";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

interface IProps {
  nextStep: (val: number) => void;
  prevStep: (val: number) => void;
  monthPlan: any;
  setMonthPlan: any;
  yearPlan: any;
  setYearPlan: any;
  monthlyData: any;
  setMonthlyData: any;
  yearlyData: object | string;
  setYearlyData: any;
  setSwitchPlan: any;
  switchPlan: boolean;
}
export default function SelectYourPlan({
  prevStep,
  nextStep,
  monthPlan,
  setMonthPlan,
  yearPlan,
  setYearPlan,
  monthlyData,
  setMonthlyData,
  yearlyData,
  setYearlyData,
  switchPlan,
  setSwitchPlan,
}: IProps) {
  const monthlyCard = [
    {
      title: "Arcade",
      icons: "/assets/images/icon-arcade.svg",
      monthlyPrice: "9",
      value: 1,
    },
    {
      title: "Advanced",
      icons: "/assets/images/icon-advanced.svg",
      monthlyPrice: "12",
      value: 2,
    },
    {
      title: "Pro",
      icons: "/assets/images/icon-pro.svg",
      monthlyPrice: "15",
      value: 3,
    },
  ];

  const yearlyCard = [
    {
      title: "Arcade",
      icons: "/assets/images/icon-arcade.svg",
      yearlyPrice: "90",
      value: 1,
    },
    {
      title: "Advanced",
      icons: "/assets/images/icon-advanced.svg",
      yearlyPrice: "120",
      value: 2,
    },
    {
      title: "Pro",
      icons: "/assets/images/icon-pro.svg",
      yearlyPrice: "150",
      value: 3,
    },
  ];

  const handleMonthlyPlan = (val: any, i: any) => {
    setMonthPlan(val);

    let _monthlyPlan = [...monthlyCard];
    const monthObj = _monthlyPlan[i];
    setMonthlyData(monthObj);
    localStorage.setItem("monthlyPlan", JSON.stringify(val));
    localStorage.setItem("monthlyPlanData", JSON.stringify(monthObj));
  };

  // console.log("monthlyPlan", monthPlan);

  // console.log('monthPlan', monthPlan)
  // console.log('monthlyData', monthlyData)

  const handleYearlyPlan = (val: any, id: any) => {
    setYearPlan(val);

    let _yearlyPlan = [...yearlyCard];
    const yearObj = _yearlyPlan[id];
    setYearlyData(yearObj);
    localStorage.setItem("yearlyPlan", JSON.stringify(val));
    localStorage.setItem("yearlyPlanData", JSON.stringify(yearObj));
  };

  // console.log("yearly", yearlyData)

  const handleSwitch = (e: any): void => {
    setSwitchPlan(e.target.checked);
    localStorage.setItem("switchPlan", JSON.stringify(e.target.checked));
  };

  useEffect(() => {
    localStorage.setItem("switchPlan", JSON.stringify(switchPlan));
  }, [switchPlan]);

  const handleNext = () => {
    if (monthPlan === null && yearPlan === null) {
      return;
    }

    nextStep(2);
  };

  console.log("---", monthPlan);

  useEffect(() => {
    const monthlyData: any = localStorage.getItem("monthlyPlan");
    const parsedData = JSON.parse(monthlyData);

    setMonthPlan(parsedData);
  }, [setMonthPlan]);

  useEffect(() => {
    const yearlyData: any = localStorage.getItem("yearlyPlan");
    const parsedData = JSON.parse(yearlyData);

    setYearPlan(parsedData);
    // setYearlyData(() => ({
    //   ...parsedData,
    // }));
  }, [setYearPlan]);

  useEffect(() => {
    const switchData: any = localStorage.getItem("switchPlan");
    const parsedData = JSON.parse(switchData);

    setSwitchPlan(parsedData);
  }, [setSwitchPlan]);

  return (
    <section className="h-full flex flex-col">
      <Headings
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />

      <article>
        <div className="grid md:grid-cols-3 gap-4">
          {!switchPlan ? (
            <>
              {monthlyCard.map((plan, index) => (
                <div className="relative" key={index}>
                  <input
                    type="radio"
                    name="plan"
                    id=""
                    value={plan.value}
                    onChange={() => handleMonthlyPlan(plan.value, index)}
                    className="absolute top-0 start-0 bottom-0 end-0 z-20 opacity-0 cursor-pointer"
                  />
                  <Card
                    className={`border border-magnolia hover:bg-magnolia hover:border-marine-blue${
                      monthPlan === plan.value
                        ? "bg-pastel-blue border-marine-blue"
                        : "border-magnolia"
                    }`}
                  >
                    <CardHeader className="justify-between">
                      <Image
                        src={plan.icons}
                        alt={plan.title}
                        width={40}
                        height={40}
                        priority
                        className="rounded-full"
                      />
                    </CardHeader>
                    <CardBody className="px-3">
                      <div className="h-20 flex flex-col">
                        <p className="text-marine-blue text-lg font-ubuntu-bold mt-auto">
                          {plan.title}
                        </p>
                        <p className="text-cool-gray text-sm pt-1">
                          ${plan.monthlyPrice}/mo
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </>
          ) : (
            <>
              {yearlyCard.map((plan, index) => (
                <div className="relative" key={index}>
                  <input
                    type="radio"
                    name="plan"
                    id=""
                    value={plan.value}
                    onChange={() => handleYearlyPlan(plan.value, index)}
                    className="absolute top-0 start-0 bottom-0 end-0 z-20 opacity-0 cursor-pointer"
                  />
                  <Card
                    className={`border border-magnolia hover:bg-magnolia hover:border-marine-blue${
                      yearPlan === plan.value
                        ? "bg-magnolia border-marine-blue"
                        : "border-magnolia bg-white"
                    }`}
                  >
                    <CardHeader className="justify-between">
                      <Image
                        src={plan.icons}
                        alt={plan.title}
                        width={40}
                        height={40}
                        priority
                        className="rounded-full"
                      />
                    </CardHeader>
                    <CardBody className="px-3">
                      <div className="h-20 flex flex-col">
                        <p className="text-marine-blue text-lg font-ubuntu-bold mt-auto">
                          {plan.title}
                        </p>
                        <p className="text-cool-gray text-sm py-1">
                          ${plan.yearlyPrice}/yr
                        </p>
                        <p className="text-xs text-marine-blue font-ubuntu-bold">
                          2 month free
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center items-center gap-4 bg-magnolia p-4 mt-8 rounded-xl">
          <p
            className={`${
              !switchPlan ? "text-marine-blue" : "text-cool-gray"
            } text-sm font-ubuntu-medium`}
          >
            Monthly
          </p>

          <label className="app-switch">
            <input
              checked={switchPlan}
              onChange={handleSwitch}
              type="checkbox"
            />
            <span className="slider round"></span>
          </label>

          <p
            className={`${
              switchPlan ? "text-marine-blue" : "text-cool-gray"
            } text-sm font-ubuntu-medium`}
          >
            Yearly
          </p>
        </div>
      </article>

      <div className="flex justify-between items-center mt-auto fixed md:static bottom-0 start-0 end-0 bg-white p-4 md:p-0">
        <button
          onClick={() => prevStep(0)}
          className="text-cool-gray hover:text-marine-blue font-ubuntu-medium"
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="h-12 w-[120px] text-white text-sm bg-marine-blue font-ubuntu-medium rounded-xl"
        >
          Next Step
        </button>
      </div>
    </section>
  );
}
