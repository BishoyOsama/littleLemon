import {render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar";
import '@babel/preset-react'

test('check input text', () => {
    render( <Navbar/> )

    const text = screen.getByText(/Login/)
    expect(text).toBeInTheDocument();
 })