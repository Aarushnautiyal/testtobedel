import React,{useState} from 'react'
import Maze from './images/mazeBackground'
import './style.css'
import Show from './components/Shows'
import People from './components/People'


const App = () => {
    const [searchCategory, setSearchCategory] = useState("")
    const [searchItem, setSearchItem] = useState('')
    const [myData, setMyData] = useState([])
    // const [myScore, setMyScore] = useState([])

    const handleChange = async (e)=>{
        setSearchItem(e.target.value)
        const response = await fetch(`https://api.tvmaze.com/search/${searchCategory}?q=${searchItem}`)

                setMyData(await response.json())
                // e.target.value=''
    }
    function handleCategory(e){
        setSearchCategory(e.target.value)
        setMyData([])
    }
    // function handleCategory(){
    //     setSearchCategory('shows')
    //     setMyData([])
    // }
    const data = searchCategory==='people'? myData.map(ele=>ele.person):myData.map(ele=>ele.show)
    console.log(data)
    
    return(
        <>
            <main className='main'>
                <img src={Maze} alt="background" className='background' />
                <div className="container">
                    <div className="box">
                        <h1>TVmaze</h1> 
                        <h3>search for Your Favourite Shows</h3> 
                        <div className='inline'>
                            <input type="radio" name='search' value='people' onClick={handleCategory}/> 
                            <label htmlFor="search">Actors</label>
                            <input type="radio" name='search' value='shows' onClick={handleCategory}/>
                            <label htmlFor="search">Shows</label>
                        </div>
                        <h5>Enter {searchCategory} Below</h5>
                        <input type="text" id='input'  
                        placeholder={searchCategory==='people'?'eg: Tom Cruise':'eg: friends'} 
                        onChange={handleChange}/>
                        {myData.length>0?<p>search reslts for {searchItem}</p>:<p>Nothing Found</p>}
                    </div>
                </div>
            </main>  
            {searchCategory==='people'?
            <People data={data}  search={searchCategory}/>  
            :<Show data={data} search={searchCategory}/>}
                  
        </>
    )
    
}

export default App
