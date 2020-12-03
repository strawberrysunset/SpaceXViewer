# 🚀 SpaceX Launch Viewer (Tech Test)

The task was to create a React application that will consume data from the SpaceX public API. The application must retrieve historic and future SpaceX launches and present them in a list view.

[**Live Link**](https://strawberrysunset.github/build)

This application was written in TypeScript, unit tested with Jest and was checked against the a11y accessibility checklist. 

## 3rd Party Packages Used: 
- **React Query** - Server state management.
- **Styled Components** - CSS-in-JS styling solution.
- **Polished** - CSS-in-JS utility.
- **Moment** - Date formatting.
- **Prettier** - Code formatting/consistency.

### Additional Notes
 - I wasn't sure if the number on each launch card referred to the flight number or its position in the list. I opted to use the flight number which is why some launch numbers appear out of order when they are sorted by date.
 - The Adobe Sketch Cloud inspector gave decimal pixel values which is why my CSS has decimal pixel values. 

### Future Improvements
Since we can't be 100% sure that the data returned from the SpaceX API will be what we expect, I would add a run-time check that would throw an error if the fetched API data didn't contain the fields/values required by the application.

## Installation Instructions
### Clone the repository
```bash
git clone https://www.github.com/strawberrysunset/SpaceXViewer.git
```
### Install dependencies
```bash
cd SpaceXViewer
npm i
```
### Create and serve production build
```bash
npm run build
npx serve -s build
```



