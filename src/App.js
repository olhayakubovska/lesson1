import logo from "./logo.svg";
import "./App.css";

function App() {
  const currentYear = new Date().getFullYear(); // Императивный стиль: вручную получаем текущий год

  return (
    // Декларативный стиль: описание того, что нужно отрендерить, без указания, как обновлять DOM

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {currentYear}
      </header>
    </div>
  );
}

export default App;

// function App() {
//   const currentYear = new Date().getFullYear(); // Императивное получение текущего года

//   return React.createElement(
//     'div',
//     { className: 'App' },
//     React.createElement(
//       'header',
//       { className: 'App-header' },
//       React.createElement('p', null, 'Edit src/App.js and save to reload.'),
//       React.createElement(
//         'a',
//         {
//           className: 'App-link',
//           href: 'https://reactjs.org',
//           target: '_blank',
//           rel: 'noopener noreferrer',
//         },
//         'Learn React'
//       ),
//       React.createElement('footer', null, `© ${currentYear}`) // Декларативное описание года
//     )
//   );
// }

// export default App;
