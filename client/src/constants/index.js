import { prendre, unePause, electrique } from "../assets";

export const features = [
  {
    id: "prendre",
    title: "Take a EcoCycleGo’",
    image: prendre,
  },
  {
    id: "electrique",
    title: "Use an electric EcoCycleGo’",
    image: electrique,
  },
  {
    id: "contact",
    title: "Make a stop",
    image: unePause,
  },
];

export const subscriptions = [
  {
    index: "0",
    type: "V-LIBRE",
    price: "0 € / month",
    features: [
      "✔ For occasional users",
      "✔ No subscription",
      "✔ Payment from the first minute",
      "✔ Bonus minutes: Active",
    ],
  },
  {
    index: "1",
    type: "V-PLUS",
    price: "3.10 € / month",
    features: [
      "✔ For regular users (over 4 trips per month)",
      "✔ Includes 30 minutes on classic bikes",
      "✔ 12 months commitment",
      "✔ Bonus minutes: Active",
    ],
  },
  {
    index: "2",
    type: "V-MAX",
    price: "8.30 € / month",
    features: [
      "✔ The EcoCycleGo all-inclusive ",
      "✔ Includes 60 minutes on classic bikes",

      "✔ 12 months commitment",
      "✔ Bonus minutes: Active",
    ],
  },
];

export const subscriptions_single = [
  {
    index: "0",
    type: "TICKET-V",
    price: "3 €",
    features: ["✔ One-way trip on classic", "✔ Includes 45 minutes"],
  },
  {
    index: "1",
    type: "24-HOUR PASS - CLASSIC",
    price: "5 €",
    features: [
      "✔ 24 hours with EcoCycleGo",
      "✔ Includes 30 minutes on classic bikes",
      "✔ Take up to 5 EcoCycleGo at one time",
    ],
  },

  {
    index: "2",
    type: "3-DAY PASS",
    price: "20 €",
    features: [
      "✔ 72 hours with EcoCycleGo",
      "✔ Includes 60 minutes on classic bikes",
      "✔ Take up to 5 EcoCycleGo at one time",
    ],
  },
];

export const subscriptions_index = [
  {
    index: "0",
    title: "V-LIBRE",
    meca_time: "0-30 min",
    meca_price: "1 €",
    meca_extra_price: "1 €",
  },
  {
    index: "1",
    title: "V-PLUS",
    meca_time: "0-30 min",
    meca_price: "free",
    meca_extra_price: "1 €",
  },
  {
    index: "2",
    title: "V-MAX",
    meca_time: "0-60 min",
    meca_price: "free",
    meca_extra_price: "1 €",
  },
];

export const subscription_ticket_index = [
  {
    index: "0",
    title: "TICKET-V",
    meca_time: "0-45 min",
    meca_price: "free",
    meca_extra_price: "1 €",
  },
  {
    index: "1",
    title: "24-HOUR PASS - CLASSIC",
    meca_time: "0-30 min",
    meca_price: "free",
    meca_extra_price: "1 €",
  },

  {
    index: "2",
    title: "3-DAY PASS",
    meca_time: "0-60 min",
    meca_price: "free",
    meca_extra_price: "1 €",
  },
];

export const form = [
  {
    title: "Short term subscription",
    subForm: [
      {
        title: "Short term offer information",
        subForm: {
          title: [
            "Description of offer",
            "Purchase/subscription methods",
            "Advance purchase option",
          ],
        },
      },
      {
        title: "Short term payment information",
        subForm: {
          title: [
            "Payment method",
            "Internet payment security",
            "Website purchase guarantee deposit",
            "Terminal purchase guarantee deposit",
            "Terminal payment rejection",
            "Ticket printing problem",
          ],
        },
      },
    ],
  },
  {
    title: "Long term subscription",
    subForm: [
      {
        title: "Long term offer information",
        subForm: {
          title: ["Description of offer", "Purchase/subscription methods"],
        },
      },
      {
        title: "Long term payment information",
        subForm: {
          title: [
            "Payment method",
            "Internet payment security",
            "Website purchase guarantee deposit",
            "Terminal purchase guarantee deposit",
          ],
        },
      },
    ],
  },
];

