import Corevalues from '../components/Corevalues';
import StayinTouch from '../components/StayinTouch';
import Whatwedo from '../components/Whatwedo';

export default function Home() {
  return (
    <main className="mt-[35%] sm:mt-8">
      <Corevalues />
      <Whatwedo />
      <StayinTouch />
    </main>
  );
}
