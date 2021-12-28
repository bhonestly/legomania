import React from 'react'
import { getAllLegos } from '../services/api'
import { useEffect, useState } from 'react'
import Search from './Search'

export default function LegoList() {
  const [legoList, setLegoList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllLegos()
      setLegoList(result.sort((a, b) => a.name.localeCompare(b.name))) 
    };
    fetchData();
  }, []);

  return (
    <div>
      <Search legoList={legoList} setLegoList={setLegoList} />
    </div>
  )
}