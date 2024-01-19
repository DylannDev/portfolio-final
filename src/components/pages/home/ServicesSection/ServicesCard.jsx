/* eslint-disable react/prop-types */
import { RxCheck } from "react-icons/rx";
import Card from "../../../reusable-ui/Card";

export default function ServicesCard({ services }) {
  return (
    <>
      {services.map((service, index) => (
        <Card
          key={index}
          className="hover:scale-105 transition-all p-8 flex flex-col gap-3"
        >
          <div className="flex justify-center text-4xl mb-4">
            <span className="p-4 bg-primary rounded-full text-white">
              {service.icon}
            </span>
          </div>
          <h3 className="font-bold uppercase font-title mb-4">
            {service.service}
          </h3>
          {service.description.map((description, index) => (
            <div key={index} className="flex items-start gap-1">
              <span className="pt-1">
                <RxCheck className="text-xl text-secondary" />
              </span>
              <p className="text-left flex gap-1 items-start">{description}</p>
            </div>
          ))}
        </Card>
      ))}
    </>
  );
}
