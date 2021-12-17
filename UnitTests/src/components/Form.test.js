import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import Form from './Form'

const mockInputs = [
  { key: '1', question: 'What is your favorite programming language?' },
  { key: '2', question: 'Why is it javascript?' }
]

it('renders input questions', () => {
  const { getAllByTestId } = render(<Form inputs={mockInputs} />)
  const questions = getAllByTestId('text')

  expect(questions[0]).toHaveTextContent(mockInputs[0].question)
  expect(questions[1]).toHaveTextContent(mockInputs[1].question)
})

it('submits with updated input values', () => {
  const mockFn = jest.fn()
  const { getAllByTestId, getByText } = render(
    <Form inputs={mockInputs} onSubmit={mockFn} />
  )

  const inputs = getAllByTestId('input')

  fireEvent.changeText(inputs[0], 'javascript')
  fireEvent.changeText(inputs[1], 'its the best.')
  fireEvent.press(getByText('Submit'))

  expect(mockFn).toBeCalledWith({
    [mockInputs[0].question]: 'javascript',
    [mockInputs[1].question]: 'its the best.'
  })
})
