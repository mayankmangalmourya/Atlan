
# SQL-EDITOR

### Description
A web-based application capable of running SQL queries and displaying the results of said query. The application include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.  This particular project is built using **[React](https://reactjs.org/)**(Yarn) and the **[React Bootstrap](https://react-bootstrap.github.io/)** front-end framework. It originally contains a data dump borrowed from [this](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv) repository.

## Features

1. **Tab Based Interface**
- Easy-to-use.
- Allows user to switch between multiple queries at once.
- Table _and_ run a query at the same time
- Don't have to reload the page, we can jump right or left.
- Application contains feature of recent tab openning System.
3. **Dynamic Table Views**
- Keep an application light-weight, and fast.
- Initailly only table name fetched not a table data. when click on table it will fetched table data.
- It include the seaching feature in fetched record's
4. **Result Statistics**
- Alert about time taken to complete a query
- Measure & Check the performance of the system.
- Advance Feature of View Record in different amount of row's 10,20,50,100.
5. **Ability to save the results as JSON, XML, or CSV**
- Save the results of a query in JSON, XML, and CSV formats.
- Fuctionality of Saving Query So user don't have to type it twice.


## Run Locally

Clone the project

```bash
  git clone https://github.com/mayankmangalmourya/Atlan.git 
```

Go to the project directory

```bash
  cd Atlan
```

Install dependencies

```bash
  yarn add
```

Start the server

```bash
  yarn start
```

## Performance Audit

### **[GTmetrix](https://gtmetrix.com/)**
- The fully loaded time is 744ms seconds, with the first contentful paint at 542 ms.
![image](https://github.com/mayankmangalmourya/Atlan/assets/87426167/36e15756-26f4-45bb-9633-d9380b5798b1)

### **[Performance Metrix](https://gtmetrix.com/)**
![image](https://github.com/mayankmangalmourya/Atlan/assets/87426167/2ed2d2fc-1f5f-4388-96a5-0e6100ede26f)


### **[web.dev](https://web.dev/measure)**
- The load time according to web.dev is **2.2 seconds**. The site also scores **96 perc performance** and **100 points in best practices**. The exact metrics are:
![image](https://github.com/mayankmangalmourya/Atlan/assets/87426167/62481d43-aacf-466c-83ba-a8b62633a2fb)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Optimisations
### `**dynamic fetching**`
- The rows of a table are fetched only when the user requests it. Not a second before. It save a lot of time.
### `**Reduced the number of API calls**`
- Reduced the No. of API calls, by using the `useEffect` hook, which almost save 2 seconds after each click.
### `**Extensive use of the `useMemo` hook**`
- It reduces the number of re-computations by storing the results of computations with the same dependencies. The data of tables is entirely 'memorised'.
### `**Keeping the number of state changes as low as possible**`
- While this has been accompanied by a slight reduction in the feature set, it has more than made up for it in the load time of a re-render.
### `**Intelligent use of the React-Bootstrap library.**`
  - import { Alert } from "react-bootstrap";
  - import Alert from "react-bootstrap/Alert";   
Second one is more optimal as compared to first.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
