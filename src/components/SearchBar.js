import React, {useState} from 'react';


const SearchBar = ({ videoSubmit })=>{

  const [term, setTerm] = useState('');

  const onInputChange= (e)=>{  
    setTerm(e.target.value);
  }
  
  const onFormSubmit = (e)=>{
    e.preventDefault();
    //Callback from parent component
    videoSubmit(term);
  }

  return(
    <div className="search-bar ui segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input              
            value={term} 
            type="text"
            onChange={(e) => setTerm(e.target.value)}/>
          </div>
        </form>
      </div>
  );

};


export default SearchBar;