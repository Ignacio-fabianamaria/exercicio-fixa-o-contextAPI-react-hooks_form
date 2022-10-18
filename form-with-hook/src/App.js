import Form from "./components/Form";
import StudentsInfo from "./components/StudentsInfo";
import { GiNotebook } from 'react-icons/gi';

import './App.css'


function App() {
  return (
    <div className="App">
      <section className="cadastro">
      <section className="title">
      <h1><strong>Cadastro de Estudantes</strong></h1>
      <GiNotebook style={{ fontSize: '50px', color: 'white' }} />
      </section>
      <Form />
      </section>
      <StudentsInfo />
    </div>
  );
}

export default App;