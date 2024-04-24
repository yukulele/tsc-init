import * as React from 'preact';
import { AppProps } from './main.jsx';

export const AppPropsContext = React.createContext(null! as AppProps);
export const RadioContext = React.createContext(null! as RadioContext);

export type RadioContext = {
    propKey: keyof AppProps;
}
