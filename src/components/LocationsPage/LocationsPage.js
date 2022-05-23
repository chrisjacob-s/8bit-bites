import "./LocationsPage.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LocationsPage() {
  return (
    <section className="app__map-section">
      <div className="app__location whittier-location">
        <div className="app__description">
          <h2>8-Bit Bites</h2>
          <h2>Whittier</h2>
          <p>6741 Bright Ave</p>
          <p>Whittier, California</p>
          <p>(562) 632-1445</p>
          <a
            href="https://www.google.com/maps/place/Guildhall/@33.9795942,-118.0364961,21z/data=!4m5!3m4!1s0x80c2d3d5551ecb09:0x805e3b2a3b7716a0!8m2!3d33.9796324!4d-118.0364481"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="custom__button"> Directions</button>
          </a>
        </div>
        <div className="app__map">
          <MapContainer
            center={[33.9795942, -118.0364961]}
            zoom={20}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[33.9795942, -118.0364961]}>
              <Popup>
                8-Bit Bites <br /> Whittier Location
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="app__location burbank-location">
        <div className="app__map">
          <MapContainer
            center={[34.18446, -118.34987]}
            zoom={20}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[34.18446, -118.34987]}>
              <Popup>
                8-Bit Bites <br /> Burbank Location
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="app__description">
          <h2>8-Bit Bites</h2>
          <h2>Burbank</h2>
          <p>3516 W Victory Blvd</p>
          <p>Burbank, California</p>
          <p>(818) 561-4552</p>
          <a
            href="https://www.google.com/maps/place/Guildhall/@34.184533,-118.3520822,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2959f62d7f819:0x2055f4f869447712!8m2!3d34.1846094!4d-118.3498803"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="custom__button"> Directions</button>
          </a>
        </div>
      </div>
    </section>
  );
}
