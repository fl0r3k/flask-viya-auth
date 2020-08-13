import ReactDOM from 'react-dom';

var FoldersNavigation = require('./FoldersNavigation.jsx');

const App = () => {
  return <FoldersNavigation />;
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
