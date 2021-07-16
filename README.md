# ☁️ Weather App

This is an application for searching for basic weather information from a current point marked in an interactive map.

By clicking in a 'search' button we'll get a list of 15 nearest cities from that previously placed point.

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install all dependencies that we need.
Once you have it, run this command below:

```bash
$ yarn

or

$ yarn install
```

## Usage

⚠️ Before usage you'll need an App ID key by signing up on [OpenWeather](https://home.openweathermap.org/users/sign_up)

## Running

After you have installed all the dependencies by running command above, you'll be able to run this:

```
$ yarn dev
```

Place [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technical

- NextJS
- Styled Components for styling
- Axios for HTTP client
- Leaflet for map handling

## Authors and acknowledgment

📃 Gustavo Manca - [LinkedIn](https://linkedin.com/in/gustavomanca) | [GitHub](https://github.com/gustavomanca)

This application was started from a [boilerplate](https://github.com/colbyfayock/next-leaflet-starter) created by [Colby Fayock](https://github.com/colbyfayock). 🙏🏻

I've had rendering issues by using [Leaflet](https://leafletjs.com/) CDN (which is recommended in their docs), then I've found this boilerplate solution using [react-leaflet](https://react-leaflet.js.org/).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

- [MIT](https://choosealicense.com/licenses/mit/)
- [Colby Fayock](https://github.com/colbyfayock)