export const weatherData = [
  {
    title: "Clear Sky",
    recommend: [
      "Check the UV index and dress appropriately to protect your skin from the sun.",
      "Stay hydrated by drinking plenty of water before, during, and after your ride.",
      "Wear a helmet and other protective gear to stay safe.",
      "Plan your route and make sure to choose roads with bike lanes or low traffic when possible.",
      "Be mindful of your surroundings and watch out for pedestrians, other cyclists, and cars.",
      "Bring along a repair kit and other essentials, such as a bike pump and spare tubes.",
      "Start your ride early in the morning or later in the afternoon to avoid the hottest part of the day.",
      "Take breaks as needed to rest and refuel.",
      "Keep an eye on the weather forecast and be prepared for sudden changes.",
      "Enjoy the beautiful scenery and the sense of freedom that comes with cycling!",
    ],
  },

  {
    title: "Thunderstorm with Light Rain",
    recommend: [
      "Check the weather forecast before your ride to be aware of any approaching thunderstorms.",
      "Wear a lightweight, waterproof jacket and pants to protect yourself from the rain.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility in low light conditions.",
      "Plan your route to include sheltered areas, such as tree-lined roads or buildings.",
      "Ride at a slightly slower pace and maintain a firm grip on the handlebars.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay away from open areas and seek shelter if lightning becomes a concern.",
      "Stay updated on the weather conditions and be prepared to adjust your plans accordingly.",
    ],
  },

  {
    title: "Thunderstorm with Rain",
    recommend: [
      "Avoid cycling during a thunderstorm with rain for your safety.",
      "Stay indoors until the rain subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Plan an alternate indoor activity or visit a nearby bike shop for maintenance.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Once the rain stops, allow the roads to dry before resuming your ride.",
      "Be cautious of wet surfaces and reduced traction even after the rain stops.",
      "Monitor weather updates for any potential road closures or hazards.",
      "Consider joining a local cycling club or community for indoor cycling events.",
    ],
  },

  {
    title: "Thunderstorm with Heavy Rain",
    recommend: [
      "Avoid cycling during a thunderstorm with heavy rain for your safety.",
      "Stay indoors until the storm subsides completely.",
      "Listen to local weather advisories and warnings for any emergency notifications.",
      "Avoid areas prone to flooding and seek higher ground if necessary.",
      "If caught in a sudden heavy downpour, find shelter quickly.",
      "Wait for the storm to pass or arrange for alternate transportation.",
      "Monitor weather updates for any potential road closures or hazards.",
      "Use the time to check and maintain your bike's condition indoors.",
      "Engage in indoor activities like stretching, yoga, or core training.",
      "Stay connected with fellow cyclists through online forums or social media.",
    ],
  },

  {
    title: "Light Thunderstorm",
    recommend: [
      "Keep an eye on the sky and distant thunderstorm activity before your ride.",
      "Carry a portable weather radio or use weather apps for updates during your ride.",
      "Avoid open areas and seek shelter if the storm approaches.",
      "Be aware of changing weather conditions and potential lightning strikes.",
      "Ride with caution and reduce your speed during the thunderstorm.",
      "Wear bright, reflective clothing to enhance visibility in low light conditions.",
      "Choose a route with easy access to sheltered areas.",
      "Avoid riding near tall objects or metal structures during lightning activity.",
      "If lightning is nearby, find a safe place to take cover and wait for the storm to pass.",
      "Resume your ride only when the weather conditions improve and it's safe to do so.",
    ],
  },

  {
    title: "Thunderstorm",
    recommend: [
      "Avoid cycling during a thunderstorm for your safety.",
      "Stay indoors until the thunderstorm passes completely.",
      "Do not take shelter under trees or near open areas during lightning activity.",
      "Listen to local weather updates and follow any emergency instructions.",
      "Wait for the storm to subside and check for any local road closures or hazards.",
      "Consider using indoor cycling equipment or stationary bikes as an alternative.",
      "Use the time to engage in stretching exercises or other indoor workouts.",
      "Check your bike's condition and perform any necessary maintenance tasks.",
      "Connect with fellow cyclists online for virtual rides or discussions.",
      "Stay updated on weather patterns and avoid riding in thunderstorms in the future.",
    ],
  },

  {
    title: "Heavy Thunderstorm",
    recommend: [
      "Avoid cycling during a heavy thunderstorm for your safety.",
      "Stay indoors until the storm passes completely.",
      "Ensure all windows and doors are closed to prevent rain from entering your home.",
      "Charge your electronic devices and have emergency contact numbers readily available.",
      "Listen to local news or weather updates for any emergency notifications.",
      "Do not attempt to ride in flooded areas or areas with strong currents.",
      "Stay away from windows and avoid using electrical appliances during lightning activity.",
      "If necessary, move to a safe location within your home away from windows.",
      "Once the storm subsides, check your surroundings for any potential hazards before venturing outside.",
      "Contact local authorities if you require assistance or if there are any emergency situations.",
    ],
  },

  {
    title: "Ragged Thunderstorm",
    recommend: [
      "Avoid cycling during a ragged thunderstorm for your safety.",
      "Stay indoors until the storm passes completely.",
      "Listen to local weather updates and follow any emergency instructions.",
      "Secure any loose objects or outdoor furniture to prevent them from being blown away.",
      "Avoid using electronic devices that are plugged into outlets during lightning activity.",
      "If you experience power outages, use flashlights or battery-powered lights as a light source.",
      "Prepare an emergency kit with essential supplies such as food, water, and first aid items.",
      "Stay away from windows and find a safe location within your home during strong winds.",
      "Avoid going outside immediately after the storm, as there may be fallen debris or downed power lines.",
      "Check for any local road closures or hazards before resuming your outdoor activities.",
    ],
  },

  {
    title: "Thunderstorm with Light Drizzle",
    recommend: [
      "Check the weather forecast for thunderstorms with light drizzle before your ride.",
      "Wear a waterproof jacket or a rain poncho to protect yourself from the drizzle.",
      "Use fenders on your bicycle to minimize water splashes.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to avoid getting wet from the drizzle.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay away from open areas and seek shelter if lightning becomes a concern.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
    ],
  },

  {
    title: "Thunderstorm with Drizzle",
    recommend: [
      "Avoid cycling during a thunderstorm with drizzle for your safety.",
      "Stay indoors until the storm subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Plan an alternate indoor activity or visit a nearby bike shop for maintenance.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Once the rain stops, allow the roads to dry before resuming your ride.",
      "Be cautious of wet surfaces and reduced traction even after the rain stops.",
      "Monitor weather updates for any potential road closures or hazards.",
      "Consider joining a local cycling club or community for indoor cycling events.",
    ],
  },

  {
    title: "Thunderstorm with Heavy Drizzle",
    recommend: [
      "Avoid cycling during a thunderstorm with heavy drizzle for your safety.",
      "Stay indoors until the storm subsides completely.",
      "Listen to local weather advisories and warnings for any emergency notifications.",
      "Avoid areas prone to flooding and seek higher ground if necessary.",
      "If caught in a sudden heavy downpour, find shelter quickly.",
      "Wait for the storm to pass or arrange for alternate transportation.",
      "Monitor weather updates for any potential road closures or hazards.",
      "Use the time to check and maintain your bike's condition indoors.",
      "Engage in indoor activities like stretching, yoga, or core training.",
      "Stay connected with fellow cyclists through online forums or social media.",
    ],
  },
  {
    title: "Light Intensity Drizzle",
    recommend: [
      "Wear a lightweight waterproof jacket or a rain poncho to stay dry.",
      "Use fenders on your bicycle to minimize water splashes.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to avoid getting wet from the drizzle.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Consider using gloves or grips with extra grip for better control in wet conditions.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Enjoy the peaceful ambiance and the refreshing feeling of riding in light drizzle.",
    ],
  },

  {
    title: "Drizzle",
    recommend: [
      "Wear a waterproof jacket and pants to protect yourself from the drizzle.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the drizzle.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Enjoy the meditative experience of cycling in the soothing sound of drizzle.",
    ],
  },

  {
    title: "Heavy Intensity Drizzle",
    recommend: [
      "Avoid cycling in heavy intensity drizzle for your safety.",
      "Stay indoors until the drizzle subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Consider engaging in indoor activities like stretching or core training.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Once the drizzle stops, allow the roads to dry before resuming your ride.",
      "Check your bike for any water damage and perform maintenance if necessary.",
      "Be cautious of wet surfaces and reduced traction even after the drizzle stops.",
      "Consider joining a local cycling club or community for indoor cycling events.",
    ],
  },

  {
    title: "Light Intensity Drizzle Rain",
    recommend: [
      "Wear a waterproof jacket and pants to stay dry in the drizzle rain.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Enjoy the unique experience of riding in a combination of drizzle and rain.",
    ],
  },

  {
    title: "Drizzle Rain",
    recommend: [
      "Wear a waterproof jacket and pants to protect yourself from the drizzle rain.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Enjoy the invigorating feeling of riding in a mix of drizzle and rain.",
    ],
  },

  {
    title: "Heavy Intensity Drizzle Rain",
    recommend: [
      "Avoid cycling in heavy intensity drizzle rain for your safety.",
      "Stay indoors until the rain subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Consider engaging in indoor activities like stretching or core training.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Once the rain stops, allow the roads to dry before resuming your ride.",
      "Check your bike for any water damage and perform maintenance if necessary.",
      "Be cautious of wet surfaces and reduced traction even after the rain stops.",
      "Consider joining a local cycling club or community for indoor cycling events.",
    ],
  },

  {
    title: "Shower Rain and Drizzle",
    recommend: [
      "Wear a waterproof jacket and pants to stay dry in the shower rain and drizzle.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Embrace the dynamic weather and find beauty in cycling through rain and drizzle.",
    ],
  },

  {
    title: "Heavy Shower Rain and Drizzle",
    recommend: [
      "Avoid cycling in heavy shower rain and drizzle for your safety.",
      "Stay indoors until the rain subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Consider engaging in indoor activities like stretching or core training.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Once the rain stops, allow the roads to dry before resuming your ride.",
      "Check your bike for any water damage and perform maintenance if necessary.",
      "Be cautious of wet surfaces and reduced traction even after the rain stops.",
      "Consider joining a local cycling club or community for indoor cycling events.",
    ],
  },

  {
    title: "Shower Drizzle",
    recommend: [
      "Wear a waterproof jacket or a rain poncho to stay dry in the shower drizzle.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Embrace the gentle rain and drizzle as you ride through the shower drizzle.",
    ],
  },
  {
    title: "Freezing Rain",
    recommend: [
      "Avoid cycling in freezing rain due to hazardous road conditions.",
      "Stay indoors until the freezing rain subsides and the roads are safe.",
      "Check local weather updates and road condition reports before venturing out.",
      "If you must ride, use studded tires or chains for better traction on icy surfaces.",
      "Dress in warm and layered clothing to protect yourself from the cold.",
      "Be cautious of black ice, which can be invisible and extremely slippery.",
      "Consider indoor cycling or stationary bike training as an alternative.",
      "Keep your bike clean and lubricated to prevent damage from ice and salt.",
      "Monitor weather forecasts for improving conditions before resuming outdoor cycling.",
      "Prioritize safety and avoid unnecessary risks in freezing rain conditions.",
    ],
  },

  {
    title: "Light Intensity Shower Rain",
    recommend: [
      "Wear a lightweight waterproof jacket or a rain poncho to stay dry in light intensity shower rain.",
      "Use fenders on your bicycle to minimize water splashes.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to avoid getting wet from the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using gloves or grips with extra grip for better control in wet conditions.",
      "Enjoy the refreshing feeling of riding in light showers.",
    ],
  },

  {
    title: "Shower Rain",
    recommend: [
      "Wear a waterproof jacket and pants to protect yourself from shower rain.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Embrace the beauty of cycling through gentle shower rain.",
    ],
  },

  {
    title: "Heavy Intensity Shower Rain",
    recommend: [
      "Avoid cycling in heavy intensity shower rain for your safety.",
      "Stay indoors until the rain subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Consider engaging in indoor activities like stretching or core training.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Once the rain stops, allow the roads to dry before resuming your ride.",
      "Check your bike for any water damage and perform maintenance if necessary.",
      "Be cautious of wet surfaces and reduced traction even after the rain stops.",
      "Consider joining a local cycling club or community for indoor cycling events.",
    ],
  },

  {
    title: "Ragged Shower Rain",
    recommend: [
      "Wear a waterproof jacket and pants to protect yourself from ragged shower rain.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Embrace the dynamic nature of cycling through ragged shower rain.",
    ],
  },
  {
    title: "Light Rain",
    recommend: [
      "Wear a lightweight waterproof jacket or a rain poncho to stay dry.",
      "Use fenders on your bicycle to minimize water splashes.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to avoid getting wet from the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using gloves or grips with extra grip for better control in wet conditions.",
      "Enjoy the peaceful ambiance and the refreshing feeling of riding in light rain.",
    ],
  },

  {
    title: "Moderate Rain",
    recommend: [
      "Wear a waterproof jacket and pants to protect yourself from moderate rain.",
      "Use fenders on your bicycle to minimize water splashes and keep yourself dry.",
      "Ensure your bike lights are functioning properly for improved visibility.",
      "Choose routes with sheltered areas to minimize exposure to the rain.",
      "Ride at a slightly slower pace and maintain control in wet conditions.",
      "Be cautious of slippery surfaces and brake gently to avoid skidding.",
      "Pack spare clothes in a waterproof bag to change into if needed.",
      "Stay updated on the weather conditions and be prepared for sudden changes.",
      "Consider using waterproof covers for your phone and other electronic devices.",
      "Embrace the invigorating experience of cycling in moderate rain.",
    ],
  },

  {
    title: "Heavy Intensity Rain",
    recommend: [
      "Avoid cycling in heavy intensity rain for your safety.",
      "Stay indoors until the rain subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Consider engaging in indoor activities like stretching or core training.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Ensure your rain gear is properly waterproofed to stay dry.",
      "If you must ride, choose well-drained routes and maintain a controlled speed.",
      "Be visible to other road users by using bright, reflective clothing and lights.",
      "Consider using a mudguard to minimize water spray from your tires.",
    ],
  },

  {
    title: "Very Heavy Rain",
    recommend: [
      "Avoid cycling in very heavy rain for your safety.",
      "Stay indoors until the rain subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Consider engaging in indoor activities like stretching or core training.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Ensure your rain gear is fully waterproof and provides adequate protection.",
      "Check your bicycle tires for proper tread and traction before riding in wet conditions.",
      "If you must ride, be extra cautious of hydroplaning on wet surfaces.",
      "Consider joining indoor cycling classes or using a stationary bike during heavy rain.",
    ],
  },

  {
    title: "Extreme Rain",
    recommend: [
      "Avoid cycling in extreme rain for your safety.",
      "Stay indoors until the rain subsides completely.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Use the opportunity to rest, refuel, and recharge yourself.",
      "Consider engaging in indoor activities like stretching or core training.",
      "Stay informed about any potential flash flood warnings in the area.",
      "Ensure your rain gear is of the highest quality and provides maximum protection.",
      "Avoid crossing flooded areas and flowing water as it can be dangerous.",
      "Consider using indoor cycling training apps or videos to maintain your fitness.",
      "Monitor weather updates and plan your rides during more favorable conditions.",
    ],
  },
  {
    title: "Light Snow",
    recommend: [
      "Wear warm and waterproof clothing to stay comfortable in light snow.",
      "Use lights and reflective gear to enhance your visibility in snowy conditions.",
      "Ride at a slower pace and maintain a safe distance from vehicles.",
      "Be cautious of icy patches and slippery surfaces, especially on bridges and corners.",
      "Consider using studded tires or tire chains for better traction in light snow.",
      "Plan your route on well-maintained roads and avoid areas with heavy snow accumulation.",
      "Keep your bike clean and free from snow buildup for optimal performance.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "Carry a small shovel or brush to clear snow from your bike if necessary.",
      "Embrace the serene and quiet atmosphere of cycling in light snow.",
    ],
  },

  {
    title: "Snow",
    recommend: [
      "Wear insulated and waterproof clothing to stay warm and dry in snowfall.",
      "Ensure your bike lights are functioning properly for increased visibility.",
      "Avoid sudden movements or quick turns on slippery surfaces.",
      "Be mindful of reduced braking efficiency and give yourself ample stopping distance.",
      "Consider using wider tires with lower pressure for better traction in snow.",
      "Choose routes that are regularly plowed and salted for safer cycling.",
      "Use fenders on your bicycle to minimize snow spray and keep yourself dry.",
      "Pack spare gloves and socks in a waterproof bag to change into if needed.",
      "Check your bike's drivetrain regularly to prevent snow and ice buildup.",
      "Take breaks to warm up and stay hydrated during your snowy ride.",
    ],
  },

  {
    title: "Heavy Snow",
    recommend: [
      "Avoid cycling in heavy snow for your safety and visibility reasons.",
      "Stay indoors until the snowfall subsides and roads are cleared.",
      "Monitor weather updates and road conditions before planning any rides.",
      "Use the time to engage in indoor exercises or cross-training activities.",
      "Clear snow from your bike and store it in a safe and dry place.",
      "If you must ride, consider using a fat bike with wide tires for better snow performance.",
      "Ensure your clothing and gear are appropriate for extreme cold and snowy conditions.",
      "Stay informed about any potential avalanche warnings or high-risk areas.",
      "Check local regulations and snow clearing schedules for bike paths and trails.",
      "Consider joining indoor cycling classes or using a stationary bike during heavy snowfall.",
    ],
  },

  {
    title: "Sleet",
    recommend: [
      "Exercise caution when cycling in sleet due to slippery and icy conditions.",
      "Wear waterproof and wind-resistant clothing to protect yourself from the elements.",
      "Ride at a slower pace and maintain a firm grip on your handlebars.",
      "Use lights and reflectors to enhance your visibility in low-light sleet conditions.",
      "Avoid sudden braking or sharp turns to prevent skidding on icy patches.",
      "Consider using studded tires or tire chains for better traction in sleet.",
      "Choose well-maintained routes and roads that are less prone to ice formation.",
      "Pack spare clothes and towels in a waterproof bag to dry off if needed.",
      "Take extra care when crossing bridges or areas with potential ice buildup.",
      "If conditions worsen, seek shelter and wait until it's safe to continue or return home.",
    ],
  },

  {
    title: "Light Shower Sleet",
    recommend: [
      "Be prepared for rapidly changing weather conditions when cycling in light shower sleet.",
      "Wear layered clothing to adapt to temperature fluctuations during your ride.",
      "Use waterproof gloves and shoe covers to keep your extremities dry.",
      "Keep a close eye on the road surface for any signs of icing or slippery spots.",
      "Ride at a moderate pace and be cautious of reduced visibility in shower sleet.",
      "Consider using a clear or yellow-tinted lens for your cycling glasses to improve contrast.",
      "Stay updated on weather forecasts and be prepared to alter your route if necessary.",
      "Avoid cycling near areas with trees or power lines that may be susceptible to falling ice.",
      "Carry a small towel to wipe off any sleet or moisture from your bike and components.",
      "Embrace the unique experience of cycling in the midst of a light shower sleet.",
    ],
  },

  {
    title: "Shower Sleet",
    recommend: [
      "Exercise caution when cycling in shower sleet due to potentially hazardous conditions.",
      "Wear a waterproof and insulated jacket to stay protected from the wet and cold.",
      "Use front and rear lights as well as reflective gear for increased visibility.",
      "Reduce your speed and be prepared for sudden changes in road surface conditions.",
      "Avoid areas prone to puddles and icy patches to minimize the risk of accidents.",
      "Consider using wider tires with lower pressure for better grip in shower sleet.",
      "Plan your route to include sheltered areas or seek cover during intense shower sleet.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "If conditions worsen or become unsafe, find a safe place to take shelter until it clears.",
    ],
  },

  {
    title: "Light Rain and Snow",
    recommend: [
      "Wear a combination of waterproof and insulating clothing for mixed rain and snow conditions.",
      "Ensure your bike lights are functioning properly for visibility in varying light conditions.",
      "Ride with extra caution as rain and snow can make surfaces slippery.",
      "Use fenders on your bicycle to minimize water and snow spray.",
      "Consider using wider tires with lower pressure to enhance traction in mixed conditions.",
      "Choose routes with fewer traffic intersections and areas prone to ice formation.",
      "Pack spare gloves and socks in a waterproof bag to change into if needed.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "If conditions become too challenging, seek shelter and wait until it improves.",
      "Embrace the unique experience of cycling in a combination of rain and snow.",
    ],
  },

  {
    title: "Rain and Snow",
    recommend: [
      "Exercise caution when cycling in rain and snow due to challenging road conditions.",
      "Wear waterproof and insulating clothing to stay warm and dry during your ride.",
      "Ride at a reduced speed and maintain a safe distance from other vehicles.",
      "Be aware of reduced visibility and use lights and reflectors to enhance your presence.",
      "Avoid sudden braking or sharp turns to prevent skidding on slippery surfaces.",
      "Consider using wider tires with a good tread pattern for better grip in rain and snow.",
      "Choose well-plowed routes and roads that are less prone to ice formation.",
      "Carry a small towel to wipe off any snow or moisture from your bike and components.",
      "Stay updated on weather forecasts and be prepared to adjust your route if needed.",
      "If conditions worsen or become unsafe, find a safe place to take shelter until it clears.",
    ],
  },

  {
    title: "Light Shower Snow",
    recommend: [
      "Dress in warm and waterproof layers to stay comfortable in light shower snow.",
      "Use lights and reflective gear to enhance your visibility in low-light conditions.",
      "Ride at a reduced speed and be cautious of slippery surfaces.",
      "Avoid sudden braking or sharp turns to prevent skidding on snowy patches.",
      "Consider using wider tires with lower pressure for better traction in light shower snow.",
      "Choose routes that are regularly cleared of snow and less prone to ice formation.",
      "Keep your bike clean and free from snow buildup for optimal performance.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "Carry a small brush or cloth to wipe off any snow from your bike as needed.",
      "Embrace the peacefulness and beauty of cycling in a light shower snowfall.",
    ],
  },

  {
    title: "Shower Snow",
    recommend: [
      "Exercise caution when cycling in shower snow due to potentially hazardous conditions.",
      "Wear a waterproof and insulated jacket to stay protected from the wet and cold.",
      "Use front and rear lights as well as reflective gear for increased visibility.",
      "Reduce your speed and be prepared for sudden changes in road surface conditions.",
      "Avoid areas prone to puddles and icy patches to minimize the risk of accidents.",
      "Consider using wider tires with lower pressure for better grip in shower snow.",
      "Plan your route to include sheltered areas or seek cover during intense shower snow.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "If conditions worsen or become unsafe, find a safe place to take shelter until it clears.",
    ],
  },

  {
    title: "Heavy Shower Snow",
    recommend: [
      "Avoid cycling in heavy shower snow due to hazardous conditions and reduced visibility.",
      "Stay indoors until the shower snowfall subsides and roads are cleared.",
      "Monitor weather updates and road conditions before planning any rides.",
      "Use the time to engage in indoor exercises or cross-training activities.",
      "Clear snow from your bike and store it in a safe and dry place.",
      "If you must ride, consider using a fat bike with wider tires for better snow performance.",
      "Ensure your clothing and gear are appropriate for extreme cold and snowy conditions.",
      "Stay informed about any potential avalanche warnings or high-risk areas.",
      "Check local regulations and snow clearing schedules for bike paths and trails.",
      "Consider joining indoor cycling classes or using a stationary bike during heavy shower snow.",
    ],
  },
  {
    title: "Light Snow",
    recommend: [
      "Wear warm and waterproof clothing to stay comfortable in light snow.",
      "Use lights and reflective gear to enhance your visibility in snowy conditions.",
      "Ride at a slower pace and maintain a safe distance from vehicles.",
      "Be cautious of icy patches and slippery surfaces, especially on bridges and corners.",
      "Consider using studded tires or tire chains for better traction in light snow.",
      "Plan your route on well-maintained roads and avoid areas with heavy snow accumulation.",
      "Keep your bike clean and free from snow buildup for optimal performance.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "Carry a small shovel or brush to clear snow from your bike if necessary.",
      "Embrace the serene and quiet atmosphere of cycling in light snow.",
    ],
  },

  {
    title: "Snow",
    recommend: [
      "Wear insulated and waterproof clothing to stay warm and dry in snowfall.",
      "Ensure your bike lights are functioning properly for increased visibility.",
      "Avoid sudden movements or quick turns on slippery surfaces.",
      "Be mindful of reduced braking efficiency and give yourself ample stopping distance.",
      "Consider using wider tires with lower pressure for better traction in snow.",
      "Choose routes that are regularly plowed and salted for safer cycling.",
      "Use fenders on your bicycle to minimize snow spray and keep yourself dry.",
      "Pack spare gloves and socks in a waterproof bag to change into if needed.",
      "Check your bike's drivetrain regularly to prevent snow and ice buildup.",
      "Take breaks to warm up and stay hydrated during your snowy ride.",
    ],
  },

  {
    title: "Heavy Snow",
    recommend: [
      "Avoid cycling in heavy snow for your safety and visibility reasons.",
      "Stay indoors until the snowfall subsides and roads are cleared.",
      "Monitor weather updates and road conditions before planning any rides.",
      "Use the time to engage in indoor exercises or cross-training activities.",
      "Clear snow from your bike and store it in a safe and dry place.",
      "If you must ride, consider using a fat bike with wide tires for better snow performance.",
      "Ensure your clothing and gear are appropriate for extreme cold and snowy conditions.",
      "Stay informed about any potential avalanche warnings or high-risk areas.",
      "Check local regulations and snow clearing schedules for bike paths and trails.",
      "Consider joining indoor cycling classes or using a stationary bike during heavy snowfall.",
    ],
  },

  {
    title: "Sleet",
    recommend: [
      "Exercise caution when cycling in sleet due to slippery and icy conditions.",
      "Wear waterproof and wind-resistant clothing to protect yourself from the elements.",
      "Ride at a slower pace and maintain a firm grip on your handlebars.",
      "Use lights and reflectors to enhance your visibility in low-light sleet conditions.",
      "Avoid sudden braking or sharp turns to prevent skidding on icy patches.",
      "Consider using studded tires or tire chains for better traction in sleet.",
      "Choose well-maintained routes and roads that are less prone to ice formation.",
      "Pack spare clothes and towels in a waterproof bag to dry off if needed.",
      "Take extra care when crossing bridges or areas with potential ice buildup.",
      "If conditions worsen, seek shelter and wait until it's safe to continue or return home.",
    ],
  },

  {
    title: "Light Shower Sleet",
    recommend: [
      "Be prepared for rapidly changing weather conditions when cycling in light shower sleet.",
      "Wear layered clothing to adapt to temperature fluctuations during your ride.",
      "Use waterproof gloves and shoe covers to keep your extremities dry.",
      "Keep a close eye on the road surface for any signs of icing or slippery spots.",
      "Ride at a moderate pace and be cautious of reduced visibility in shower sleet.",
      "Consider using a clear or yellow-tinted lens for your cycling glasses to improve contrast.",
      "Stay updated on weather forecasts and be prepared to alter your route if necessary.",
      "Avoid cycling near areas with trees or power lines that may be susceptible to falling ice.",
      "Carry a small towel to wipe off any sleet or moisture from your bike and components.",
      "Embrace the unique experience of cycling in the midst of a light shower sleet.",
    ],
  },

  {
    title: "Shower Sleet",
    recommend: [
      "Exercise caution when cycling in shower sleet due to potentially hazardous conditions.",
      "Wear a waterproof and insulated jacket to stay protected from the wet and cold.",
      "Use front and rear lights as well as reflective gear for increased visibility.",
      "Reduce your speed and be prepared for sudden changes in road surface conditions.",
      "Avoid areas prone to puddles and icy patches to minimize the risk of accidents.",
      "Consider using wider tires with lower pressure for better grip in shower sleet.",
      "Plan your route to include sheltered areas or seek cover during intense shower sleet.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "If conditions worsen or become unsafe, find a safe place to take shelter until it clears.",
    ],
  },

  {
    title: "Light Rain and Snow",
    recommend: [
      "Wear a combination of waterproof and insulating clothing for mixed rain and snow conditions.",
      "Ensure your bike lights are functioning properly for visibility in varying light conditions.",
      "Ride with extra caution as rain and snow can make surfaces slippery.",
      "Use fenders on your bicycle to minimize water and snow spray.",
      "Consider using wider tires with lower pressure to enhance traction in mixed conditions.",
      "Choose routes with fewer traffic intersections and areas prone to ice formation.",
      "Pack spare gloves and socks in a waterproof bag to change into if needed.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "If conditions become too challenging, seek shelter and wait until it improves.",
      "Embrace the unique experience of cycling in a combination of rain and snow.",
    ],
  },

  {
    title: "Rain and Snow",
    recommend: [
      "Exercise caution when cycling in rain and snow due to challenging road conditions.",
      "Wear waterproof and insulating clothing to stay warm and dry during your ride.",
      "Ride at a reduced speed and maintain a safe distance from other vehicles.",
      "Be aware of reduced visibility and use lights and reflectors to enhance your presence.",
      "Avoid sudden braking or sharp turns to prevent skidding on slippery surfaces.",
      "Consider using wider tires with a good tread pattern for better grip in rain and snow.",
      "Choose well-plowed routes and roads that are less prone to ice formation.",
      "Carry a small towel to wipe off any snow or moisture from your bike and components.",
      "Stay updated on weather forecasts and be prepared to adjust your route if needed.",
      "If conditions worsen or become unsafe, find a safe place to take shelter until it clears.",
    ],
  },

  {
    title: "Light Shower Snow",
    recommend: [
      "Dress in warm and waterproof layers to stay comfortable in light shower snow.",
      "Use lights and reflective gear to enhance your visibility in low-light conditions.",
      "Ride at a reduced speed and be cautious of slippery surfaces.",
      "Avoid sudden braking or sharp turns to prevent skidding on snowy patches.",
      "Consider using wider tires with lower pressure for better traction in light shower snow.",
      "Choose routes that are regularly cleared of snow and less prone to ice formation.",
      "Keep your bike clean and free from snow buildup for optimal performance.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "Carry a small brush or cloth to wipe off any snow from your bike as needed.",
      "Embrace the peacefulness and beauty of cycling in a light shower snowfall.",
    ],
  },

  {
    title: "Shower Snow",
    recommend: [
      "Exercise caution when cycling in shower snow due to potentially hazardous conditions.",
      "Wear a waterproof and insulated jacket to stay protected from the wet and cold.",
      "Use front and rear lights as well as reflective gear for increased visibility.",
      "Reduce your speed and be prepared for sudden changes in road surface conditions.",
      "Avoid areas prone to puddles and icy patches to minimize the risk of accidents.",
      "Consider using wider tires with lower pressure for better grip in shower snow.",
      "Plan your route to include sheltered areas or seek cover during intense shower snow.",
      "Check local weather radar or updates to know when it's safe to continue riding.",
      "Stay updated on weather forecasts and be prepared for changing conditions.",
      "If conditions worsen or become unsafe, find a safe place to take shelter until it clears.",
    ],
  },

  {
    title: "Heavy Shower Snow",
    recommend: [
      "Avoid cycling in heavy shower snow due to hazardous conditions and reduced visibility.",
      "Stay indoors until the shower snowfall subsides and roads are cleared.",
      "Monitor weather updates and road conditions before planning any rides.",
      "Use the time to engage in indoor exercises or cross-training activities.",
      "Clear snow from your bike and store it in a safe and dry place.",
      "If you must ride, consider using a fat bike with wider tires for better snow performance.",
      "Ensure your clothing and gear are appropriate for extreme cold and snowy conditions.",
      "Stay informed about any potential avalanche warnings or high-risk areas.",
      "Check local regulations and snow clearing schedules for bike paths and trails.",
      "Consider joining indoor cycling classes or using a stationary bike during heavy shower snow.",
    ],
  },
  {
    title: "Few Clouds",
    recommend: [
      "Check the weather forecast for any potential changes in cloud cover during your ride.",
      "Wear sunglasses to protect your eyes from the sun's glare, even with few clouds.",
      "Apply sunscreen to exposed skin to protect against harmful UV rays.",
      "Enjoy the pleasant riding conditions and the beauty of the partially clear sky.",
      "Stay hydrated by bringing a water bottle and drinking regularly during your ride.",
      "Consider wearing lightweight and breathable clothing for optimal comfort.",
      "Keep a light jacket or windbreaker handy in case the temperature drops.",
      "Choose a route that offers shade from trees or buildings during sunny intervals.",
      "Take breaks at scenic spots to appreciate the surrounding landscapes.",
      "Be aware of changing weather patterns and seek shelter if thunderstorms develop.",
    ],
  },

  {
    title: "Scattered Clouds",
    recommend: [
      "Monitor the sky for any signs of darkening clouds that may indicate approaching rain.",
      "Wear sunscreen and sunglasses to protect your skin and eyes from the sun's rays.",
      "Carry a lightweight rain jacket or poncho in case scattered clouds turn into showers.",
      "Ride with caution on wet roads if there has been recent rainfall.",
      "Take advantage of the alternating shade and sunlight provided by scattered clouds.",
      "Stay hydrated by drinking water before, during, and after your ride.",
      "Be prepared for changes in wind direction and intensity due to the shifting cloud cover.",
      "Plan your route to include sheltered areas in case you need to seek cover from rain.",
      "Enjoy the dynamic lighting conditions created by the interplay of sun and clouds.",
      "Check the weather radar for any potential storm cells moving towards your location.",
    ],
  },

  {
    title: "Broken Clouds",
    recommend: [
      "Dress in layers to adjust to temperature changes caused by broken cloud cover.",
      "Use a cycling app or website to track the movement of clouds and plan accordingly.",
      "Bring a light rain jacket or windbreaker to protect against sudden showers.",
      "Be mindful of gusty winds that can occur when there are gaps in the cloud cover.",
      "Stay hydrated by drinking water or sports drinks with electrolytes.",
      "Take breaks in open areas to enjoy the sun's warmth during clear intervals.",
      "Check the weather forecast for any potential changes in cloud cover or precipitation.",
      "Ride with caution on wet roads and be prepared for slippery surfaces.",
      "Consider using a cap or headband to keep your head warm during cooler periods.",
      "Appreciate the ever-changing patterns and textures created by broken cloud formations.",
    ],
  },

  {
    title: "Overcast Clouds",
    recommend: [
      "Wear bright or reflective clothing to enhance your visibility in low light conditions.",
      "Use front and rear lights to ensure you're visible to other road users.",
      "Carry a waterproof jacket or vest to protect against light drizzle or mist.",
      "Choose well-lit and familiar routes when riding in overcast conditions.",
      "Stay focused and alert as reduced visibility may make it harder to spot hazards.",
      "Take extra care when crossing intersections and interacting with traffic.",
      "Consider using yellow-tinted or clear lens glasses for improved contrast.",
      "Ride with a slightly lower tire pressure to increase traction on potentially wet roads.",
      "Be prepared for cooler temperatures and adjust your clothing accordingly.",
      "Take breaks in covered areas to rest and recharge during your ride.",
    ],
  },
];

export const ideas = [
  "Don't miss out on",
  "Today's top pick",
  "Weather hack",
  "Get ready for",
  "Stay stylish with",
  "Upgrade your day with",
  "Beat the weather with",
  "Get cozy with",
  "Embrace the weather with",
];
