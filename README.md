# stateline-news

Hey there! stateline-news is a fun little project I worked on to create a web application that serves as a directory for news publications from different states across the United States. It fetches data from the Library of Congress API and lets you search and filter the news sources based on their state and LCCN (Library of Congress Control Number). The app also has a community page where you can register yourself and see a list of other registered community members.

access it [here](https://stateline-news.vercel.app/)

## About the Project

This project was a technical assessment for me to showcase my skills in building web apps using modern front-end technologies. I worked on it all by myself, putting my React knowledge to good use and integrating with external APIs and databases.
The main goal was to create a user-friendly interface that makes it easy for users to browse and search for news publications from different states. I added a search and filter functionality to enhance the user experience and make it simpler to find specific news sources.
I also incorporated a community feature where users can register themselves and become part of the Stateline News community. This feature got me working with MongoDB as well for the backend portion!

## Features

- **News Directory**: The main page displays a table of news publications fetched from the Library of Congress API. The table includes columns for the title, LCCN, and the state where the newspaper is published.
- **Search and Filter**: Users can search for news publications by state and LCCN using the provided search and filter functionality.
- **Community Page**: The app includes a separate page called "Community" where users can add their name and email address to a backend database (MongoDB).
- **Community Member List**: The Community page displays a table listing all registered community members with their name, email, and the date they joined.

## Technologies Used

- **Vite**: A modern build tool that provides a fast and lean development experience for web apps.
- **React**: A popular JavaScript library for building user interfaces.
- **Library of Congress API**: The data source for retrieving news publication information.
- **MongoDB**: A NoSQL database used to store and retrieve community member data.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Library of Congress API](https://loc.gov/apis/)
- [MongoDB](https://www.mongodb.com/)
