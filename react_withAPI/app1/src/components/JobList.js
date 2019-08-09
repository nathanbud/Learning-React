import React from 'react'
import Job from './Job'


const JobList  =(props)=>{
    return(
        <div>
           {props.jobs.map( job =>{
               return <Job key = {job.id} job = {job}/>
           })}
        </div>
    )
}


export default JobList;