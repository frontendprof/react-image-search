import React from 'react';
import unsplash from "../src/api/unsplash";
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';



class App extends React.Component{

    state={images:[]}

    onSearchSubmit=async(term)=>{
        const {data}=await unsplash.get("/search/photos",{
            params:{query:term},
            
        })
        
        
        this.setState({images:data.results})
    }
    

    render(){
        return (
            <div className="ui container" style={{ marginTop:"10px" }}>
               <h2>React APp</h2> 
               <SearchBar onSubmit={this.onSearchSubmit}/>
               <ImageList images={this.state.images}/>
            </div>
        )
    }
    
    
}

export default App
