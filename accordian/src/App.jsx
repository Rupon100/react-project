import { useState } from 'react';
import data from './data';

const App = () => {

  const [selected, setSelected] = useState(null);
  const toggle = (getCurrentId) => {
     setSelected(getCurrentId);
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-[550px] border-2 border-sky-950 p-6 rounded">
          {
            data && data.length > 0 ?
              
              data.map(dataItem => (
                <div key={dataItem.id} className='bg-sky-900 rounded m-2 p-2 text-white w-[400px]'>
                  <div onClick={() => toggle(dataItem.id)} className='flex justify-between cursor-pointer '>
                    <h3>{dataItem.question}</h3>
                    <span>{selected == dataItem.id ? '-' : '+'}</span>
                  </div>
                  {
                    selected === dataItem.id ? (
                      <div className='text-sm  transition-all '>{dataItem.answer}</div>
                    ) : null
                  }
                </div>
              ))
              
            : <h1>No data found!</h1>
          }
      </div>
    </div>
  );
};

export default App;