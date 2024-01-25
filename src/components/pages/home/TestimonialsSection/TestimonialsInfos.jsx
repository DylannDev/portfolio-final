/* eslint-disable react/prop-types */
export default function TestimonialsInfos({ testimonial }) {
  return (
    <div className="flex flex-col items-center gap-16">
      <img
        src={`/images/${testimonial.image}`}
        alt="logo mr kicks"
        className="w-[100px] rounded-full"
      />
      <p className="text-xl max-w-[700px] text-center">{testimonial.text}</p>
      <div className="flex flex-col items-center gap-1 text-lg">
        <span className="font-extrabold">{testimonial.name}</span>
        <span>
          {testimonial.job}, {testimonial.company}
        </span>
      </div>
    </div>
  );
}
