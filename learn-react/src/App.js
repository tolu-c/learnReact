import './App.css';

function App() {
  return (
    <div className="container p-4 mx-auto bg-gray-600 text-gray-200 shadow-md shadow-blue-200">
      <h1 className='capitalize text-3xl font-bold font-mono text-center'>hello world</h1>
      <p className='text-base font-semibold text-gray-900'>welcome to my world of tech. i so much love tech.</p>

      <div className='relative w-36 z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-amber-400'>
        <button className='absolute inset-0 z-10 w-full h-full capitalize text-xl font-bold bg-blue-700 text-stone-100 border-2 border-gray-600 p-4 shadow-lg'>add to bag</button>
      </div>
    </div>
  );
}

export default App;
