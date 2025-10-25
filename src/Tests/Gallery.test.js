import Gallery from '../components/gallery';
import { render, screen, fireEvent } from '@testing-library/react'

describe('Gallery', () => {
    test('Should render Gallery', async () => {
        render(
            <Gallery />
        )
    })
    test('Should render Gallery with one picture', async () => {
        render(
            <Gallery images={["picture.png"]} />
        )
    })
    test('Should render Gallery with one picture and alt', async () => {
        render(
            <Gallery alt="my picture" />
        )
    })
    test('Should render Gallery with two pictures and navigation', async () => {
        render(
            <Gallery images={["picture1.png", "picture2.png"]} />
        )
        const left = screen.getByTestId('arrow_left_desktop')
        const leftRespons = screen.getByTestId('arrow_left_respons')
        const right = screen.getByTestId('arrow_right_desktop')
        const rightRespons = screen.getByTestId('arrow_right_respons')
        const counter = screen.getByTestId('counter')
        expect(counter.textContent).toBe("1/2")
        fireEvent.click(left);
        expect(counter.textContent).toBe("2/2")
        fireEvent.click(leftRespons);
        expect(counter.textContent).toBe("1/2")
        fireEvent.click(right);
        expect(counter.textContent).toBe("2/2")
        fireEvent.click(rightRespons);
        expect(counter.textContent).toBe("1/2")

    })
});