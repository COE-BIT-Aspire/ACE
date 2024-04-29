  import { libraryList } from '../../../data/audio';
  import { artistList } from '../../../data/audio';
  import { availableGenres } from '../../../data/audio';
  // import  PlaylistData2 from '../Playlist/Playlist';
  import { allSongs } from '../../../data/audio';
  import CollectionButton from '../../Components/Button/CollectionButton';
  // import thorne_behind from '../../../assets';
  import './Collection.css';
  // import AddButton from '../../Components/Button/AddButton';

  export default function Collection({ handleCollectionClick }) {
    const collectionButtons = [...libraryList].reverse().map(li => (
      <li key={li} className='collection-item'>
        <CollectionButton
          playlist={li}
          onCollectionClick={() => handleCollectionClick(li)}
        />
      </li>
    ));
    
    const getImage = (imageName) => require(`../../../assets/${imageName}.png`);


    return (
      <div className='collection-layout'>
        <div className='collection-container'>
          <div className='collection-inner-container'>
            <h2 className='collection-heading'>Playlists</h2>
            <ul className='collection-list'>
              {collectionButtons}
            </ul>
          </div>
          <div className='artist-container'>
            <h2 className='artist-heading'>Artists</h2>
            <ul className='artist-list'>
              {/* Render unique artists */}
              {Object.entries(artistList).map(([key, value]) => (
                <li key={key} className='artist-item'>
                  <img src={getImage(key)} alt={key} className='artist-img'/> 
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className='artist-container'>
            <h2 className='artist-heading'>Genre</h2>
            <ul className='genre-list'>
              {/* Render unique genre names */}
              {availableGenres.map((genre, index) => (
              <li key={index} className='genre-item'>
                {genre}
              </li>
               ))}
            </ul>
          </div>
          <div className='artist-container'>
            <h2 className='artist-heading'>Podcasts</h2>
            <ul className='artist-list'>
              {/* Render unique artists */}
              {Object.keys(artistList).map((key, index) => (
                <li key={index} className='artist-item'>
                  {key}
                </li>
              ))}
            </ul>
          </div>
        </div>
  

        {/* <div className='song-container'>
        <h2 className='song-heading'>Enjoy listening..!</h2>
        <ul className='song-list'>
          {allSongs.map((song, index) => (
            <PlaylistData2  audio={song} />
          ))}
        </ul>
      </div> */}
        <div className='song-container'>
          <h2 className='artist-heading'>Enjoy listening..!</h2>
          
          <ul className='song-list'>
            {allSongs.map((song, index) => (
              <li key={index} className='song-item'>
                <div className='song-details'>
                  <div className='data-title'>{song.title}</div>
                  <div className='data-artist'>{song.artist}</div>
                  <div className='data-duration'>{song.duration}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

