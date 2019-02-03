import React from 'react';
import {Collection, CollectionItem} from 'react-materialize'

const SideBarBlog = props => {
  return (
    <div className="sidebar-blog">
      <Collection header='First Names'>
        <CollectionItem>Home</CollectionItem>
      </Collection>
    </div>
  )
}

export default SideBarBlog;