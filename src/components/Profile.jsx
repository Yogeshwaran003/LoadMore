import { useState } from 'react'
import './profile.css'
const ProfileItem=(props)=>{
    const[follow,setfollow]=useState(false);
    return(
        <div className="outerlayer">
            <img src={props.src} alt="" width="100px" height="100px" className='img'/>
            <div className="detail">
                <h1>{props.name}</h1>
                <h3>{props.desc}</h3>
            </div> 
            <button className={`btn ${follow?"active":""}`} onClick={()=>{setfollow(!follow)}}>{follow?"Following":"Follow"}</button>
        </div>
    )
}
export default function loadMore(props){
    const[Load,setLoad]=useState(3);
    return(
        <div className="outer-container">
            <div className="inner-containr">
                {props.data.eachImage.slice(0,Load).map((item,index)=><ProfileItem key={index} name={item.name} src={item.src} desc={item.desc}/>)}
            </div>
            <button className='loadmore' onClick={()=>{setLoad(Load+3)}}>Load More</button>
        </div>
    )
}