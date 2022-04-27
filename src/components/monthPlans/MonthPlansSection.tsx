import React from "react";
import MonthPlanPart from "./MonthPlanPart";
import { yogaPlansData } from "data";

const MonthPlansSection: React.FC = () => (
  <>
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
  </>
);

export default MonthPlansSection;
