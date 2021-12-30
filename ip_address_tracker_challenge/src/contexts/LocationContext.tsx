import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { fetchUserGeolocationInfo } from '../services/geolocation';

type Location = {
  ip: string;
  address: string;
  timezone: string;
  isp: string;
  coords: [number, number];
};

type LocationContextData = {
  isLoading: boolean;
  location: Location;
  searchLocationByIP: (ipAddress: string) => void;
};

interface LocationProviderProps {
  children: ReactNode;
}

const LocationContext = createContext({} as LocationContextData);

export default function LocationProvider({ children }: LocationProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<Location>({
    ip: '',
    address: '',
    timezone: '',
    isp: '',
    coords: [0, 0],
  });

  useEffect(() => {
    async function initialFetch() {
      try {
        setIsLoading(true);

        const userLocation = await fetchUserGeolocationInfo();

        setLocation(userLocation);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    initialFetch();
  }, []);

  const value = useMemo(() => {
    async function searchLocationByIP(ipAddress: string) {
      try {
        setIsLoading(true);

        const userLocation = await fetchUserGeolocationInfo(ipAddress);

        setLocation(userLocation);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    return {
      isLoading,
      location,
      searchLocationByIP,
    };
  }, [isLoading, location]);

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocationContext = () => useContext(LocationContext);
