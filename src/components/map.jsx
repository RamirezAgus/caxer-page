import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  return (
    <section className="w-full min-h-screen">
      <h2 className="text-center text-2xl pt-10 pb-5 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Encontranos
      </h2>
      <MapContainer
        center={[-34.57390985191691, -58.440523158065105]}
        zoom={13}
        style={{ height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-34.57390985191691, -58.440523158065105]}>
          <Popup>
            Caxer S.A. <br /> Zapata 286.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
