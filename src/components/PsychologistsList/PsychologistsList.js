import React, { useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { PsychologistCard } from '../PsychologistCard';
import './PsychologistsList.scss';

export const PsychologistsList = ({ psychologists }) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const history = useHistory();
  const filterBy = searchParams.get('filterBy') || '';

  const onFilterChange = ({ target }) => {
    const { name, value } = target;
    searchParams.set(name, value);

    if (searchParams.get('filterBy') === '') {
      searchParams.delete('filterBy');
    }

    history.push(`?${searchParams.toString()}`);
  };

  const getPsychologistsByType = useMemo(() => {
    if (!filterBy) {
      return psychologists;
    }

    return psychologists.filter(user => user.type === filterBy)
  }, [filterBy, psychologists]);

  return (
    <div className="PsychologistsList">

      <div className="Actions PsychologistsList-Actions">
        <div className="Actions-Block">
          <span className="Actions-Name">Filter by</span>
          <select
            value={filterBy}
            name="filterBy"
            className="Actions-Select"
            onChange={onFilterChange}
          >
            <option value="">Choose psychologists by type</option>
            <option value="Психолог">Психолог</option>
            <option value="Психиатр">Психиатр</option>
            <option value="Психотерапевт">Психотерапевт</option>
          </select>
        </div>
      </div>

      <div className="PsychologistsList-List">
        {getPsychologistsByType.map(psychologist => (
          <PsychologistCard key={psychologist.name} psychologist={psychologist}/>
        ))}
      </div>
    </div>
  );
};
