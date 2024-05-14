import React, { useState } from 'react';

// import { useActions } from '../hooks/useActions';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchRepositories } from '../state/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  // const {searchRepositories} = useActions();
  const dispatch = useDispatch()
  const {data, error, loading} = useTypedSelector((state) => state.respositories)
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // searchRepositories(term);
    dispatch(searchRepositories(term) as any);
  }


  return (
    <div>

      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button >Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && 
      data.map((name, idx) => <div key={idx}>{name}</div>)
      }
    </div>
  )
}

export default RepositoriesList