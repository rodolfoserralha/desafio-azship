import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  const contextValue = {
    episodes, setEpisodes, characters, setCharacters
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};