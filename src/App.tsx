import { usePeopleList } from './reducers/peopleList';
import { ChangeEvent, useState } from 'react';

function App() {
  const [list, dispatchList] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  const handdleAddButton = () => {
    if (nameInput) {
      dispatchList({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    }
  }

  const deletePerson = (id: string) => {
    dispatchList({
      type: 'DEL',
      payload: { id }
    })
  }

  const handleOrderButton = () => {
    dispatchList({
      type: 'ORDER'
    })
  }

  return (
    <div>
      <input value={nameInput} onChange={handleInputChange} type="text" />
      <button onClick={handdleAddButton}>Adionar</button>
     
      <hr />
      Lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={()=> deletePerson(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>

      <button onClick={handleOrderButton}>Ordenar</button>
    </div>
  );
}

export default App;