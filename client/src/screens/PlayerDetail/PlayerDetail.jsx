import { arrayOf } from "prop-types";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOnePlayer } from "../../services/players";

import './PlayerDetail.css'

export default function PlayerDetail(props) {
  const [player, setPlayer] = useState({});

  const { currentUser, leagues, players } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchPlayer = async () => {
      const player = await getOnePlayer(id)
      setPlayer(player)
  
    }
    fetchPlayer()
  }, [id]);

  
  // console.log(players[0].leagues[0].name)


  return (
    <div className='playerDetail'>
      <img id="detailImg" src={player?.img_url} alt="img_url"></img>
      <h3><span id="detailSpan">Name:</span> {player?.name}</h3>
      <h5><span id="detailSpan">Position:</span> {player?.position}</h5>
      <h5><span id="detailSpan">Footed:</span> {player?.footed}</h5>
      <h5><span id="detailSpan">Height/Weight:</span> {player?.height_weight}</h5>
      <h5><span id="detailSpan">National Team:</span> {player?.national_team}</h5>
      <h5><span id="detailSpan">Club:</span> {player?.club}</h5>
      <h5><span id="detailSpan">Ratings:</span> {player?.ratings}</h5>
      <h5><span id="detailSpan">Potentials:</span> {player?.potentials}</h5>
      <img id="stats_img" src={player?.stats_url} alt="stats_url"></img><br />
      
 
      {currentUser?.id === player?.user_id && (
   <Link id="editLink" to={`/players/${player?.id}/edit`}>
   Edit Player
        </Link>
     
      )}
    </div>
  )
}
