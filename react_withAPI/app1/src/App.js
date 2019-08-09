import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import SearchBar from './components/SearchBar'
import JobList from './components/JobList'

function App() {

  const [jobs, setJobs] = useState([]);
  const [term, setterm] = useState('');

  useEffect(() => {
    axios.get('https://api.codetabs.com/v1/proxy?quest=https://jobs.github.com/positions.json' )
    .then(function (response) {
      setJobs(response.data);
});
  
  }, []);


  return (
    <div className="App">
     <SearchBar jobs = {jobs}/>
     <JobList jobs = {jobs}/>
    </div>
  );
}

export default App;
