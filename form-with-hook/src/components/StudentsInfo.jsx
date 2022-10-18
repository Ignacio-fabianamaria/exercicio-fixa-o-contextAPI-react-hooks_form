import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function StudentsInfo() {
  const { data } = useContext(FormContext);
  return (
    <ul className='students-info'>
      { data.map((student, index) => (
        <li key={ index }>
          <p>
            { `Nome: ${student.name}` }
          </p>
          <p>
            { `Idade: ${student.age}` }
          </p>
          <p>
            { `Cidade/UF: ${student.location}` }
          </p>
          <p>
            { `Módulo: ${student.module}` }
          </p>
        </li>
      ))}
    </ul>
  );
}

export default StudentsInfo;

/*_______________________________________________________________________________________________________________________

Esse componente precisa acessar o valor de data, que está armazenado em FormContext. Para acessá-lo, precisamos do hook 
useContext().
Com o acesso às informações de data, basta renderizar essa lista.
_________________________________________________________________________________________________________________________*/