import React from "react";
import TeamSvg from "../Assets/users.svg";

const MatchCard = ({ matchData }) => {
    const {
        team1,
        team2,
        winner,
        win_by_wickets,
        win_by_runs,
        Season,
        date,
        city,
        player_of_match,
        venue,
        toss_decision,
        toss_winner,
        umpire1,
        umpire2,
    } = matchData;
    return (
        <article className='match__card'>
            <div className='match__teams-container'>
                <h4>{team1}</h4>
                <h4 className='match__vs-container'>
                    <img
                        className='match__team-icon'
                        src={TeamSvg}
                        alt='Team 1'
                    />
                    <span>VS</span>
                    <img
                        className='match__team-icon'
                        src={TeamSvg}
                        alt='Team 2'
                    />
                </h4>
                <h4>{team2}</h4>
            </div>

            <hr className='match__divider' />

            <div className='match__winner-container'>
                <p>
                    <span className='match__winner'>{winner}</span> won the
                    match by <em>{win_by_runs} runs</em> and{" "}
                    <em>{win_by_wickets} wickets</em>.
                </p>
            </div>

            <hr className='match__divider' />

            <ul className='match__toss-details'>
                <h4>Toss Details</h4>
                <li>
                    <span>Toss winner: </span> {toss_winner}
                </li>
                <li>
                    <span>Toss decision: </span> {toss_decision}
                </li>
            </ul>

            <hr className='match__divider' />

            <ul className='match__details'>
                <h4>Match Details</h4>
                <li>
                    <span>Season: </span>
                    {Season}
                </li>
                <li>
                    <span>Date: </span>
                    {date}
                </li>
                <li>
                    <span>City: </span>
                    {city}
                </li>
                <li>
                    <span>Man of the Match: </span>
                    {player_of_match}
                </li>
                <li>
                    <span>Venue: </span>
                    {venue}
                </li>
                {umpire1 && (
                    <li>
                        <span>Umpire 1: </span>
                        {umpire1}
                    </li>
                )}
                {umpire2 && (
                    <li>
                        <span>Umpire 2: </span>
                        {umpire2}
                    </li>
                )}
            </ul>
        </article>
    );
};

export default MatchCard;
