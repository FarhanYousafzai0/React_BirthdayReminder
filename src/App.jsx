import React, { useState } from 'react'; // Import useState hook
import './globals.css';
import Singlebirthday from './Singlebirthday';
import { birthData } from './birthdayData';

const App = () => {
  // Correct the typo: useState instead of useSate
  const [myData, setData] = useState(birthData);

  const removeData = () => {
   if(myData.length == 0){
    setData(birthData)
   }else{
    setData([]);
   }
  };


  const deleSingleBirth = (id)=>{

const newData = myData.filter((item,index)=>{

  return item.id !== id;
})

setData(newData)
  }

  return (
    <>
      <div className="container mx-auto border-0 rounded-md shadow-lg w-full md:w-[75%] lg:w-[45%] p-4">
        <div className="text-center uppercase text-4xl" >
          {myData.length} birthdays today
        </div>

        {myData.map((item, index) => {
          return <Singlebirthday key={item.id} {...item} remove={deleSingleBirth} />;
        })}

        {/* Corrected button */}
        <button
          onClick={removeData}
          className={`cursor-pointer my-3 w-full px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 ${
            myData.length === 0
              ? 'bg-gradient-to-r from-green-500 to-green-700 animate-pulse hover:from-green-700 hover:to-green-500'
              : 'bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 '
          }`}
        >
         
      {myData.length === 0 ? 'Refresh All' : 'Remove All'}
        </button>
      </div>
    </>
  );
};

export default App;
