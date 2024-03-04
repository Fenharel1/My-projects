import { useEffect } from "react";
import { MealOfDay } from "../components/MealOfDay";

export const Dashboard = () => {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-row">
      <div className="w-full">
        <div>
          <h2>What do you like to cook today?</h2>
          <div>
            <div>
              cartas
            </div>
          </div>
        </div>

      </div>
      {/* <div className="w-[40rem] py-4 px-20 overflow-x-visible overflow-y-auto"> */}
      <div className="w-[45rem] h-full flex items-center">

        <MealOfDay></MealOfDay>
      </div>
      {/* </div> */}
    </div>
  );
};
