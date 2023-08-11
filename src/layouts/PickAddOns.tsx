import React, { useEffect, useState, useMemo } from "react";
import Headings from "../components/Headings";

interface IProps {
  nextStep: (val: number) => void;
  prevStep: (val: number) => void;
  checkedList: Array<object>;
  setCheckedList: (val: object) => void;
  checkedProduct: Array<object>;
  setCheckedProduct: (val: object) => void;
  switchPlan: boolean;
}
export default function PickAddOns({
  prevStep,
  nextStep,
  checkedList,
  setCheckedList,
  checkedProduct,
  setCheckedProduct,
  switchPlan,
}: IProps) {
  const monthlyCardList = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      amount: "1",
      id: 1,
    },
    {
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      amount: "2",
      id: 2,
    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      amount: "2",
      id: 3,
    },
  ];

  const yearlyCardList = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      amount: "1",
      id: 1,
    },
    {
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      amount: "2",
      id: 2,
    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      amount: "2",
      id: 3,
    },
  ];

  const handleCheckbox = (id: any, name: any, price: any) => {
    if (checkedList?.includes(id)) {
      const filteredIds = checkedList.filter(
        (selectedId: any) => selectedId !== id
      );
      const filteredProductIds = checkedProduct.filter(
        (selectedId: any) => selectedId.id !== id
      );
      setCheckedList(filteredIds);
      setCheckedProduct(filteredProductIds);
    } else {
      setCheckedList([...checkedList, id]);
      setCheckedProduct([...checkedProduct, { id, name, price }]);
    }
  };

  const handleNext = () => {
    if (checkedList === null || checkedProduct?.length === 0) {
      return;
    }
    nextStep(3);
  };

  useEffect(() => {
    if (checkedList?.length > 0)
      localStorage.setItem("checkedList", JSON.stringify(checkedList));
  }, [checkedList]);

  useEffect(() => {
    if (checkedProduct?.length > 0)
      localStorage.setItem("checkedProduct", JSON.stringify(checkedProduct));
  }, [checkedProduct]);

  useEffect(() => {
    const checkedListData: any = localStorage.getItem("checkedList");
    const parsedData = JSON?.parse(checkedListData);

    console.log("parsedData", parsedData);
    // setCheckedList((prev: any) => ({ ...prev, ...parsedData }));
    setCheckedList(parsedData ?? []);
  }, [setCheckedList]);

  useEffect(() => {
    const checkedProductData: any = localStorage.getItem("checkedProduct");
    const parsedData = JSON?.parse(checkedProductData);
    setCheckedProduct(parsedData ?? []);
    // setCheckedProduct((prev: any) => ({ ...prev, parsedData }));
  }, [setCheckedProduct]);

  console.log("checkProduct", checkedProduct);
  console.log("checkedList", checkedList);

  return (
    <section className="h-full flex flex-col">
      <Headings
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience"
      />

      <div className="grid gap-4">
        {(switchPlan === false ? monthlyCardList : yearlyCardList).map(
          (picks: any, index) => (
            <label
              key={index}
              className={`flex items-center gap-4 border hover:border-purplish-blue rounded-lg md:p-4 p-3 cursor-pointer ${
                checkedList[index] === picks.id
                  ? "border-purplish-blue"
                  : "border-light-gray"
              }`}
            >
              <input
                type="checkbox"
                // value={picks.values}
                onChange={() => {
                  handleCheckbox(picks.id, picks.title, picks.amount);
                }}
                checked={checkedList?.includes(picks.id)}
                name={picks.id}
                // id=""
                className="h-4 w-4"
                style={{ accentColor: "var(--purplish-blue)" }}
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
                +${picks.amount}
                {switchPlan === false ? "/mo" : "/yr"}
              </div>
            </label>
          )
        )}
      </div>

      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={() => prevStep(1)}
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
