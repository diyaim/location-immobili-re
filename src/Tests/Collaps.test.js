/* eslint-disable no-undef */
import Collaps from "../components/collaps";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Collaps', () => {
  test('Should render without crash', async () => {
    render(
      <Collaps />
    )
  })
    test('Should open collaps', async () => {
    render(
      <Collaps title="collaps1" text="collaps est ouvert"/>
    )
    const collapsHead = screen.getByTestId('collaps_head')
    const collapsText = screen.getByTestId('collaps_text')
    
    expect(collapsText).toHaveAttribute('aria-hidden', 'true');
    fireEvent.click(collapsHead);
    expect(collapsText).toHaveAttribute('aria-hidden', 'false');
  })
})