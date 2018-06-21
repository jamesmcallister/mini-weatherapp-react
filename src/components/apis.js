export const weatherApi = (city, apiKey, url) => {
  return fetch(`${url}?q=${city}&APPID=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      return {
        location: data.name,
        description: data.weather[0].description,
        temp: {
          current: data.main.temp,
          min: data.main.temp_min,
          max: data.main.temp_max
        }
      };
    });
};

export function imagesApi(city, apiKey, url) {
  const fetchUrl = `${url}?query=${city}&client_id=${apiKey}`;

  return fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
      return data.results.map(function(image) {
        return {
          id: image.id,
          description: image.description,
          color: image.color,
          image: image.urls.regular,
          thumb: image.urls.thumb,
          user: {
            name: image.user.name,
            url: image.user.links.self
          }
        };
      });
    });
}
