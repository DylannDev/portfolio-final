/* eslint-disable react/prop-types */
import Card from "../../../reusable-ui/Card";
import ServicesDescription from "./ServicesDescription";
import ServicesIcon from "./ServicesIcon";

export default function ServicesCard({ service }) {
  return (
    <Card className="hover:scale-105 transition-all p-8 flex flex-col gap-3">
      <ServicesIcon service={service} />
      <h3 className="font-bold uppercase font-title mb-4">{service.service}</h3>
      {service.description.map((description, index) => (
        <ServicesDescription key={index} description={description} />
      ))}
    </Card>
  );
}
