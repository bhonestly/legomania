import React from 'react'
import './ListStyles.scss'

export default function LegoList({ list }) {
  console.log(list)
  return (
      <ol className="ordered-list">
        {list.length && list.map((item) => (
          <div className="item-card">
            {item.name}
          </div>
        ))}
      </ol>
  )
}