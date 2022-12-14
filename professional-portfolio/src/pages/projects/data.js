import bubbleDungeonz from "./images/bubble-dungeonz.png";
import brewfinder from "./images/brewfinder.png";
import kissTheCook from "./images/kiss-the-cook.png";
import employeeTracker from "./images/mysqlEmployeeTracker.png";
import weatherApp from "./images/weatherApp.png";
import readmeGen from "./images/READMEgen.png";

const projects = [
  {
    index: 0,
    imagePath: bubbleDungeonz,
    alt: "Bubble Arcade is a game hosting platform that includes user authentication and a chat feature.",
    title: "Bubble Arcade",
    description:
      "A full stack MERN application for hosting simple online games and live chat.",
    appLink: "https://bubbledungeonz.herokuapp.com/",
    gitHub: "https://github.com/relero90/bubbleDungeonz",
  },
  {
    index: 1,
    imagePath: kissTheCook,
    alt: "The Kiss the Cook app features a title header and navigation bar aside. The screenshot shows the All Recipes page which includes clickable recipe cards with embedded images and titles.",
    title: "Kiss the Cook",
    description:
      "A full stack recipe application for the blog-averse home cook. Featuring a MySQL database, ExpressJS server, NodeJS front end with the Handlebars template engine.",
    appLink: "https://kissthecook.herokuapp.com/",
    gitHub: "https://github.com/relero90/kiss-the-cook",
  },
  {
    index: 2,
    imagePath: employeeTracker,
    alt: "This is a command line app designed to help business owners view and manage employee data for departments, roles, and employees to more easily organize and plan. The user can add information to and delete information from the SQL database. Existing data for departments, roles, or employees can be viewed as a formatted table in the command line.",
    title: "MySQL Employee Tracker",
    description:
      "A command-line application that establishes and manages a company's MySQL database using NodeJS and the Inquirer npm package.",
    appLink:
      "https://external.ink/?to=/watch.screencastify.com/v/IIiLumMhl7kYC7Hjg83M",
    gitHub: "https://github.com/relero90/employee-tracker-app",
  },
  {
    index: 3,
    imagePath: weatherApp,
    alt: "This is an app that allows a user to enter a city of her/his choice and receive current and forecast weather conditions information for that city. Current weather information provided includes temperature, wind speed, humidity, and UV index (dynamically color-coded for severity). Forecast weather information is available for 5 days and includes temperature, wind speed, humidity, and feels like. The app stores user search history in localStorage and renders buttons to allow easy access for old search results. Simply click on a pink search history button to view current and forecast conditions for that city",
    title: "Weather Dashboard",
    description:
      "A web application that makes a call to the Open Weather API to display city-specific data to a user.",
    appLink: "https://relero90.github.io/bc-weather-app/",
    gitHub: "https://github.com/relero90/bc-weather-app",
  },
  // {
  //   index: 3,
  //   imagePath: readmeGen,
  //   alt: "This is an app designed to dynamically create README.md files based on user inputs. The generated files will include a title, description, and table of contents with links to each of the following sections: Installation, Usage, Licensing, Credits, How to Contribute, Testing, Questions",
  //   title: "Command-Line README Generator",
  //   description: "",
  //   appLink: "https://watch.screencastify.com/v/PtzbW6oYx0rRvAcWve01",
  //   gitHub: "https://github.com/relero90/README-generator",
  // },
  // {
  //   index: 5,
  //   imagePath: brewfinder,
  //   alt: "The Brewfinder app features a title header, a search aside, a brewery display, and a weather forecaster. Users can enter a city and state and click a button to view randomized brewery data for that city.",
  //   title: "Brewfinder",
  //   appLink: "https://relero90.github.io/brewfinder/",
  //   gitHub: "https://github.com/relero90/brewfinder",
  // },
];

export default projects;
