import { useDispatch, useSelector } from 'react-redux';
import { changeTitle } from '../store/actions/settingsActions';

export default function Header() {
  const title = useSelector((store) => store.settings.title);
  const dispatch = useDispatch();

  function handleClick() {
    const index = Math.floor(Math.random() * 3);
    const titles = ['Wit0724', 'Workintech', 'Merhaba Dünya'];
    const randomTitle = titles[index];
    dispatch(changeTitle(randomTitle));
  }

  return (
    <header>
      <h1>{title}</h1>
      <button onClick={handleClick}>Random Title</button>
    </header>
  );
}
