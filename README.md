# Speech to Text
This repository contains a simple web app that converts speech to text and saves the text to a MySQL database using a Node.js server.

## Overview
The app has two parts: the front-end and the back-end.

### Front-end
* HTML, CSS, JavaScript: The front-end provides a user interface with two buttons ("Start" and "Stop") and displays the transcribed text.
* Functionality: When you click "Start," the app starts listening to your speech. When you click "Stop," it stops listening and shows the text on the screen.

### Back-end
* Node.js and Express.js: The back-end handles requests from the front-end and saves the transcribed text to a MySQL database.
* MySQL: Stores the transcribed text.

## How It Works
1. Start Speech Recognition: Click the "Start" button to begin speech recognition.
2. Stop Speech Recognition: Click the "Stop" button to stop and display the text.
3. Save to Database: The text is sent to the server and saved in a MySQL database.

## Tech Used
* Front-end: HTML, CSS, JavaScript
* Back-end: Node.js, Express.js
* Database: MySQL

## Demo
Here’s a video showing how the Speech to Text Converter works:

https://github.com/user-attachments/assets/698f5f8c-e308-4f27-8fec-5782772ded80

