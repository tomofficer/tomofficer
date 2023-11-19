import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const FetchTesting = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setData(data), console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <>
      <Box bg="white">
        <Box>
          Testing the Fetch API since it's been a while First, check the
          console!
        </Box>
        <div>
          <h1>Countries List</h1>
          {data ? (
            <ul>
              {data.map((country, index) => (
                <li key={index}>
                  <strong>{country.name.common}</strong> - Capital:{' '}
                  {country.capital} and
                  <div style={{ color: 'red' }}>{country.flags.alt}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading countries...</p>
          )}
        </div>
      </Box>
    </>
  );
};

export default FetchTesting;
