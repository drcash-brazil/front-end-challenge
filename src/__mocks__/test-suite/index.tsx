import React, { ReactElement } from 'react'
import { render, RenderResult, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClientProvider
} from 'react-query'

import { queryClient } from '@/presentation/modules/services/query-client'

// eslint-disable-next-line react/display-name
const makeProviders = (): React.FC => ({ children }) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </BrowserRouter>
)

type CustomRender = (ui: ReactElement) => RenderResult;

const __render: CustomRender = (ui, options = {}) => {
  return render(ui, {
    wrapper: makeProviders(),
    ...options
  })
}

export { screen, __render as render }
export { default as userEvent } from '@testing-library/user-event'
