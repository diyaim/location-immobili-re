/* eslint-disable no-undef */
import Rating from '../components/Rating';
import { render, screen } from '@testing-library/react'

describe('Rating', () => {
    test('Should render no stars', async () => {
        render(
            <Rating />
        )
        const etoile1 = screen.getByTestId('etoile1')
        const etoile2 = screen.getByTestId('etoile2')
        const etoile3 = screen.getByTestId('etoile3')
        const etoile4 = screen.getByTestId('etoile4')
        const etoile5 = screen.getByTestId('etoile5')

        expect(etoile1.className).toBe('rating_star')
        expect(etoile2.className).toBe('rating_star')
        expect(etoile3.className).toBe('rating_star')
        expect(etoile4.className).toBe('rating_star')
        expect(etoile5.className).toBe('rating_star')
    })
    test('Should render five stars', async () => {
        render(
            <Rating value="5" />
        )
        const etoile1 = screen.getByTestId('etoile1')
        const etoile2 = screen.getByTestId('etoile2')
        const etoile3 = screen.getByTestId('etoile3')
        const etoile4 = screen.getByTestId('etoile4')
        const etoile5 = screen.getByTestId('etoile5')

        expect(etoile1.className).toBe('rating_star rating_star--on')
        expect(etoile2.className).toBe('rating_star rating_star--on')
        expect(etoile3.className).toBe('rating_star rating_star--on')
        expect(etoile4.className).toBe('rating_star rating_star--on')
        expect(etoile5.className).toBe('rating_star rating_star--on')
    })
    test('Should render three stars', async () => {
        render(
            <Rating value="3" />
        )
        const etoile1 = screen.getByTestId('etoile1')
        const etoile2 = screen.getByTestId('etoile2')
        const etoile3 = screen.getByTestId('etoile3')
        const etoile4 = screen.getByTestId('etoile4')
        const etoile5 = screen.getByTestId('etoile5')

        expect(etoile1.className).toBe('rating_star rating_star--on')
        expect(etoile2.className).toBe('rating_star rating_star--on')
        expect(etoile3.className).toBe('rating_star rating_star--on')
        expect(etoile4.className).toBe('rating_star')
        expect(etoile5.className).toBe('rating_star')
    })
});