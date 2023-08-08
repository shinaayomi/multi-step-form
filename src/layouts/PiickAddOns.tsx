import React from "react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";

export default function PiickAddOns() {
  const [isSelected, setIsSelected] = React.useState({
    onlineService: "",
    largeStorage: "",
    customizableProfile: "",

  });

  const cardList = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      amount: "1",
      values: isSelected.onlineService,

    },
    {
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      amount: "2",
      values: isSelected.largeStorage,

    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      amount: "2",
      values: isSelected.customizableProfile,

    },
  ];

  const handleCheckbox = (e: any) => {
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setIsSelected({
      ...isSelected, [e.target.name]: value,
    });

  }

  return (
    <PagesLayout>
      <section className="h-full flex flex-col">
        <Headings
          title="Pick add-ons"
          subtitle="Add-ons help enhance your gaming experience"
        />

        <div className="grid gap-4">
          {cardList.map((picks, index) => (
            <label
              key={index}
              className={`flex items-center gap-4 border hover:border-purplish-blue rounded-lg md:p-4 p-3 cursor-pointer ${picks.values === "" ? "border-purplish-blue" : "border-light-gray"}`}
            >
              <input
                type="checkbox"
                value={picks.values}
                onChange={handleCheckbox}
                name={picks.values}
                id=""
                className="h-4 w-4"
                style={{ accentColor: "var(--purplish-blue)" }}
                checked={picks.values === "" ? true : false}
              />
              <div className="flex-1">
                <p className="text-marine-blue font-ubuntu-bold">
                  {picks.title}
                </p>
                <p className="text-cool-gray text-xs font-ubuntu-medium">
                  {picks.subtitle}
                </p>
              </div>
              <div className="text-purplish-blue text-xs font-ubuntu-medium">
                +${picks.amount}/mo
              </div>
            </label>
          ))}
        </div>

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
