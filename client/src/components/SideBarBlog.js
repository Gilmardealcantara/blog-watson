import React from 'react';
import {Collection, CollectionItem} from 'react-materialize'

const SideBarBlog = props => {
  return (
    <div className="sidebar-blog">
      <Collection>
        <CollectionItem href='#' active={!props.active} onClick={() => props.changeAction(false)}>Posts</CollectionItem>
        <CollectionItem href='#' active={props.active} onClick={() => props.changeAction(true)}>Add Post</CollectionItem>
      </Collection>
    </div>
  )
}

export default SideBarBlog;