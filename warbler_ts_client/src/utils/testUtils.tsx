import {ReactElement} from 'react';

// Bring in ProviderRoot to wrap component with store
// and router automagically for integration testing
import ProviderRoot from '../ProviderRoot';

// Get RTL testing utils for re-export
import {render, RenderOptions, RenderResult} from 'react-testing-library';

type WrappedRender = 
    (ui: ReactElement, options: RenderOptions) => RenderResult;

export const wrappedRender: WrappedRender = (component, options) => 
    render(component, {wrapper: ProviderRoot, ...options});

// Re-export everything from RTL, including normal render function
export * from 'react-testing-library';

