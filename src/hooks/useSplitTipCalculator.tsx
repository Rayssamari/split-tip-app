import React, { useState } from "react";

export const useSplitTipCalculator = () => {
  const [bill, setBill] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [tipCustom, setTipCustom] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);



  let tipPerson: number = 0;
  let totalBillPerPerson: number = 0;

  function tipAmountPerPerson () {
      if (numberOfPeople > 0 && tipPercent > 0) {
        tipPerson = ((bill * tipPercent) / 100) / numberOfPeople;
        return tipPerson.toFixed(2);
      }
      else if (numberOfPeople > 0 && tipCustom > 0) {
        tipPerson = ((bill * tipCustom) / 100) / numberOfPeople;
        return tipPerson.toFixed(2);
      } else {
        return tipPerson.toFixed(2);
      }
  }

  function tipAmountValuePerPerson() {
    if (numberOfPeople > 0 && tipPercent > 0) {
      tipPerson = ((bill * tipPercent) / 100);
      totalBillPerPerson = (bill + tipPerson)/numberOfPeople;
      return totalBillPerPerson.toFixed(2);
    }
    else if (numberOfPeople > 0 && tipCustom > 0) {
      tipPerson = ((bill * tipCustom) / 100);
      totalBillPerPerson = (bill + tipPerson)/numberOfPeople;
      return totalBillPerPerson.toFixed(2);
    } else {
      return totalBillPerPerson.toFixed(2);
    }
  }

  function resetSlipTipApp() {
    setBill(0)
    setTipPercent(0);
    setTipCustom(0);
    setNumberOfPeople(0);
    tipAmountPerPerson();
    tipAmountValuePerPerson();
  }

  return {
    bill,
    setBill,
    tipPercent,
    setTipPercent,
    tipCustom,
    setTipCustom,
    numberOfPeople,
    setNumberOfPeople,
    tipAmountPerPerson,
    tipAmountValuePerPerson,
    resetSlipTipApp
  };
}

