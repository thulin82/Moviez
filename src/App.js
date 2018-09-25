import React from 'react';


const App = () => {
  console.log('API key:', process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <h1>Moviez</h1>
    </div>
  )
}

export default App;
