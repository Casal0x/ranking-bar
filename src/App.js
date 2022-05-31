import { Route, Routes } from 'react-router-dom';
import ExampleLayout from './layouts/ExampleLayout';
import './App.css';
import ExampleView from './views/ExampleView';
import ExampleAboutView from './views/ExampleView/ExampleAboutView';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/about" element={<div>about</div>} />

        {/* Como setear Layouts de ejemplo! */}
        <Route element={<ExampleLayout />}>
          <Route path="/exampleLayout/" index element={<ExampleView />} />
          <Route path="/exampleLayout/about" element={<ExampleAboutView />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
