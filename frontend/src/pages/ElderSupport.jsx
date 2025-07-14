import React from "react";

const events = [
  {
    title: "Mela",
    subtitle: "Every Weekend",
    location: "250 m (XYZ)",
    image: "/mela.jpg",
  },
  {
    title: "Health Camp",
    subtitle: "Distance: 500 m",
    location: "XYZ",
    image: "/health-camp.jpg",
  },
  {
    title: "Satsang",
    subtitle: "Tomorrow",
    location: "250 m (XYZ)",
    image: "/satsang.jpg",
  },
];

const homeActivities = [
  {
    title: "Daily Bhajans",
    subtitle: "Access a collection of soothing devotional songs.",
    image: "/bhajan.jpg",
  },
  {
    title: "Indoor Games",
    subtitle: "Engage in mind-stimulating games like chess and ludo.",
    image: "/games.jpg",
  },
  {
    title: "Gentle Yoga Prompts",
    subtitle: "Follow easy yoga exercises for flexibility and peace.",
    image: "/yoga.jpg",
  },
];

const ElderSupport = () => {
  return (
    <div className="p-6 ml-5 space-y-12">
      {/* Local Events */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center">Local Events & Activities Around You</h2>
        <p className="text-gray-500 mb-6 text-center">At home or nearby, SehatSathi is with you</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition"
            >
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.subtitle}</p>
                <p className="text-gray-500 text-sm">Location: {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Home Activities */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center">Home Activities</h2>
        <p className="text-gray-500 mb-6 text-center">Engaging activities and prompts for your loved ones.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeActivities.map((activity, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition"
            >
              <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElderSupport;
