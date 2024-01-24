import Input from "./components/Input";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-12 p-3">
      <h1 className="text-gray-700 font-bold text-2xl mb-6">Clones input</h1>
      <div className="flex flex-col gap-3 mt-2 w-96">
        <Input id="name" type="text" placeholder="Nome:" required={true}/>
        <Input id="email" type="email" placeholder="E-mail:" required={true} />
      </div>
    </div>
  );
}

export default App;
