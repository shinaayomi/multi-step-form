import React from "react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";
import { Avatar, Card, CardBody, CardHeader, Switch } from "@nextui-org/react";

export default function SelectYourPlan() {
  const listCards = [
    {
      title: "Arcade",
      icons: "/assets/images/icon-arcade.svg",
      price: "9",
    },
    {
      title: "Advanced",
      icons: "/assets/images/icon-advanced.svg",
      price: "12",
    },
    {
      title: "Pro",
      icons: "/assets/images/icon-pro.svg",
      price: "15",
    },
  ];

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
              <Card
                className="border border-magnolia hover:bg-magnolia hover:border-marine-blue"
                key={index}
              >
                <CardHeader className="justify-between">
                  <Avatar radius="full" size="md" src={plan.icons} />
                </CardHeader>
                <CardBody className="px-3 mt-10">
                  <p className="text-marine-blue text-lg font-ubuntu-bold">
                    {plan.title}
                  </p>
                  <p className="text-cool-gray text-xs pt-1">${plan.price}/mo</p>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 bg-magnolia p-4 mt-5 rounded-xl">
            <p className="text-marine-blue text-sm font-ubuntu-medium">
              Monthly
            </p>
            <Switch defaultSelected color={"primary"} aria-label="Automatic updates" />
            <label className="switch">
              <input type="checkbox" />
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
