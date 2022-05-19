import { useState } from 'react';

import logo from '../assets/images/logo.png';

export default function Search(props) {
    const [input, setInput] = useState('');

    return (
        <div className="search" data-testid="search">
            <img src={logo} alt="Github logo"></img>

            <div className="search__inputs">
                <label> User name: </label>
                <input 
                    type="text"
                    value={input}
                    onChange={ (e) => setInput(e.target.value)}
                />
                <button data-testid="button" onClick={ () => props.search(input)}> Search </button>
            </div>
        </div>
    )
}