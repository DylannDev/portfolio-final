export default function ImageHero() {
  return (
    <div className="flex justify-end w-1/2">
      <div className="grid place-content-center w-[450px] h-[450px] rounded-full border-[1px] border-slate-200 ">
        <img
          className="rounded-full w-[375px]"
          src="public/images/portrait-dylann-carré-ai.png"
          alt="portrait dylann xavero"
        />
      </div>
    </div>
  );
}
