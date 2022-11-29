import React from 'react'
import { combineEpics } from 'redux-observable'
import { homeEpic } from '../epics/homeEpic';

export const rootEpic = combineEpics(
  homeEpic
);
