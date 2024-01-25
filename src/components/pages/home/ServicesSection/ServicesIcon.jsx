/* eslint-disable react/prop-types */
export default function ServicesIcon({ service }) {
  return (
    <div className="flex justify-center text-4xl mb-4">
      <span className="p-4 bg-primary rounded-full text-white">
        {service.icon}
      </span>
    </div>
  );
}
