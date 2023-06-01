import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Geocoder = () => {
  const ctrl = new MapBoxGeocoder({
    accessToken:
      "pk.eyJ1IjoiaGlldWJ1aTIxMTEiLCJhIjoiY2xoYnNyZTZhMDhzcDNlazFtN29sYWE2cSJ9.qoIL5LR1bQqLYKHwhN9gLA",
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);

  return null;
};

export default Geocoder;
