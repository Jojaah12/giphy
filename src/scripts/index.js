import '../styles/index.scss';
import './giphy';
import giphy from './giphy';
const onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('.search__field');
    giphy.searchField(input);
    console.log(input.value);
    console.log(giphy);

}


document.querySelector('.search').addEventListener('submit', onSubmit);