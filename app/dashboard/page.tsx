"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashbaord() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
      {/* Search Section  */}
     <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}
    //  setUserSearchInput(value)}

     />
      



      {/* Template list Section  */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashbaord