import { GenericBurgerRegular } from '@heathmont/moon-icons-tw';
import { ToggleNavbar } from '@/src/client/components/ToggleNav';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-gray-100'>
      <nav className="flex flex-row items-center justify-between w-full">
        <div></div>
        <p className="text-2xl font-bold ml-10">Book Flight</p>
        <GenericBurgerRegular width={40} height={40} color='black' />
      </nav>
      <ToggleNavbar />
    </div>
  );
};

export default Home;
