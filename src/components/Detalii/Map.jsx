import { useRef, useState } from "react";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsIcon from '@mui/icons-material/Directions';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 47.64634117289982, lng: 23.578397855773783 };
function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const originRef = useRef();

  const calculateRoute = async () => {
    if (originRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: center,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    console.log(results);
  };

  if (!isLoaded) {
    return <div>Error</div>;
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ width: "100%", height: "90%" }}
        options={{ fullscreenControl: false, mapTypeControl: false }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
}

export default Map;
