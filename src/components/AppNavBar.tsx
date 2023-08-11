import React, { useEffect } from "react";

interface IProps {
  step: number;
  setStep: (value: number) => void;
  monthPlan: any;
  yearPlan: any;
  checkedList: Array<object>;
  checkedProduct: Array<object>;
}

export default function AppNavBar({
  setStep,
  step,
  monthPlan,
  yearPlan,
  checkedList,
  checkedProduct,
}: IProps) {
  const linksList = [
    {
      title: "YOUR INFO",
      stepIndex: 0,
    },
    {
      title: "SELECT PLAN",
      stepIndex: 1,
    },
    {
      title: "ADD-ONS",
      stepIndex: 2,
    },
    {
      title: "SUMMARY",
      stepIndex: 3,
    },
  ];

  const handleStepper = (val: number) => {
    setStep(val);

    localStorage.setItem("navigation", JSON.stringify(val));
  };

  useEffect(() => {
    const navId: any = localStorage.getItem("navigation");
    const parsedNavId = JSON.parse(navId);
    setStep(parsedNavId ? parsedNavId : 0);
  }, [setStep]);

  return (
    <nav className='h-[175px] md:h-full bg-[url("/assets/images/bg-sidebar-mobile.svg")] md:bg-[url("/assets/images/bg-sidebar-desktop.svg")] bg-no-repeat bg-cover p-10 md:rounded-3xl'>
      <div className="flex justify-center md:flex-col gap-8 md:gap-10">
        {linksList.map((linksContent: any, index: number) => (
          <div
            key={index}
            role="button"
            tabIndex={index}
            onClick={() => handleStepper(linksContent.stepIndex)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className={`w-8 md:w-10 h-8 md:h-10 grid place-content-center border border-light-blue ${
                step === linksContent.stepIndex
                  ? "bg-light-blue"
                  : "text-light-blue"
              } font-ubuntu-medium rounded-full`}
            >
              {index + 1}
            </div>
            <div className="hidden md:block">
              <p className="text-light-gray text-xs">STEP {index + 1}</p>
              <p className="text-alabaster font-ubuntu-medium">
                {linksContent.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
