import { useLocationContext } from '../contexts/LocationContext';

import { Layout } from '../components/Layout';
import { MapSection } from '../components/MapSection';
import { SearchSection } from '../components/SearchSection';
import { Loading } from '../components/Loading';

export default function App() {
  const { isLoading } = useLocationContext();

  return (
    <Layout>
      {isLoading && <Loading />}
      <SearchSection />
      <MapSection />
    </Layout>
  );
}
