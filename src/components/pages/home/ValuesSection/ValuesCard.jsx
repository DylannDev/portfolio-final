/* eslint-disable react/prop-types */
import Card from "../../../reusable-ui/Card";

export default function ValuesCard({ quality }) {
  return (
    <Card className="p-8 flex flex-col gap-3">
      <div className="flex justify-center text-4xl mb-4">
        <span className="p-4 bg-primary rounded-full text-white">
          {quality.icon}
        </span>
      </div>
      <h3 className="font-bold uppercase font-title">{quality.quality}</h3>
      <p>{quality.description}</p>
    </Card>
  );
}
