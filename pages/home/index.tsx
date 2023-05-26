import { useState } from 'react';
import { GenericBurgerRegular } from '@heathmont/moon-icons-tw';
import { TravelAirplaneUp, TravelAirplaneDown } from '@heathmont/moon-icons-tw';
import { ArrowsSorting } from '@heathmont/moon-icons-tw';
import { ToggleNavbar } from '@/src/client/components/ToggleNav';
import { InputField } from '@/src/client/components/InputField';
import { InputFieldForm } from '@/src/client/components/InputField';


const Home = () => {
  const [objectOne, setObjectOne] = useState({ state: 'Delhi', stateCode: 'DEL', airportName: 'Indira Gandhi International Airport' });
  const [objectTwo, setObjectTwo] = useState({ state: 'Kolkata', stateCode: 'CCU', airportName: 'Subhash Chandra International Airport' });

  const handleSwitch = () => {
    const temp = { ...objectOne };
    setObjectOne({ ...objectTwo });
    setObjectTwo(temp);
  };

  return (
    <div className='flex flex-col items-center justify-center p-4 bg-gray-100'>
      <nav className="flex flex-row items-center justify-between w-full">
        <div></div>
        <p className="text-2xl font-bold ml-10">Book Flight</p>
        <GenericBurgerRegular width={40} height={40} color='black' />
      </nav>
      <ToggleNavbar />
      <div className='p-4 bg-white rounded-lg mt-7 w-full'>
        <div className='relative w-full space-y-4'>
          <InputField
            fieldName='From'
            icon={<TravelAirplaneUp height={35} width={35} className='-mt-1' />}
            state={objectOne.state}
            stateCode={objectOne.stateCode}
            airportName={objectOne.airportName}
          />
          <div className='flex items-start justify-end'>
            <button onClick={handleSwitch} className='absolute border boder-2 rounded-full p-2 -mt-7 mr-5'>
              <ArrowsSorting height={40} width={40} className=''/>
            </button>
          </div>
          <InputField
            fieldName='To'
            icon={<TravelAirplaneDown height={35} width={35} className='-mt-1' />}
            state={objectTwo.state}
            stateCode={objectTwo.stateCode}
            airportName={objectTwo.airportName}
          />
          <div className='mt-8'>
            <InputFieldForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
