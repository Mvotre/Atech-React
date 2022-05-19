import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Search from "./search";

it("properly renders the component", () => {
    render(<Search />)
    
    const element = screen.getByTestId("search");
    expect(element).toBeTruthy()
})

it("accepts input value", () => {
    render(<Search />)
    
    const element = screen.getByTestId("input");
    fireEvent.change(element, {target: {value: "Testing"}})
    expect(element.value).toBe("Testing")
})