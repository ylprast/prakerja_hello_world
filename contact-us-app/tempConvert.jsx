import { useState } from 'react';
import '../js/custom.js'

const TemperatureConverter = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [result, setResult] = useState('');

  const convertToFahrenheit = () => {
    if (!fahrenheit) {
      setResult('Please enter a valid temperature.');
      return;
    }

    const celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    setResult(`The temperature in Celsius is: ${celsius.toFixed(2)} °C`);
  };

  return (
    <section className="section-padding">
      <div className="col-lg-6 col-12 text-center" style={{ margin: 'auto' }}>
        <div className="container">
          <div className="row">
            <div className="mb-3">
              <h1>Bored? Lets do some temperature conversion!</h1>
              <h3>Temperature Conversion</h3>
              <input
                type="number"
                id="fahrenheit"
                style={{ marginBottom: '10px' }}
                className="form-control"
                placeholder="Enter the temperature here in Fahrenheit"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
              />
              <button className="btn custom-btn" style={{ marginBottom: '20px' }} onClick={convertToFahrenheit}>
                Convert to Celsius
              </button>
              <p style={{ color: 'var(--secondary-color)' }} id="result">
                {result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemperatureConverter;
