import * as React from 'react'
import { render } from '@testing-library/react-native'

import DeviceInfo from './DeviceInfo'

it('has DeviceId', () => {
  const { getByText } = render(<DeviceInfo />)
})

it('has ApplicationName', () => {
  const { getByText } = render(<DeviceInfo />)
})
