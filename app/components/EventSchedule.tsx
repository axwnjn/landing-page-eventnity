import Button from "./ui/Button";
import { Card } from "./ui/Card";

const events = [
  {
    image: "/images/pexels-canvastudio-3194521.jpg",
    title: "Meet up Freelancer",
    desc: "Become a potential and professional freelancer",
    date: "February 6th 2023",
    hour: "10 PM to 12 PM",
  },
  {
    image: "/images/pexels-bertellifotografia-34774346.jpg",

    title: "Tech Conference",
    desc: "Discover innovations in technology and networking",
    date: "March 10th 2023",
    hour: "2 PM to 5 PM",
  },
  {
    image: "/images/pexels-mikky-k-158844-625644.jpg",

    title: "Music Festival",
    desc: "Feel the rhythm with top artists performing live",
    date: "April 2nd 2023",
    hour: "6 PM to 11 PM",
  },
  {
    image: "/images/pexels-shkrabaanthony-7167036.jpg",

    title: "Design Workshop",
    desc: "Learn creative processes and UI/UX design skills",
    date: "May 12th 2023",
    hour: "1 PM to 4 PM",
  },
  {
    image: "/images/pexels-rdne-7414113.jpg",

    title: "Startup Pitch",
    desc: "Watch founders present their startup ideas to investors",
    date: "June 25th 2023",
    hour: "9 AM to 12 PM",
  },
];

const EventSchedule = () => {
  return (
    <section className="flex flex-col items-center mt-20 mb-50">
      <h2 className="text-5xl text font-semibold">Event Schedule</h2>
      <div className="grid grid-cols-3 gap-20 mt-20">
        {events.map((e, index) => {
          return (
            <Card
              key={index}
              image={e.image}
              title={e.title}
              desc={e.desc}
              date={e.date}
              hour={e.hour}
            />
          );
        })}
      </div>
      <Button text="View More" className="mt-20" />
    </section>
  );
};

export default EventSchedule;
