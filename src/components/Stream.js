import React from 'react';

function Stream({ tracks = [] }) {
    // const tracks = this.props.tracks === const {tracks} = this.props
    //if tracks is undefined - will set tracks to array by default;
    // const { tracks = [] } = this.props;
  return (
    <div> 
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}> </div>
        })
      }
    </div>
  );
}

export default Stream;