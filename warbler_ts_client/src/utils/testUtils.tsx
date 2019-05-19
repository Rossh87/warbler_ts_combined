import {ReactElement} from 'react';

// Bring in ProviderRoot to wrap component with store
// and router automagically for testing
import {ProviderRoot} from '../ProviderRoot';

// Get RTL testing utils for re-export
import {render, RenderOptions, RenderResult} from 'react-testing-library';
import { Provider } from 'react-redux';

type WrappedRender = 
    (ui: ReactElement, mockState?: {}, options?: RenderOptions) => RenderResult;

export const wrappedRender: WrappedRender = (component, mockState, options) =>
    render(component, {wrapper: ProviderRoot, ...options});
    
// Re-export everything from RTL, including normal render function
export * from 'react-testing-library';
export * from '../ProviderRoot';

