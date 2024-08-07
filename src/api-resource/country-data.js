// CountryData.js
import React, { useState, useEffect } from 'react';
import { requestOptions } from './api-config';
// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';

const CountryData = () => {
  const [country, setCountry] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  // useEffect(() => {
  //   // Inicializa o JavaScript do Materialize CSS
  //   M.AutoInit();
  // }, []);

  /**
   * Essa função é chamada para buscar os dados do país
   * @param {string} countryName Refere-se ao nome do país
   */
  const fetchCountryData = async (countryName) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/paises/{paises}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (country) {
      fetchCountryData(country);
    }
  }, [country]);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="container">
      <h1>Buscar Dados do País</h1>
      <input
        type="text"
        name="country"
        value={country}
        onChange={handleChange}
        placeholder="Digite o nome do país"
        className="input-field"
      />
      
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Erro: {error.message}</p>
      ) : (
        data && (
        
          <div>
            <h2>Resultados:</h2>
            <h1 className="center-align">Selecione um País</h1>

            <div className=''>
              <div className='input-field col s12'>
                <select>
                {
                  data.map((nome,index) =>(
                  <option key={index} value={data[index].nome.abreviado} className='waves-effect waves-light btn'>
                        {data[index].nome.abreviado}
                  </option>
                        
                  ))
                }
                </select>
                <label>Materialize Select</label>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CountryData;
