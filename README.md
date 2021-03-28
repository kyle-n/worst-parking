# worst-parking

Simple React/Node web app to search the worst parking lots at any given location.

## Installing

```bash
git clone git@github.com:kyle-n/worst-parking.git
cd worst-parking
npm i
npm start
```

The scripts will run the server and open the frontend in your default browser.

## Features cut for time

I tried to stick as close as I could to one hour. In real development environments, of course you don't have unlimited time. Here are some features cut for time:

- Storing API keys in environmental vars on the backend
- Validation for the `location` query parameter when searching Yelp
- API error handling
- A reusable CSS layout system instead of inline styling
- Debouncing searches
- Backend functional tests
- Frontend unit tests

Credits: Based off [burkeholland/express-react-starter](https://github.com/burkeholland/express-react-starter).
