export default function ImageHero() {
  return (
    <div className="flex justify-end w-1/2">
      <div className="grid place-content-center w-[500px] h-[500px] rounded-full border-[1px] border-slate-200 ">
        <img
          className="rounded-full w-[400px]"
          src="public/images/portrait-dylann-carré-ai.png"
          alt="portrait dylann xavero"
        />
      </div>
    </div>
  );
}
