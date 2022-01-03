import React from 'react'
import './ListStyles.scss'
import { Link } from 'react-router-dom'

export default function LegoList({ list }) {
  return (
      <ol className="ordered-list">
        {list.length && list.map((item) => (
          <div className="item-card">
            <img src={item.set_img_url || item.part_img_url ? item.set_img_url || item.part_img_url : '/images/Lego-image not-available.jpg'} />
            {item.set_url || item.part_url ? <a href={item.set_url ? item.set_url : item.part_url} target="_blank" ><p>{item.name}</p></a> : <p>{item.name}</p>}
          </div>
        ))}
      </ol>
  )
}


//minifigs:   "results": [
//   {
//     "set_num": "fig-000001",
//     "name": "Toy Store Employee",
//     "num_parts": 4,
//     "set_img_url": "https://cdn.rebrickable.com/media/sets/fig-000001/63692.jpg",
//     "set_url": "https://rebrickable.com/minifigs/fig-000001/toy-store-employee/",
//     "last_modified_dt": "2020-05-27T21:47:00.694941Z"
//   },


//parts: "results": [
//   {
//     "part_num": "003381",
//     "name": "Sticker Sheet for Set 663-1",
//     "part_cat_id": 58,
//     "part_url": "https://rebrickable.com/parts/003381/sticker-sheet-for-set-663-1/",
//     "part_img_url": null,
//     "external_ids": {
//       "BrickLink": [
//         "663stk01"
//       ],
//       "BrickOwl": [
//         "781719"
//       ]
//     },
//     "print_of": null
//   },

//sets: "results": [
//   {
//     "set_num": "001-1",
//     "name": "Gears",
//     "year": 1965,
//     "theme_id": 1,
//     "num_parts": 43,
//     "set_img_url": "https://cdn.rebrickable.com/media/sets/001-1/11530.jpg",
//     "set_url": "https://rebrickable.com/sets/001-1/gears/",
//     "last_modified_dt": "2018-05-05T20:39:47.277922Z"
//   },
