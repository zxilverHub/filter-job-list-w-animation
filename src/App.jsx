import './App.css'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import jsonData from '../data.json'
import JobCard from './components/JobCard';
import Filtered from './components/Filtered';

function filterReducer(filterSearch, action) {
    switch(action.type) {
        case 'addFiltered':
            return filteredCheck(filterSearch, action.payload)
        case 'removeFiltered':
            return removeFilter(filterSearch, action.payload)
        case 'clear':
            return []
    }
}

function removeFilter(filters, remove) {
    const newFilters = filters.filter(filt =>{
        return filt !== remove
    })
    return newFilters
}

function filteredCheck(filters, newFilter) {
    if (filters.includes(newFilter)) {
      return filters;
    } else {
      const newFilters = [...filters]; 
      newFilters.push(newFilter);
      return newFilters;
    }
}

function App() {
    const data = jsonData;
    const [jobList, setJobList] = useState(null)
    const [cardsId, setCardsId] = useState([])
    const [isFiltered, seIsFiltered] = useState(null)

    // search for
    const [filterSearch, setFilterSearch] = useReducer(filterReducer, [])

    const getFiltered = useCallback((filt)=>{
        setFilterSearch({ type: 'addFiltered', payload: filt })
        seIsFiltered(true)
    },[])

    const removeFiltered = useCallback((filt)=>{
        setFilterSearch({ type: 'removeFiltered', payload: filt })
    }, [])


    // Data filter 
    useEffect(()=>{
        if(filterSearch.length !== 0) {
            const newCardsId = [];
            const newJobList = data.filter(ourData => {
                const hasLevel = filterSearch.includes(ourData.level)
                const hasRole = filterSearch.includes(ourData.role)
                const hasLang = ourData.languages.some(lang => filterSearch.includes(lang));
                const hasTool = ourData.tools.some(tool => filterSearch.includes(tool));

                if(hasTool || hasLang || hasLevel || hasRole) newCardsId.push(ourData.id)
                return hasTool || hasLang || hasLevel || hasRole
            });
            setCardsId(newCardsId)
            setTimeout(()=>{
                setJobList(newJobList)
                seIsFiltered(false)
                setCardsId([])
            }, 600)
        } else {
            setJobList(data)
        }
    }, [filterSearch])

    // ----------------------------
    if(!jobList) {
        return (
            <h1>Loading...</h1>
        )
    }

  return (
    <div className='cotainer'>
        <div className="app-header"></div>

        { filterSearch.length !== 0 && 
        <div className="search-bar">
            <div className="filters">
            { filterSearch.map((search, i)=>(
                <div className="filtered" key={i}>
                    <Filtered 
                        filterInfo={search}
                        removeFiltered={removeFiltered}
                    />
                </div>
            )) }
            </div>
            <button className="clear-button" onClick={()=>setFilterSearch({type: 'clear'})}>Clear</button>
        </div>
        }
        
        <div className="list">
            { jobList.map((job, i)=>(
                <div className={`job-card ${(job.featured? 'fBorder': '')} 
                ${isFiltered && (cardsId.some(card => card == job.id) ? '': 'card-in')} `} 
                key={i} id={job.id}>
                    <JobCard job={job} getFiltered={getFiltered} />
                </div>
            )) }
        </div>
    </div>
  )
}

export default App