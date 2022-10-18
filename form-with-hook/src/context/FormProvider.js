import React, {useState } from "react";
import PropTypes from 'prop-types';
import FormContext from './FormContext';


function FormProvider({ children }) {
    const [data, setData] = useState([]);
    const addData = (personalInfo) => {
        setData(data.concat(personalInfo));
      };
      const contextValue = {
        data,
        setData,
        addData,
      };
      return (<FormContext.Provider value={ contextValue }>
        {children}
      </FormContext.Provider>
    );
  }
  
  FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default FormProvider;

/*_____________________________________________________________________________________________________________________________

FormProvider.js será o responsável por armazenar as informações que serão compartilhadas entre os componentes da aplicação.
Para essa aplicação foi implementado uma função que, ao ser acionada, adiciona informações recebidas em uma lista.Neste caso,
não é possível utilizar a função setData, pois ela sobrescreve o valor de data. Como é preciso armazenar todas as informações,
a utilização da função concat se faz necessário.

Sendo assim, sempre que addData for executada o valor passado por parâmetro (um objeto contendo as informações do formulário)
irão ser concatenadas com os demais objetos que estiverem na lista data.
Também é importante definir o valor default de data, que aqui é uma lista vazia, definida por useState([]).

Com o Provider pronto, é preciso atualizar o arquivo index.js para informarmos ao React que nosso App.js poderá acessar
essas informações
_______________________________________________________________________________________________________________________________*/
