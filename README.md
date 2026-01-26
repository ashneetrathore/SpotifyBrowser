# :musical_note: SPOTIFY BROWSER

## :open_book: OVERVIEW
Date: February 2025\
Developer(s): Ashneet Rathore\
Based on assignment instructions from Prof. Daniel Epstein

Spotify Browser is a full-stack web application for searching and browsing Spotify content by artist, track, and album categories. The app leverages the Spotify Web API to retrieve real-time music data, presented through an intuitive, component-driven browsing interface. Users can seamlessly navigate between related results, such as exploring an artist's albums or viewing the tracks within an album. 

**Tech Stack** | Node.js (JavaScript), Express, Spotify Web API, Angular, TypeScript, HTML, CSS, Bootstrap

View more of my full-stack apps on GitHub [here](https://github.com/stars/ashneetrathore/lists/full-stack)

## :film_strip: DEMO
[Watch the demo on Youtube](https://youtu.be/Iu-WppmJ8cI)

## :classical_building: ARCHITECTURE
Implemented in **Node.js** with an **Express webserver**, the backend handles communication with the **Spotify Web API** and manages all data retrieval. When the frontend submits a search query, it sends a request to the relevant Express endpoints on the backend, which in turn sends API requests to fetch the results. The backend then forwards these raw JSON results to the frontend for processing and display.

The frontend is built with **Angular (TypeScript)**, **HTML**, and **CSS**, with pages and reusable UI widgets implemented as Angular components. Users can submit keyword-based search queries, which Angular captures and sends as HTTP requests to the backend. Angular processes the returned data from the backend into structured Typescript objects, which are then rendered by the page components using UI widgets (carousels for albums and artists or tables for track lists). Additionally, the *about* component displays user-specific information, like the Spotify profile picture and username. Some components use **Bootstrap** for styling and layout. Navigation between artist, album, and track pages is handled via Angular routing, creating a smooth user experience.

The backend also manages **OAuth 2.0 authentication** by redirecting users to Spotify for authorization, and storing the received access and refresh tokens. These tokens allow the backend to make authorized API requests on behalf of the user without exposing sensitive credentials to the frontend.

## :page_facing_up: PAGES AND FEATURES
Description of the pages in the application:
- Home Page | Displays information about the logged-in user's account and contains the main search feature, which supports keyword-based searching by artist, album, or track
- Artist Page | Shows artist details, including profile picture, popularity stats, a carousel of their albums and a table of their top tracks
- Album Page | Shows album details, including album cover, popularity, associated artist, and track list
- Track Page | Displays track details, including duration, popularity, and associated artist and album

Links within components are context-aware - clicking a track on an Artist page navigates to the corresponding Track page, clicking an artist on an Album page navigates to the corresponding Artist page, etc.

## :open_file_folder: PROJECT FILE STRUCTURE
> [!NOTE]
> The overview of the file structure is intentionally kept minimal. Additional directories/files exist in the project.
```bash
SpotifyBrowser/
│── client/                             # Contains Angular-related files
│   └── src/
│       └── app/
│           │── components/             # Contains reusable UI widgets (caraousels, tables)
│           │── data/                   # Defines Typescript classes for transforming API responses into structured objects
│           │── pages/                  # Implements page components, each with its layout and logic
│           │── services/               # Sends HTTP requests to Express endpoints
│           └── app-routing.module.ts   # Maps URL routes to Angular pages
│── webserver/                          # Contains Express/Node.js backend
│   └── routes/
│       └── index.js                    # Defines backend API routes and handles Spotify API communication
│── README.md                           # Project documentation
└── .gitignore                          # Excludes files and folders from version control
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

**4. Install dependencies in `client/`**
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
### :key: LOGIN AS SPOTIFY USER
1. After opening the application in your browser, click `Log in` in the top navigation bar.
2. Login with the Spotify account you used to create the Spotify Developer app.
3. Authorize the app to access your Spotify account.
4. Click `Load info about me` to display your profile information, including username, profile picture, and a link to your Spotify profile.

> [!NOTE]
> Steps 2 and 3 are only required the first time you log in. On subsequent visits, clicking `Log in` will automatically use your stored credentials.

### :mag: PERFORM SEARCHES
**1. Artist Search**\
  Type a keyword (e.g. artist name, album title, track title), select the *artist* option from the dropdown, and click `Search`.\
  Results are displayed in a carousel of artists. Use the ⟩ button to browse all the results, and click a result to navigate to the Artist page.

**2. Album Search**\
  Type a keyword (e.g. album title, artist name, track title), select the *album* option from the dropdown, and click `Search`.\
  Results are displayed in a carousel of albums. Use the ⟩ button to browse all the results, and click a result to navigate to the Album page.

**3. Track Search**\
  Type a keyword (e.g. track title, artist name, album title), select the *track* option from the dropdown, and click `Search`.\
  Results are displayed in a track list table, where each track links to its associated Track page, Artist page, and Album page.

> Each page contains context-aware links that allow intuitive, seamless navigation between artists, albums, and tracks. To navigate back home, click `Home` in the top navigation bar.