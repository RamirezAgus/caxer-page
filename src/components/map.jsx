import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useState } from "react";

const markers = [
  {
    id: 1,
    name: "Caxer S.A.",
    position: { lat: -34.57393625268195, lng: -58.44064125338764 },
  },
];

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <section className="w-full min-h-screen">
      <h2 className="text-center text-2xl pt-10 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Encontranos
      </h2>
      <div className="p-10">
        {isLoaded ? (
            //-34.57393625268195, -58.44064125338764
          <GoogleMap
            center={{ lat: -34.57393625268195, lng: -58.44064125338764 }}
            zoom={10}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{
              width: "100%",
              height: "90vh",
            }}
          >
            {markers.map(({ id, name, position }) => (
              <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
              >
                {activeMarker === id ? <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <div>{name}</div>
                </InfoWindowF> : null}
              </MarkerF>
            ))}
          </GoogleMap>
        ) : null}
      </div>
    </section>
  );
}
