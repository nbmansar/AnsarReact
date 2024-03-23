//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import ColorContent from './Component/ColorContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSection from './Component/TopSection';
import DataSection from './Component/DataSection';
import CommentSection from './Component/CommentSection';
import UserSection from './Component/UserSection';
import PostSection from './Component/PostSection';
import LoaderSection from './Component/LoaderSection';


function App() {

  const [isPage,setIsPage] = useState('Comments');
  const [responseContent,isResonseContent] = useState('');
  const [isLoading,setIsLoading]=useState(false)
  const [fetchError,setFetchError]=useState('')

const prepareComment = (currentTab)=>{
 setIsPage(currentTab);
 fetchData(currentTab)
}

const API_URL = 'https://jsonplaceholder.typicode.com';

const dataMapping = {
  'comments': CommentSection, 
  'users': UserSection,       
  'posts': PostSection        
};

const fetchData = async(reqType)=>{
  setIsLoading(true)
  try{
    const url = `${API_URL}/${reqType}`
    const response = await fetch(url)
      if(!response.ok){
        throw Error("error on request");
      }
      const result = await response.json()
      console.log(result)
      isResonseContent(result)
  }catch(e){
    setFetchError(e.message)
  }finally{
    setIsLoading(false);
  }
}

useEffect(()=>{
  setIsPage('comments')
  fetchData('comments')
},[])

  return (
    <div className="App">
      <TopSection 
      prepareComment={prepareComment}
      />
      {isLoading ? <LoaderSection /> : 
      (fetchError ?  fetchError :
      <DataSection
      isPage={isPage}
      dataMapping={dataMapping}
      responseContent={responseContent}
      />)
  }
    </div>
  );
}

export default App;
