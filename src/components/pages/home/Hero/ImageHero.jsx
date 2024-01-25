export default function ImageHero() {
  return (
    <div className="flex justify-center xl:justify-end xl:w-1/2 w-full">
      <div className="grid place-content-center xs:w-[350px] xs:h-[350px] sm:w-[550px] sm:h-[550px] xl:w-[450px] xl:h-[450px] rounded-full border-[1px] border-slate-200 relative">
        <img
          className="rounded-full xs:w-[300px] sm:w-[475px] xl:w-[375px]"
          src="public/images/portrait-dylann-ai.jpg"
          alt="portrait dylann xavero"
        />
      </div>
    </div>
  );
}
