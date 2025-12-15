# :musical_note: SPOTIFY BROWSER

## :open_book: OVERVIEW
Date: February 2025\
Developer(s): Ashneet Rathore\
Based on assignment instructions from Prof. Daniel Epstein



## :film_strip: DEMO

## :classical_building: ARCHITECTURE


## :open_file_folder: PROJECT FILE STRUCTURE
> [!NOTE]
> The file structure overview is intentionally kept minimal. Additional directories/files exist in the project.
```bash
SpotifyBrowser/
│── client/         # Contains Angular frontend for browsing music
│── webserver/      # Contains Express/Node.js backend for communicating with Spotify API
│── angular.json    # Configures Angular project
│── package.json    # Contains project dependencies
│── tsconfig.json   # Configures TypeScript compiler options
│── README.md       # Project documentation
│── .gitignore      # Excludes files and folders from version control
└── demo.gif        # GIF showing the browsing demo
```

## :hammer: CONFIGURATION
### :headphones: SPOTIFY APP SETUP
1. Create a Spotify Developer account at [https://developer.spotify.com/](https://developer.spotify.com/) or log in if an account already exists.
2. On the [Dashboard](https://developer.spotify.com/dashboard), click the `Create app` button.
3. Enter in any app name and description.
4. In the *Redirect URIs* field, enter in *http://127.0.0.1:8888/callback* and click `Add`.
5. Under the *Which API/SDKs are you planning to use?* field, select the `Web API` option.
6. Check the *Developer Terms of Service* checkbox and click `Save`. A *Client ID* and *Client Secret* should be generated under the *Basic Information* tab.

### :computer: ENVIRONMENT SETUP
**1. Clone the repository**
```bash
git clone https://github.com/ashneetrathore/SpotifyBrowser.git
```

**2. Create two configuration files in `webserver/`**

`client_secret.json` will store the Spotify API credentials generated earlier. Replace the placeholder values with the actual credentials and use the following format
```json
{
  "client_id": "INSERT CLIENT KEY HERE",
  "client_secret": "INSERT CLIENT SECRET HERE"
} 
```

`tokens.json` will store access and refresh tokens needed for authentication. It will be automatically updated once the tokens are retrieved, so use the following format
```json
{
  "access_token": null,
  "refresh_token": null
 }
```

**3. Install dependencies in `webserver/`**
```bash
cd SpotifyBrowser/webserver
npm install
```

**5. Install dependencies in `client/`**
```bash
cd SpotifyBrowser/client
npm install
```

## :rocket: EXECUTION
Start the webserver (run in `webserver/`)
```bash
npm start
```

Run the Angular client (in a separate terminal, from `client/`)
```bash
ng serve --open
```

The app will automatically open in the browser at [http://localhost:4200/](http://localhost:4200/).

## :wrench: TRY IT OUT
