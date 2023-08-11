import React, { useEffect } from "react";
import Headings from "../components/Headings";

interface IProps {
  nextStep: (val: number) => void;
  prevStep: (val: number) => void;
  changeBtn: (val: number) => void;
  monthlyData: any;
  yearlyData: any;
  switchPlan: boolean;
  setGetMonthlyData: (val: object) => void;
  setGetYearlyData: (val: object) => void;
  setGetSwitchPlan: (val: boolean) => void;
  checkedProduct: any;
  setCheckedProduct: (val: boolean) => void;
}

export default function FinishingUp({
  nextStep,
  prevStep,
  changeBtn,
  monthlyData,
  yearlyData,
  switchPlan,
  setGetMonthlyData,
  setGetYearlyData,
  setGetSwitchPlan,
  checkedProduct,
  setCheckedProduct,
}: IProps) {
  useEffect(() => {
    const monthlyIdData: any = localStorage.getItem("monthlyPlanData");
    const parseIdData = JSON.parse(monthlyIdData);

    setGetMonthlyData(parseIdData);
  }, [setGetMonthlyData]);

  useEffect(() => {
    const yearlyIdData: any = localStorage.getItem("yearlyPlanData");
    const parseIdData = JSON.parse(yearlyIdData);

    setGetYearlyData(parseIdData);
  }, [setGetYearlyData]);

  useEffect(() => {
    const switchData: any = localStorage.getItem("switchPlan");
    const parsedData = JSON.parse(switchData);

    setGetSwitchPlan(parsedData);
  }, [setGetSwitchPlan]);

  useEffect(() => {
    const checkedProductData: any = localStorage.getItem("checkedProduct");
    const parsedData = JSON.parse(checkedProductData);
    setCheckedProduct(parsedData);
  }, [setCheckedProduct]);

  const checkedProductData: any = localStorage.getItem("checkedProduct");
  const parsedData = JSON.parse(checkedProductData);

  const totalProduct = parsedData?.reduce(function (a: any, b: any) {
    return { price: Number(a.price) + Number(b.price) };
  });

  const handleConfirm = () => {
    if (monthlyData === null && yearlyData === null) {
      return;
    }
    if (checkedProduct?.length === 0) {
      return;
    }
    nextStep(4);
    nextStep(0);

    localStorage.setItem("reload", "false");
  };

  return (
    <section className="h-full flex flex-col">
      <Headings
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />
      <article>
        <div className="bg-alabaster rounded-xl md:p-4 p-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-marine-blue font-ubuntu-medium">
                {switchPlan === false ? monthlyData?.title : yearlyData?.title}
              </p>
              <button
                onClick={() => changeBtn(1)}
                className="text-cool-gray text-xs hover:text-purplish-blue underline"
              >
                Change
              </button>
            </div>
            <div className="text-marine-blue font-ubuntu-bold">
              {switchPlan === false
                ? `$${
                    monthlyData?.monthlyPrice === undefined
                      ? 0
                      : monthlyData?.monthlyPrice
                  }/mo`
                : `$${
                    yearlyData?.yearlyPrice === undefined
                      ? 0
                      : yearlyData?.yearlyPrice
                  }/yr`}
            </div>
          </div>
          <hr className="my-3" />
          <div className="grid gap-4">
            {checkedProduct &&
              checkedProduct?.map((product: any, i: any) => (
                <div key={i} className="flex justify-between items-center">
                  <p className="text-cool-gray text-sm font-ubuntu-medium">
                    {product?.name}
                  </p>
                  <p className="text-marine-blue text-sm">
                    +${product?.price} {switchPlan === false ? "/mo" : "/yr"}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-between  md:px-4 px-3 mt-5">
          <p>Total</p>
          <p className="text-purplish-blue text-lg font-ubuntu-bold">
            +
            {(totalProduct?.price +
              (switchPlan === false
                ? Number(monthlyData?.monthlyPrice)
                : Number(yearlyData?.yearlyPrice))) |
              0}
            /mo
          </p>
        </div>
      </article>

      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={() => prevStep(2)}
          className="text-cool-gray hover:text-marine-blue font-ubuntu-medium"
        >
          Go Back
        </button>
        <button
          onClick={handleConfirm}
          className="h-12 w-[120px] text-white text-sm bg-purplish-blue hover:bg-pastel-blue font-ubuntu-medium rounded-xl"
        >
          Confirm
        </button>
      </div>
    </section>
  );
}
