import React from 'react'
import SearchBar from './components/SearchBar';



class App extends React.Component{

    onSearchSubmit(term){
        console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop:"10px" }}>
               <h2>React APp</h2> 
               <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
    
    
}

export default App
