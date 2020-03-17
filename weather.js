class Weather {
  constructor(city, state) {
    this.apiKey = 'c7f5ae0b9963e94ddbd090bf647d9e12';
    this.city = city;
    this.state - state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)

    const responseData = await response.json();

    return responseData
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}