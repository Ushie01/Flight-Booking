
type fieldProps = {
  fieldName: string;
  icon: React.ReactNode;
  state: string;
  stateCode: string;
  airportName: string;
}

export const InputField = ({fieldName, icon, state, stateCode, airportName}: fieldProps) => {
  return (
    <div className='flex flex-row rounded-lg border'>
      <div className='flex flex-col items-start justify-center -mt-12 ml-2 w-2/12 p-2'>
        <p className='bg-white text-md p-1 text-gray-500'>{fieldName}</p>
        {icon}
      </div>
      <div className='flex flex-col items-start justify-start pt-3 pr-3 pb-3 w-10/12'>
        <div className='flex flex-row items-center justify-start'>
          <p className='font-extrabold text-xl'>{state}</p>
          <p className='text-gray-600 text-md ml-2 mt-1'>{stateCode}</p>
        </div>
        <input
          type="text"
          placeholder='Indira Gandhi International Airport'
          value={airportName}
          className='w-full'
        />
      </div>
    </div>
  );
};


export const InputFieldForm = () => {
  return (
    <div className="flex flex-col items-start justify-start border p-2 rounded-lg">
      <p className="bg-white text-md p-1 -mt-6 text-gray-500">Departure</p>
      {/* <input type="date" className="" /> */}
      <div className="flex flex-row items-start justify-start h-6 w-6" >
        <input type="date" className=""/>
        <p>4/4/2022</p>
      </div>
    </div>
  )
}