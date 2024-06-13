const cardWeatherElGen = (cityCard, temperatureCard, weatherCondCard) => {
    const wrapperEl = document.createElement('div');
    const imageEl = document.createElement('image');
    const cityEl = document.createElement('h2');
    const temperatureEl = document.createElement('p');
    const weatherConditionsEl = document.createElement('p');

    wrapperEl.className = 'card--container';
    imageEl.className = 'card--image';
    imageEl.scr = '';
    imageEl.alt = 'description';
    cityEl.className = cityCard.name;
    cityEl.textContent = '';
    temperatureEl.className = temperatureCard.temperature;
    temperatureEl.textContent = '';
    weatherConditionsEl.className = weatherCondCard.conditions;
    weatherConditionsEl.textContent = '';

    wrapperEl.append(imageEl, cityEl, temperatureEl, weatherConditionsEl);
    return wrapperEl;
}

