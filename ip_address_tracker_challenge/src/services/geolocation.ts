type Location = {
  ip: string;
  address: string;
  timezone: string;
  isp: string;
  coords: [number, number];
};

type LocationAPIPayload = {
  ip: string;
  isp: string;
  location: {
    city: string;
    country: string;
    lat: number;
    lng: number;
    region: string;
    timezone: string;
  };
};
export async function fetchUserGeolocationInfo(
  ipAddress: string | null = null,
) {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${
      process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY
    }${ipAddress ? `&ipAddress=${ipAddress}` : ''}`,
  );
  const data = (await response.json()) as LocationAPIPayload;

  const { ip, isp, location } = data;

  const userLocation: Location = {
    ip,
    isp,
    address: `${location.city}, ${location.region}, ${location.country}`,
    timezone: location.timezone,
    coords: [location.lat, location.lng],
  };

  return userLocation;
}
