'use client';

import { createContext, useContext, useState, useRef } from 'react';
import { tracks } from '../playerSections/data/Tracks';

const AudioPlayerContext = createContext(undefined);

export const AudioPlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef(null);
  const contextValue = {
    currentTrack,
    setCurrentTrack,
    audioRef,
  };

  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      'useAudioPlayerContext must be used within an AudioPlayerProvider'
    );
  }
  return context;
};
