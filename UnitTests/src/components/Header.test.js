import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import Header from './Header'

it('has title', () => {  
  const { getByText } = render(<Header title={'testing'} />)

  expect(getByText('testing'))
})

it('fires onPress', () => {
  const mockFn = jest.fn()
  const { getByTestId } = render(<Header onPress={mockFn} />)

  fireEvent.press(getByTestId('button'))

  expect(mockFn).toHaveBeenCalledTimes(1)
})