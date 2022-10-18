import React, { useContext, useState, } from "react";
import FormContext from "../context/FormContext";

function Form() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [location, setLocation] = useState('');
	const [module, setModule] = useState('');

	const { addData } = useContext(FormContext);

	const handleClick = (event) => {
    event.preventDefault();
    const personalInfo = {
      name,
      age,
      location,
      module,
    };
    addData(personalInfo);
  };


	return (
		<form className="form">
			<fieldset className="personal-info">
				<legend>
					Dados Pessoais
				</legend>
				<label htmlFor='name'>
					<input
						type='text'
						id='name'
						value={name}
						placeholder='Digite seu nome'
						onChange={({ target }) => setName(target.value)} />
				</label>
				<br />
				<label htmlFor='age'>
					<input
						type='text'
						id='age'
						value={age}
						placeholder='Digite sua idade'
						onChange={({ target }) => setAge(target.value)} />
				</label>
				<br />
				<label htmlFor='location'>
					<input
						type='text'
						id='location'
						value={location}
						placeholder='Digite sua cidade'
						onChange={({ target }) => setLocation(target.value)} />
				</label>
			</fieldset>
			<fieldset className="module-info">
				<legend>
					Módulo
				</legend>
				<label htmlFor='fundamentals'>
					<input
						type='radio'
						id='fundamentals'
						value='Fundamentos'
						checked={module === 'Fundamentos'}
						onChange={({ target }) => setModule(target.value)} />
					Fundamentos
				</label>
				<label htmlFor='frontend'>
					<input
						type='radio'
						id='frontend'
						value='Front-end'
						checked={module === 'Front-end'}
						onChange={({ target }) => setModule(target.value)} />
					Fron-end
				</label>
				<label htmlFor="backend">
					<input
						type="radio"
						id="backend"
						name="module"
						value="Back-end"
						checked={module === 'Back-end'}
						onChange={({ target }) => setModule(target.value)}/>
						Back-end
				</label>
				<label htmlFor="cs">
					<input
						type="radio"
						id="cs"
						name="module"
						value="Ciência da computação"
						checked={module === 'Ciência da computação'}
						onChange={({ target }) => setModule(target.value)}/>
					Ciência da computação
				</label>
			</fieldset>
			<button
        type="submit"
				className="btn-submit"
        onClick={ handleClick }
      >
        Enviar
      </button>
		</form>
	);

}
export default Form;

/*__________________________________________________________________________________________________________________________
Acima, foi criado o estado name, por meio do useState() e a função setName, que é utilizada para alterar o valor de name.

O input será responsável por capturar o nome da pessoa , onde o value será o estado name e a função onChange será o setName.
Dessa forma, tudo que for digitado no input será armazenado no estado name. O processo foi repetido para os inputs de idade 
e cidade.

Ao clicar no botão, os dados que foram inseridos no formulário devem ser salvos no contexto da aplicação.O componente que irá 
renderizar essa lista que deve recuperar os dados do contexto por meio de hooks.
_______________________________________________________________________________________________________________________*/
