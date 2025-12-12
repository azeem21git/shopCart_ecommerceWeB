import { headerData } from '@/constrains/data'
import React from 'react'
import Link from 'next/link'

const HeaderMenu = () => {
  return (
    <div>
      {
        headerData?.map((item)=>(
            <Link key={item?.title}></Link>
        ))
      }
    </div>;
  )
}

export default HeaderMenu
