import React from 'react';
import { Player } from 'video-react';
import "./css/style.css"

function Myplyer() {
  return (
    <Player playsInline fluid={false}>
      <source src="https://static.videezy.com/system/resources/previews/000/041/209/original/clean04.mp4" />
    </Player>
  );
};

export default Myplyer;