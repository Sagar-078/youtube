import { useState } from "react";
import { createContext } from "react";
import { options } from "../ForApi/Api";



export let AppContext = createContext();


function AppContextProvider({children}){
    const[loading, setloading] = useState(false);

    const[searchedtext, setSearchedText] = useState('recentindia');

    const inputtextvideos = async (searchedtext) =>{
        setloading(true);
        try{
            const res = await fetch(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${searchedtext}&geo=IN&lang=hi`,options);
            const {data} = await res.json();
            return data;
            
        }
        catch(err){
            console.log("error in feathing data");
        }finally{
                  
        setloading(false);
        }
 
        
       
     
    }

    const value = {
        loading,
        setloading,
        searchedtext,
        setSearchedText,
        inputtextvideos
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;