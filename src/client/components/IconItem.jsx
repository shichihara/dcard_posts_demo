import React from 'react'
import { iconsURL } from '../constant/icon';

const IconItem = ({reaction}) => {
  const id = reaction.id;
  const url = iconsURL[id];
  return (
    <img src={url} />
  )
}

export default IconItem
