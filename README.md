---
<div align="center">
[Timesheet](https://nishantpainter.github.io/timesheet/) is an application for managing and quickly accessing your daily work time. It has a minimalistic features set required and sleek design. Stop opening, closing your local text editor for persisting and calculating the timesheet and hours manually. <br/>Start using [Timesheet](https://nishantpainter.github.io/timesheet/) now.
</div>

# Table of Contents
- **[How to Use](https://github.com/nishantpainter/timesheet#how-to-use)**
- **[Dark Mode](https://github.com/nishantpainter/timesheet#dark-mode)**
- **[Offline Usage](https://github.com/nishantpainter/timesheet#offline-usage)**
- **[Development](https://github.com/nishantpainter/timesheet#development)**
- **[Privacy](https://github.com/nishantpainter/timesheet#privacy)** 

## How to Use
You can access the application by visiting [Website](https://nishantpainter.github.io/timesheet). The application has a features set as follows :

- **Add**, **Update** and **Delete** Timesheet lines.
- Quick overview of **Total Hours**.
- **Imperative Time :** Normal hours input will restrict you to enter the input in the form of hours.minutes. For example 1.50 will resemble 1 hour and 50 minutes. Imperative time configuration will allow you to enter time in whatever number format you prefer with a single decimal point. For example, following notation of 1 hour = 1; you can enter 0.5 for 30 minutes, 0.25 for 15 minutes and likewise you can enter the hours put in for a specific task. Checking imperative time will allow you to enter time without any restriction.
- **Download :** You can download the timesheet line summary in three formats including TXT, CSV and PDF.

## Dark Mode
The application supports switching between two different themes, i.e light theme and dark theme. You can toggle the theme by clicking the dark mode toggle icon in the toolbar.

## Offline Usage
The application is registered with service workers and behaves as a progressive web application ([PWA](https://en.wikipedia.org/wiki/Progressive_web_application)). For offline usage you can select the **Add To Home** option, while accessing application in browser, to install the application locally to your mobile devices.

## Development
The application is scaffolded using create-react-app ([CRA](https://create-react-app.dev/docs/getting-started/)) with [Typescript](https://www.typescriptlang.org/) templating. You can clone the [Timesheet](https://github.com/nishantpainter/timesheet) repository for custom development. 

## Privacy
The application makes use of local storage for persisting your work hour lines and does not store any timesheet data. The application uses Google analytics to get an overview of the application usage.
