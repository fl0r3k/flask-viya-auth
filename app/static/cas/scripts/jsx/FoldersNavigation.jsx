import { useState, useEffect } from 'react';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const foldersFlat = require('./FoldersFlat.jsx');


const FoldersNavigation = () => {
  const [folders,setFolders] = useState([]);
  const [selectedId,setSelectedId] = useState([]);


  // useEffect( () => {
  //   const api_url = 'http://localhost:5000/foldersTree';
  //   fetch(api_url)
  //     .then( res => res.json() )
  //     .then( data => {
  //       setFolders(data.items)
  //     })
  // }, []);

  useEffect( () => {
    setFolders(foldersFlat.items);
  }, []);

  const onNodeSelectHandler = (e,v) => {
    setSelectedId(v);
  }

  const renderTree = (parentFolderUri, rootLevel) => {
    let members = null;
    if (rootLevel) {
      members = folders.filter( n => n.type == "folder" || n.type == "userRoot");
    } else {
      members = folders.filter( n => n.parentFolderUri == parentFolderUri );
    }
    return (
      members.length > 0 ? members.map( member =>
        <TreeItem key={member.id} nodeId={member.id} label={member.name}>
          { renderTree(member.uri,false) }
        </TreeItem>
      ) : null
    );
  };

  return (
    <div>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeSelect={(e,v) => onNodeSelectHandler(e,v)}
      >

        { renderTree('',true) }

      </TreeView>
      <Card>
        <CardContent>
          <Typography variant="body2" component="p">
            { JSON.stringify(folders.find( n => n.id == selectedId), null, 2) }
          </Typography>
        </CardContent>
      </Card>
    </div>
    );
}

module.exports = FoldersNavigation;
