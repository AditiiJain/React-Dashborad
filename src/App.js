import './App.css';
// import keys from '../config';
const keys = {
  apiKey: "YOUR_API_KEY",
  spreadsheetId: "1kVwf5oIZMPqY4Y2WRj9NzeDgy3zBBj-px-Hl41sFlT8",
};
function App() {
  return (
    <h1 className="text-3xl font-bold underline text-gray-500" >
  {keys.apiKey}
  </h1>
  );
}

export default App;
