// async function getData() {
//     const url = 'https://api.npoint.io/7bbd3a59c401f616bb89';
//     try {
//       console.log('Fetching data from:', url);
//       const response = await fetch(url);
//       console.log('Response status:', response.status);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const jsonResponse = await response.json();
//       console.log('JSON Response:', jsonResponse);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   getData();
  
document.addEventListener("DOMContentLoaded", () => {
  fetchCityData();
});

async function fetchCityData() {
  try {
    const response = await fetch('https://api.npoint.io/7bbd3a59c401f616bb89');
    if (!response.ok) {
      throw new Error('Failed to fetch city data');
    }
    const data = await response.json();
    displayCityData(data);
  } catch (error) {
    console.error('Error fetching city data:', error.message);
  }
}

function displayCityData(data) {
  const cityContainer = document.getElementById('cityContainer');

  data.forEach(city => {
    const cityCard = document.createElement('div');
    cityCard.classList.add('city-card');

    const cityName = document.createElement('h2');
    cityName.textContent = city.city;

    const state = document.createElement('p');
    state.textContent = `State: ${city.state}`;

    const district = document.createElement('p');
    district.textContent = `District: ${city.district}`;

    const population = document.createElement('p');
    population.textContent = `Population: ${city.population}`;

    cityCard.appendChild(cityName);
    cityCard.appendChild(state);
    cityCard.appendChild(district);
    cityCard.appendChild(population);

    cityContainer.appendChild(cityCard);
  });
}
