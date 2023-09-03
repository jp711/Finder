import React from "react";
import { ReactComponent as CreditCardIcon } from "./icons/creditCard.svg";
import { ReactComponent as HomeLoanIcon } from "./icons/homeLoans.svg";
import { ReactComponent as HealthInsuranceIcon } from "./icons/HealthInsurance.svg";
import { ReactComponent as CarInsuranceIcon } from "./icons/CarInsurance.svg";
import { ReactComponent as HighInterestSavingsIcon } from "./icons/High-InterestSavings.svg";
import { ReactComponent as ElectricityGasIcon } from "./icons/Electricity&Gas.svg";
import { ReactComponent as PersonalLoansIcon } from "./icons/PersonalLoans.svg";
import { ReactComponent as MobilePlansIcon } from "./icons/MobilePlans.svg";
import { ReactComponent as BroadbandNBNIcon } from "./icons/Broadband&NBN.svg";
import { ReactComponent as SuperFundsIcon } from "./icons/SuperFunds.svg";
import { ReactComponent as ShareTradingIcon } from "./icons/ShareTrading.svg";
import { ReactComponent as LifeInsuranceIcon } from "./icons/LifeInsurance.svg";
import { ReactComponent as TravelInsuranceIcon } from "./icons/TravelInsurance.svg";
import { ReactComponent as TravelDealsIcon } from "./icons/TravelDeals.svg";
import { ReactComponent as CryptoIcon } from "./icons/crypto.svg";
import { ReactComponent as PetInsuranceIcon } from "./icons/PetInsurance.svg";
import { ReactComponent as MoneyTransfersIcon } from "./icons/MoneyTransfers.svg";
import { ReactComponent as ShoppingDealsIcon } from "./icons/ShoppingDeals.svg";
import { ReactComponent as StreamingIcon } from "./icons/Streaming.svg";
import { ReactComponent as ShortTermLoansIcon } from "./icons/ShortTermLoans.svg";

interface Item {
  title: string;
  id: string;
  svg: React.ReactElement;
}

export const ITEMS: Item[] = [
  {
    title: "Credit Cards",
    id: "credit-cards",
    svg: <CreditCardIcon />,
  },
  {
    title: "Home Loans",
    id: "home-loans",
    svg: <HomeLoanIcon />,
  },
  {
    title: "Health Insurance",
    id: "health-insurance",
    svg: <HealthInsuranceIcon />,
  },
  {
    title: "Car Insurance",
    id: "car-insurance",
    svg: <CarInsuranceIcon />,
  },
  {
    title: "High-Interest Savings",
    id: "high-interest-savings",
    svg: <HighInterestSavingsIcon />,
  },
  {
    title: "Electricity & Gas",
    id: "electricity-gas",
    svg: <ElectricityGasIcon />,
  },
  {
    title: "Personal Loans",
    id: "personal-loans",
    svg: <PersonalLoansIcon />,
  },
  {
    title: "Mobile Plans",
    id: "mobile-plans",
    svg: <MobilePlansIcon />,
  },
  {
    title: "Broadband & NBN",
    id: "broadband-nbn",
    svg: <BroadbandNBNIcon />,
  },
  {
    title: "Super Funds",
    id: "super-funds",
    svg: <SuperFundsIcon />,
  },
  {
    title: "Share Trading",
    id: "share-trading",
    svg: <ShareTradingIcon />,
  },
  {
    title: "Life Insurance",
    id: "life-insurance",
    svg: <LifeInsuranceIcon />,
  },
  {
    title: "Home Insurance",
    id: "home-insurance",
    svg: <HomeLoanIcon />,
  },
  {
    title: "Travel Insurance",
    id: "travel-insurance",
    svg: <TravelInsuranceIcon />,
  },
  {
    title: "Travel Deals",
    id: "travel-deals",
    svg: <TravelDealsIcon />,
  },
  {
    title: "Crypto",
    id: "crypto",
    svg: <CryptoIcon />,
  },
  {
    title: "Car Loans",
    id: "car-loans",
    svg: <CarInsuranceIcon />,
  },
  {
    title: "Pet Insurance",
    id: "pet-insurance",
    svg: <PetInsuranceIcon />,
  },
  {
    title: "Transaction Accounts",
    id: "transaction-accounts",
    svg: <HighInterestSavingsIcon />,
  },
  {
    title: "Money Transfers",
    id: "money-transfers",
    svg: <MoneyTransfersIcon />,
  },
  {
    title: "Shopping Deals",
    id: "shopping-deals",
    svg: <ShoppingDealsIcon />,
  },
  {
    title: "Streaming",
    id: "streaming",
    svg: <StreamingIcon />,
  },
  {
    title: "Business Insurance",
    id: "business-insurance",
    svg: <PersonalLoansIcon />,
  },
  {
    title: "Short Term Loans",
    id: "short-term-loans",
    svg: <ShortTermLoansIcon />,
  },
];
