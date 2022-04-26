import React from "react";
import MonthPlanPart from "./MonthPlanPart";
import { yogaPlansData } from "../../data";

const MonthPlansSection: React.FC = () => (
  <div>
    {yogaPlansData.map(
      ({ month, price, preDiscount, afterDiscount, discount }, i) => (
        <MonthPlanPart
          key={i}
          month={month}
          price={price}
          preDiscount={preDiscount}
          afterDiscount={afterDiscount}
          discount={discount}
        />
      )
    )}
  </div>
);

export default MonthPlansSection;
