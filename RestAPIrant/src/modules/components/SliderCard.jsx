import { useRef } from "react";
import { CardRecipe } from "./CardRecipe";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const SliderCard = ({ recipes = [] }) => {
  const sliderRef = useRef(null);
  const sliderSizeRef = useRef(null);
  const elementRef = useRef(null);

  let page = 0;

  const scrollNext = () => {
    if (!sliderRef.current) return;
    const n = Math.floor(
      Math.ceil(sliderRef.current.clientWidth / (18.75 * 16)) / 2
    );
    page = Math.min(page + n, recipes.length - 1);
    sliderRef.current.scrollLeft = page * (18.75 * 16);
  };

  const scrollBack = () => {
    if (!sliderRef.current) return;
    const n = Math.floor(
      Math.ceil(sliderRef.current.clientWidth / (18.75 * 16)) / 2
    );
    page = Math.max(0, page - n);
    sliderRef.current.scrollLeft = page * (18.75 * 16);
  };

  const showHideButtons = (show) => {
    if (elementRef.current) {
      const hide =
        sliderSizeRef.current.clientWidth <= elementRef.current.clientWidth ||
        !show;
      const buttons = elementRef.current.querySelectorAll("& > button");

      buttons[0].style.opacity = !hide ? "0.7" : "0";
      buttons[1].style.opacity = !hide ? "0.7" : "0";
      buttons[0].disabled = buttons[1].disabled = hide;
      buttons[0].style.zIndex = buttons[1].style.zIndex = hide ? '-20':'20'
    }
  };

  return (
    <>
      <div
        ref={elementRef}
        className="h-fit relative rounded-[1rem] overflow-hidden [&>button]:opacity-0"
        onMouseEnter={(e) => showHideButtons(true)}
        onMouseLeave={(e) => showHideButtons(false)}
      >
        <button
          className="h-full absolute top-0 left-0 w-[3rem] text-white transition-opacity bg-[linear-gradient(to_right,rgb(155,155,155)_30%,transparent)] flex items-center justify-start"
          onClick={scrollBack}
        >
          <FaChevronLeft size={40}></FaChevronLeft>
        </button>
        <div
          ref={sliderRef}
          className="flex flex-row scroll-smooth gap-x-3 relative overflow-x-hidden"
        >
          {recipes.map((r, idx) => {
            return <CardRecipe key={idx} recipe={r}></CardRecipe>;
          })}
        </div>

        <button
          className="h-full absolute top-0 right-0 w-[3rem] text-white transition-opacity bg-[linear-gradient(to_left,rgb(155,155,155)_30%,transparent)] flex items-center justify-end"
          onClick={scrollNext}
        >
          <FaChevronRight size={40}></FaChevronRight>
        </button>
      </div>

      <div className="w-10 h-10 overflow-hidden fixed bottom-0 right-0 -z-10 opacity-0">
        <div
          ref={sliderSizeRef}
          className=" scroll-smooth gap-x-3 space-x-3 [&>div]:inline-block whitespace-nowrap -z-10 absolute left-30 bottom-0  w-fit"
        >
          {recipes.map((r, idx) => {
            return <CardRecipe key={idx} recipe={r}></CardRecipe>;
          })}
        </div>
      </div>
    </>
  );
};
