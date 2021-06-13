import React from 'react';
import { useSelector } from 'react-redux';
import {getFavouritePsychologists, getDisfavouritePsychologists } from '../../store';
import './Analysis.scss';

export const Analysis = ({ psychologists }) => {
  const disfavouritePsychologists = useSelector(getDisfavouritePsychologists);

  const favouritePsychologists = useSelector(getFavouritePsychologists);
  const combinedArr = [
    {
    name: 'All psychologists',
    array: psychologists,
    },
    {
    name: 'Favourite psychologists',
    array: favouritePsychologists,
    },
    {
    name: 'Disfavourite psychologists',
    array: disfavouritePsychologists,
    },
  ];

  return (
    <div className="Analysis">
      {combinedArr.map(card => (
      <div key={card.name} className="AnalysisCard-Wrapper">
        <div className="AnalysisCard">

          <h2 className="AnalysisCard-Title">
            {card.name}
          </h2>

          <div className="Info AnalysisCard-Info">
            <div className="Info-Block">
              <div className="Info-Name">
                Number of all psychologists:
              </div>
              <div className="Info-Value">
                {card.array.length}
              </div>
            </div>
          </div>

          <div className="Info AnalysisCard-Info">
            <div className="Info-Block">
              <div className="Info-Name">
                Number of psychologists:
              </div>
              <div className="Info-Value">
                {card.array.filter(psych => psych.type === 'Психолог').length}
              </div>
            </div>

            <div className="Info-Block">
              <div className="Info-Name">
                Number of psychiatrists:
              </div>
              <div className="Info-Value">
                {card.array.filter(psych => psych.type === 'Психиатр').length}
              </div>
            </div>

            <div className="Info-Block">
              <div className="Info-Name">
                Number of psychotherapists:
              </div>
              <div className="Info-Value">
                {card.array.filter(psych => psych.type === 'Психотерапевт').length}
              </div>
            </div>

        </div>
      </div>
    </div>
    ))}
    </div>
  );
};
