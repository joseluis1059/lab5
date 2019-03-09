
import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import './Pokesquare.css';

class LoadingPokemon extends Component {
    constructor(props){
        super(props);
        this.state={
            gribList: [
                {
                        img: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2018/05/pikachu.jpg?resize=1080%2C600&quality=90&ssl=1',
                        title: 'Pikachu',
                        author: 'Ash',
                 }
                 ,
                  {
                    img: 'https://cdn.dribbble.com/users/1787323/screenshots/4458591/dribbbe_bulbasaur-01.png',
                    title: 'Bulbasaur',
                    author: 'Ash',
                  }
                  ,
                  {
                    img: 'https://static.turbosquid.com/Preview/2014/07/08__22_01_54/charmander.jpg6c8e2e64-871f-4272-8f23-f813fa8f3495Large.jpg',
                    title: 'Charmander',
                    author: 'Ash',
                  }
                  ,
                  {
                    img: 'https://pm1.narvii.com/6159/3ef6c4a73a478bb9c7de0bcd6bab6c085bbc2923_hq.jpg',
                    title: 'Pikachu',
                    author: 'Ash',
                  }
                  ,
                  {
                    img: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2018/05/pikachu.jpg?resize=1080%2C600&quality=90&ssl=1',
                    title: 'Pikachu',
                    author: 'Ash',
                  }
              ]
          }
    }
    
    render() {
      return (
          <div>
<div >
            <GridList cellHeight={400}>
              {this.state.gribList.map(tile => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton className="icon">
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          </div>
        
        
      );
    }
    
  }



 
  export default LoadingPokemon;


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */