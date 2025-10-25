/* eslint-disable no-undef */
import Card from "../components/card"
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Card', () => {
    test('Should render without crash', async () => {
        render(
          <MemoryRouter>
            <Card />
          </MemoryRouter>
        )
    })
    test('Should render title Mon image', async () => {
        render(
          <MemoryRouter>
            <Card id={1} imageUrl={null} titre="Mon image"/>
          </MemoryRouter>
        )
        const imageTitle = screen.getByTestId('title')
        expect(imageTitle.textContent).toBe('Mon image')
    })
});