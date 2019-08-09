import React from 'react'

const Job =(props)=>{
   // const [title, description] = props.job;
    return(
        <div>
          <h3>Title: {props.job.title}</h3>
          <h5>Description: {props.job.description}</h5>
        </div>

    )
}


export default Job;