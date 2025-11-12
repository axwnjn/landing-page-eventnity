import Button from "./ui/Button";
import { Card } from "./ui/Card";

const EventSchedule = () => {
  return (
    <section className="flex flex-col items-center mt-20 mb-50">
      <h2 className="text-5xl text font-semibold">Event Schedule</h2>
      <div className="grid grid-cols-3 gap-20 mt-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button text="View More" className="mt-15" />
    </section>
  );
};

export default EventSchedule;
