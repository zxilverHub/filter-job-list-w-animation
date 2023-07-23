import React from 'react'
import ImageGallery from './ImageGallery';

function JobCard({ job, getFiltered }) {
    
    const addOnFiltered = (filt)=>{
        getFiltered(filt)
    }

  return (
    <>
        <div className="info">
            <ImageGallery company={job.company} />
            <div className="job-text-info">
                <div className="company-name">
                    <h1 className='company'>{job.company}</h1>
                    { job.new && <p className='new'>NEW!</p> }
                    { job.featured && <p className='featured'>FEATURED</p> }
                </div>
                <p className='job-position'> {job.position} </p>
                <div className="job-description">
                    <p className='postedAt'>{job.postedAt}</p>
                    <span>&#x2022;</span>
                    <p className='contract'>{job.contract}</p>
                    <span>&#x2022;</span>
                    <p className='lcoation'>{job.location}</p>
                </div>
            </div>
        </div>

        <div className="filter">
            <p className='role filter-button' onClick={()=>addOnFiltered(job.role)} >{job.role}</p>
            <p className='level filter-button' onClick={()=>addOnFiltered(job.level)} >{job.level}</p>
            { job.languages.map((lang, j)=>(
                <p className='language filter-button' key={j} onClick={()=>addOnFiltered(lang)} >{lang}</p>
            )) }
            { job.tools.map((tool, j)=>(
                <p className='tools filter-button' key={j} onClick={()=>addOnFiltered(tool)} >{tool}</p>
            )) }
        </div>
    </>
  )
}

export default JobCard