import React from 'react'

export default function LegoList({list}) {
  console.log(list)
  return (
    <ol>
      {list.length && list.map((item, idx) => (
        item
      ))}
    </ol>
  )
}