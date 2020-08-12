import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import StyledTreeItem from '@material-ui/lab/StyledTreeItem';

// var LikeButton = require('./LikeButton.jsx');

const folders1 = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

const folders2 = {
    byId: {
      'folder1': {
        id: 'folder1',
        name: 'Folder 1',
        children: ['folder3', 'folder4']
      },
      'folder2': {
        id: 'folder2',
        name: 'Folder 2',
        children: ['folder4', 'folder5', 'folder6']
      },
      'folder3': {
        id: 'folder3',
        name: 'Folder 3',
        parent: 'folder1',
      },
      'folder4': {
        id: 'folder4',
        name: 'Folder 4',
        parent: 'folder1'
      },
      'folder5': {
        id: 'folder5',
        name: 'Folder 5',
        parent: 'folder2'
      },
      'folder6': {
        id: 'folder6',
        name: 'Folder 6',
        parent: 'folder2'
      }
    },
    allIds : ['folder1','folder2', 'folder3', 'folder4', 'folder5', 'folder6']
};

const folders3 = {
  'root': {
    id: 'root',
    name: 'Root Folder',
    children: ['folder1', 'folder2']
  },
  'folder1': {
    id: 'folder1',
    name: 'Folder 1',
    children: ['folder3', 'folder4']
  },
  'folder2': {
    id: 'folder2',
    name: 'Folder 2',
    children: ['folder4', 'folder5', 'folder6']
  },
  'folder3': {
    id: 'folder3',
    name: 'Folder 3',
    parent: 'folder1',
  },
  'folder4': {
    id: 'folder4',
    name: 'Folder 4',
    parent: 'folder1'
  },
  'folder5': {
    id: 'folder5',
    name: 'Folder 5',
    parent: 'folder2'
  },
  'folder6': {
    id: 'folder6',
    name: 'Folder 6',
    parent: 'folder2'
  }
};

const FoldersNavigation = () => {

  const renderTree1 = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );
  const renderTree3 = (nodeId) => {
    const node = folders3[nodeId];
    return (
      <TreeItem key={node.id} nodeId={node.id} label={node.name}>
        {Array.isArray(node.children) ? node.children.map((childNode) => renderTree3(childNode)) : null}
      </TreeItem>
    );
  };

  const renderTree4 = (nodeId) => {
    const node = folders3[nodeId];
    return (
      <StyledTreeItem key={node.id} nodeId={node.id} labelText={node.name} labelIcon={DeleteIcon} >
        {Array.isArray(node.children) ? node.children.map((childNode) => renderTree3(childNode)) : null}
      </StyledTreeItem>
    );
  };

  return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree4(folders3.root.id)}
      </TreeView>
    );
}

ReactDOM.render(
  <FoldersNavigation />,
  document.getElementById('main')
);
