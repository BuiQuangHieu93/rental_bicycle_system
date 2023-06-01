import React from "react";
import {
  healthBicycle,
  environmentBenefits,
  imageDiscover,
} from "../../assets";

const Benefit = () => {
  return (
    <div>
      <div className="bg-white text-black rounded-md flex flex-col p-6 md:p-8 mb-8">
        <div className="text-xl font-bold mb-4 md:mb-6">1. Health benefits</div>
        <div className="flex flex-row flex-wrap md:flex-nowrap">
          <div className="md:w-2/3 md:mr-4 mb-4 md:mb-0">
            <p className="text-lg font-medium leading-relaxed text-justify">
              Cycling is a great way to improve one's physical and mental
              health. By talking about the health benefits of cycling, a rental
              bicycle system web application can encourage more people to use
              the service. Regular cycling can improve cardiovascular health by
              strengthening the heart, reducing blood pressure, and lowering
              cholesterol levels. It can also help reduce stress and anxiety,
              which can have a positive impact on mental health. Additionally,
              cycling can improve mental clarity and cognitive function by
              increasing blood flow to the brain.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={healthBicycle}
              alt="health"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black rounded-md flex flex-col p-6 md:p-8">
        <div className="text-xl font-bold mb-4 md:mb-6">
          2. Environmental benefits
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={environmentBenefits}
              alt="health"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 md:ml-4">
            <p className="text-lg font-medium leading-relaxed text-justify">
              Cycling is not only beneficial for individuals, but also for the
              environment. Encouraging cycling can reduce air pollution and
              traffic congestion, both of which have significant environmental
              impacts. By switching to cycling, individuals can decrease their
              carbon footprint and reduce emissions of pollutants that
              contribute to climate change. Additionally, cycling infrastructure
              requires significantly less space than roads, reducing urban
              sprawl and preserving natural habitats. Studies have shown that
              increasing cycling can have a positive impact on air quality and
              traffic congestion in urban areas, leading to a healthier and more
              sustainable living environment. Infographics and data can be
              powerful tools to illustrate these benefits and motivate
              individuals and communities to make more environmentally conscious
              transportation choices.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-black rounded-md flex flex-col p-6 md:p-8">
        <div className="text-xl font-bold mb-4 md:mb-6">
          3. Convenient and easy way of commuting
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap">
          <div className="">
            <p className="text-lg font-medium leading-relaxed text-justify">
              The availability of convenient and easy commuting options has
              significantly improved daily travel for millions of people.
              Ride-sharing services, public transportation systems, and electric
              bikes and scooters have made commuting more flexible, affordable,
              and sustainable. Technology has also provided commuters with
              real-time information on travel times and alternative routes,
              making the experience more convenient. As sustainable and
              efficient urban mobility continues to be a focus, it is likely
              that these options will become even more accessible and popular in
              the future.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-black rounded-md flex flex-col p-6 md:p-8">
        <div className="text-xl font-bold mb-4 md:mb-6">4. Save money</div>
        <div className="flex flex-row flex-wrap md:flex-nowrap">
          <div className="">
            <p className="text-lg font-medium leading-relaxed text-justify">
              Using a rental bicycle system can be a cost-effective way to save
              money for daily transportation. Compared to owning and maintaining
              a personal bike, using a rental system eliminates the need for
              upfront costs, storage fees, and maintenance expenses.
              Additionally, rental bikes can be easily accessed at various
              locations, providing users with a flexible and affordable
              transportation option. Furthermore, rental bike systems often
              offer daily, weekly, or monthly subscriptions, which can save
              users money in the long term. Studies have shown that rental bike
              systems can be significantly cheaper than other transportation
              options, such as car ownership or public transit, especially for
              shorter trips. Thus, using a rental bicycle system can be an
              effective way to reduce transportation costs while promoting
              healthy and sustainable mobility.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-black rounded-md flex flex-col p-6 md:p-8">
        <div className="text-xl font-bold mb-4 md:mb-6">
          5. Explore Different Places
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={imageDiscover}
              alt="health"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 md:ml-4">
            <p className="text-lg font-medium leading-relaxed text-justify">
              Using a rental bicycle system can be an excellent way to explore
              different places, allowing users to see and experience more of
              their surroundings. Rental bike systems often provide access to
              bikes at multiple locations throughout a city or region, enabling
              users to easily travel to different destinations and explore new
              areas. Furthermore, biking allows users to cover more ground than
              walking, while still being able to appreciate their surroundings
              and take in the local culture. Biking can also provide a unique
              perspective on popular tourist destinations, offering an
              alternative way to experience well-known sites. Additionally,
              rental bikes are often equipped with GPS systems or mobile apps,
              which can help users navigate to different locations and discover
              hidden gems in a new city or region. In summary, using a rental
              bicycle system can provide a fun and unique way to explore
              different places, allowing users to see more of their surroundings
              and experience local culture from a new perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
