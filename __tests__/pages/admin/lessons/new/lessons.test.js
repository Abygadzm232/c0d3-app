import React from 'react'
import { gql } from '@apollo/client'
import Lessons from '../../../../../pages/admin/lessons/new/index'
import { MockedProvider } from '@apollo/client/testing'
import { act, render, waitFor } from '@testing-library/react'
import dummyLessonData from '../../../../../__dummy__/lessonData'
import dummySessionData from '../../../../../__dummy__/sessionData'
import dummyAlertData from '../../../../../__dummy__/alertData'
import '@testing-library/jest-dom'
import GET_APP from '../../../../../graphql/queries/getApp'

const EXERCISES = gql`
  query {
    exercises {
      flaggedAt
      module {
        lesson {
          title
        }
      }
    }
  }
`

const mockExercises = [
  {
    flaggedAt: '1651723200000',
    module: {
      lesson: {
        title: 'Arrays'
      }
    }
  },
  {
    flaggedAt: '1641099600000',
    module: {
      lesson: {
        title: 'Arrays'
      }
    }
  },
  {
    flaggedAt: '1609563600000',
    module: {
      lesson: {
        title: 'Foundations of JavaScript'
      }
    }
  },
  {
    flaggedAt: null,
    module: {
      lesson: {
        title: 'Arrays'
      }
    }
  },
  {
    flaggedAt: '1357189200000',
    module: {
      lesson: {
        title: 'Foundations of JavaScript'
      }
    }
  },
  {
    flaggedAt: '1462420800000',
    module: {
      lesson: {
        title: 'Foundations of JavaScript'
      }
    }
  },
  {
    flaggedAt: null,
    module: {
      lesson: {
        title: 'Foundations of JavaScript'
      }
    }
  }
]

const mocks = {
  lessonsLoaded: [
    {
      request: { query: GET_APP },
      result: {
        data: {
          session: dummySessionData,
          lessons: dummyLessonData,
          alerts: dummyAlertData
        }
      }
    },
    {
      request: { query: EXERCISES },
      result: {
        data: {
          exercises: mockExercises
        }
      }
    }
  ],
  lessonsNotLoaded: [
    {
      request: { query: GET_APP },
      result: {
        data: {
          session: dummySessionData,
          lessons: undefined,
          alerts: dummyAlertData
        }
      }
    },
    {
      request: { query: EXERCISES },
      result: {
        data: {
          exercises: mockExercises
        }
      }
    }
  ]
}

describe('new admin lessons page tests', () => {
  test('should render adminLessonCard components and show number of pending questions', async () => {
    expect.assertions(5)

    const { container, getByText, getAllByText } = render(
      <MockedProvider mocks={mocks.lessonsLoaded} addTypename={false}>
        <Lessons />
      </MockedProvider>
    )

    // Used to wait for the query response to arrive
    await act(async () => await new Promise(res => setTimeout(() => res(), 0)))

    await waitFor(() => expect(getByText('3 Pending Questions')).toBeTruthy())
    expect(getByText('2 Pending Questions')).toBeTruthy()
    expect(getAllByText('No Pending Questions')).toBeTruthy()
    expect(getByText('Arrays')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
  test('should not render any components if lessons data does not load', async () => {
    expect.assertions(3)

    const { container, getByText, getAllByText } = render(
      <MockedProvider mocks={mocks.lessonsNotLoaded}>
        <Lessons />
      </MockedProvider>
    )

    await act(async () => await new Promise(res => setTimeout(() => res(), 0)))
    expect(() => getAllByText('No Pending Questions')).toThrow()
    expect(() => getByText('Arrays')).toThrow()
    expect(container).toMatchSnapshot()
  })
})
