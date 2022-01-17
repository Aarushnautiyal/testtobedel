import React from 'react'
import Card from './Card'
import './style.css'

const CardList = ({data, search}) => {
    // const [theList, setTheList] = useState([])
        // const list = search ==='people'?data.map(ele=><Card key={data.id} userName={ele.name} 
        //         dob={ele.birthday} 
        //         imag={ele.image.medium}/>:data.map(ele=><Card key={data.id} userName={ele.show} 
        //         dob={ele.birthday} 
        //         imag={ele.image.medium}/>)
        
        const list =data.map(ele=><Card key={ele.id} userName={ele.show!=null?ele.show:ele.name} 
                url={ele.url}
                imag={ele.image!=null?ele.image.medium:`https://robohash.org/${ele.id}1`}/>)
            



    
    // const [theListed, setTheListed] = useState([])

    // if (data.show===undefined) {
    //     const theList = data.map(ele=>{
    //       return(
    //           ele.person.image!=null?<Card
    //           key={ele.score} 
    //             userName={ele.person.name} 
    //             dob={ele.person.birthday} 
    //             star={ele.score} 
    //             imag={ele.person.image.medium}/>
    //             :<Card 
    //             userName={ele.person.name} 
    //             dob={ele.person.birthday} 
    //             star={ele.score}/>
    //       )
    //   }
    //     setTheListed(theList)
    //   )
    // }else if(data.people===undefined){
    //     const theList =data.map(ele=>{
    //       return(
    //           ele.show.image!=null?<Card 
    //             userName={ele.show.name}
    //             star={ele.score}
    //             imag={ele.show.image.medium}
    //             dob={ele.show.summary}/>
    //             :<Card 
    //             userName={ele.show.name}
    //             star={ele.score}
    //             dob={ele.show.summary}/>
    //       )
    //   })
    // }
    return (
        <div className='card--list'>
            {/* {theListed} */}
            {list}
        </div>
    )
}

export default CardList
