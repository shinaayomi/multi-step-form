import React, { useState } from "react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function SelectYourPlan() {
  const [pickPlan, setPickPlan] = useState("");
  const [switchPlan, setSwitchPlan] = useState(false);

  const listCards = [
    {
      title: "Arcade",
      icons: "/assets/images/icon-arcade.svg",
      monthlyPrice: "9",
      yearlyPrice: "90"
    },
    {
      title: "Advanced",
      icons: "/assets/images/icon-advanced.svg",
      monthlyPrice: "12",
      yearlyPrice: "120",
    },
    {
      title: "Pro",
      icons: "/assets/images/icon-pro.svg",
      monthlyPrice: "15",
      yearlyPrice: "150",
    },
  ];

  const handleRadioBtn = (param: any) => {
    setPickPlan(param);
  };

  const handleSwitch = (e: any) => {
    setSwitchPlan(e.target.checked);
  };

  return (
    <PagesLayout>
      <section className="h-full flex flex-col">
        <Headings
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing."
        />

        <article>
          <div className="grid md:grid-cols-3 gap-4">
            {listCards.map((plan, index) => (
              <div className="relative" key={index}>
                <input
                  type="radio"
                  name="plan"
                  id=""
                  value={pickPlan}
                  onChange={() => handleRadioBtn(plan.title)}
                  className="absolute top-0 start-0 bottom-0 end-0 z-20 opacity-0 cursor-pointer"
                />
                <Card
                  className={`border border-magnolia hover:bg-magnolia hover:border-marine-blue${pickPlan === plan.title
                    ? "bg-magnolia border-marine-blue"
                    : "border-magnolia"
                    }`}
                >
                  <CardHeader className="justify-between">
                    <Avatar radius="full" size="md" src={plan.icons} />
                  </CardHeader>
                  <CardBody className="px-3">
                    <div className="h-20 flex flex-col">
                      <p className="text-marine-blue text-lg font-ubuntu-bold mt-auto">
                        {plan.title}
                      </p>

                      {!switchPlan ? (
                        <p className="text-cool-gray text-sm pt-1">
                          ${plan.monthlyPrice}/mo
                        </p>
                      ) : (
                        <div>
                          <p className="text-cool-gray text-sm py-1">
                            ${plan.yearlyPrice}/yr
                          </p>
                          <p className="text-xs text-marine-blue font-ubuntu-bold">
                            2 month free
                          </p>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 bg-magnolia p-4 mt-8 rounded-xl">
            <p className="text-marine-blue text-sm font-ubuntu-medium">
              Monthly
            </p>

            <label className="app-switch">
              <input checked={switchPlan} onChange={handleSwitch} type="checkbox" />
              <span className="slider round"></span>
            </label>

            <p className="text-cool-gray text-sm font-ubuntu-medium">Yearly</p>
          </div>
        </article>

        <div className="flex justify-between items-center mt-auto">
          <button className="text-cool-gray hover:text-marine-blue font-ubuntu-medium">
            Go Back
          </button>
          <button className="h-12 w-[120px] text-white text-sm bg-marine-blue font-ubuntu-medium rounded-xl">
            Next Step
          </button>
        </div>
      </section>
    </PagesLayout>
  );
}
