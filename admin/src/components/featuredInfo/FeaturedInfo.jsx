import "./featuredInfo.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
      } catch {}
    };
    getIncome();
  }, []);

  console.log(income);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">DA{income[1]?.total}</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
