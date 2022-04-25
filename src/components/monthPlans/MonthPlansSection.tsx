import React from "react";
import MonthPlanPart from "./MonthPlanPart";
import { yogaPlansData } from "../../data";

const MonthPlansSection: React.FC = () => {
  return (
    <div>
      {yogaPlansData.map((plan, i) => {
        return (
          <MonthPlanPart
            key={i}
            month={plan.month}
            price={plan.price}
            preDiscount={plan.preDiscount}
            afterDiscount={plan.afterDiscount}
            discount={plan.discount}
          />
        );
      })}
    </div>
  );
};

export default MonthPlansSection;
