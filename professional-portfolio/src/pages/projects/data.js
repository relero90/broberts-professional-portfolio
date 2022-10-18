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
    alt: "Bubble Dungeonz is a game hosting platform that includes user authentication and a chat feature.",
    title: "Bubble Dungeonz",
    description:
      "A full stack MERN application for hosting simple online games and live chat.",
    appLink: "https://bubbledungeonz.herokuapp.com/",
    gitHub: "https://github.com/l1keafox/bubbleDungeonz",
  },
  {
    index: 1,
    imagePath: kissTheCook,
    alt: "The Kiss the Cook app features a title header and navigation bar aside. The screenshot shows the All Recipes page which includes clickable recipe cards with embedded images and titles.",
    title: "Kiss the Cook",
    description:
      "A full stack recipe app for the blog-averse home cook featuring a MySQL database, ExpressJS server, Node, and Handlebars template engine.",
    appLink: "https://kiss-the-cook.herokuapp.com/",
    gitHub: "https://github.com/madrodgerflynn/Kiss_The_Cook",
  },
  {
    index: 2,
    imagePath: employeeTracker,
    alt: "This is a command line app designed to help business owners view and manage employee data for departments, roles, and employees to more easily organize and plan. The user can add information to and delete information from the SQL database. Existing data for departments, roles, or employees can be viewed as a formatted table in the command line.",
    title: "MySQL Employee Tracker App",
    description:
      "A command-line application that establishes and manages a company's MySQL database using NodeJS and the Inquirer npm package.",
    appLink:
      "https://external.ink/?to=/watch.screencastify.com/v/IIiLumMhl7kYC7Hjg83M",
    gitHub: "https://github.com/relero90/employee-tracker-app",
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
  //   index: 4,
  //   imagePath: weatherApp,
  //   alt: "This is an app that allows a user to enter a city of her/his choice and receive current and forecast weather conditions information for that city. Current weather information provided includes temperature, wind speed, humidity, and UV index (dynamically color-coded for severity). Forecast weather information is available for 5 days and includes temperature, wind speed, humidity, and feels like. The app stores user search history in localStorage and renders buttons to allow easy access for old search results. Simply click on a pink search history button to view current and forecast conditions for that city",
  //   title: "Weather App",
  //   appLink: "https://relero90.github.io/bc-weather-app/",
  //   gitHub: "https://github.com/relero90/bc-weather-app",
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
