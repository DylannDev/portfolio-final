/* eslint-disable react/prop-types */
export default function MenuBurger({ isMenuActive, onClick }) {
  const genericHamburgerLine = `h-[2px] w-[30px] my-1 rounded-full bg-primary transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center "
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isMenuActive && "rotate-45 translate-y-[10px]"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${isMenuActive && "opacity-0"}`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isMenuActive && "-rotate-45 -translate-y-[10px]"
        }`}
      />
    </button>
  );
}
