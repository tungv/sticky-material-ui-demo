import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  gridList: {
    width: 500
  },
};

const tilesData = [
  {
    img: 'http://material-ui.com/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://material-ui.com/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://material-ui.com/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://material-ui.com/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://material-ui.com/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://material-ui.com/images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://material-ui.com/images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div>
    <StickyContainer>
      <Sticky stickyStyle={{ zIndex: 1, background: 'white' }}
        topOffset={0}
      >
        <Subheader>October</Subheader>
      </Sticky>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {tilesData.map((tile, index) => (
          <GridTile
            key={index}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </StickyContainer>
    <StickyContainer>
      <Sticky stickyStyle={{ zIndex: 1, background: 'white' }}
        topOffset={0}
      >
        <Subheader>November</Subheader>
      </Sticky>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {tilesData.map((tile, index) => (
          <GridTile
            key={index}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </StickyContainer>
    <StickyContainer>
      <Sticky stickyStyle={{ zIndex: 1, background: 'white' }}
        topOffset={0}
      >
        <Subheader>December</Subheader>
      </Sticky>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {tilesData.map((tile, index) => (
          <GridTile
            key={index}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </StickyContainer>
  </div>
);

export default GridListExampleSimple;
