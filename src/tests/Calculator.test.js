import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { number } from "mathjs"
import Calculator from "../components/Calculator"

describe("Calculator", () => {
    test("deve renderizar corretamente os dígitos de operações +, -, *, /", () => {
        render(<Calculator />)

        // screen.logTestingPlaygroundURL()

        const bottonSum = screen.getByRole('button', {
            name: /\+/i
        })

        expect(bottonSum).toBeInTheDocument()

        const bottonSub = screen.getByRole('button', {
            name: /\-/i
        })

        expect(bottonSub).toBeInTheDocument()

        const bottonMulti = screen.getByRole('button', {
            name: /\*/i
        })

        expect(bottonMulti).toBeInTheDocument()

        const bottonDiv = screen.getByRole('button', {
            name: /\//i
        })

        expect(bottonDiv).toBeInTheDocument()

    })

    test("deve garantir que o teste de multiplicação funcione", async () => {
        const user = userEvent.setup()

        render(<Calculator />)

        // screen.logTestingPlaygroundURL()

        const numberFive = screen.getByRole('button', {
            name: /5/i
        })

        const numberTwo = screen.getByRole('button', {
            name: /2/i
        })

        const bottonMult = screen.getByRole('button', {
            name: /\*/i
        })

        const bottonEqual = screen.getByRole('button', {
            name: /=/i
        })

        await user.click(numberFive)
        await user.click(bottonMult)
        await user.click(numberTwo)
        await user.click(bottonEqual)

        // screen.logTestingPlaygroundURL()

        const value = screen.getByTestId("result")

        screen.logTestingPlaygroundURL()
        screen.debug()

        expect(value).toHaveTextContent("10")
    })

    test("deve garantir que o teste de divisão funcione", async () => {
        const user = userEvent.setup()

        render(<Calculator />)

        // screen.logTestingPlaygroundURL()

        const numberSix = screen.getByRole('button', {
            name: /6/i
        })

        const numberTwo = screen.getByRole('button', {
            name: /2/i
        })

        const bottonDiv = screen.getByRole('button', {
            name: /\//i
        })

        const bottonEqual = screen.getByRole('button', {
            name: /=/i
        })

        await user.click(numberSix)
        await user.click(bottonDiv)
        await user.click(numberTwo)
        await user.click(bottonEqual)

        // screen.logTestingPlaygroundURL()

        const value = screen.getByTestId("result")

        screen.logTestingPlaygroundURL()
        screen.debug()

        expect(value).toHaveTextContent("3")
    })

    test("teste de concatenação de cálculos", async () => {
        const user = userEvent.setup()

        render(<Calculator />)

         // screen.logTestingPlaygroundURL()

         const numbersix = screen.getByRole('button', {
            name: /6/i
        })

        const numberTwo = screen.getByRole('button', {
            name: /2/i
        })

        const numberEight = screen.getByRole('button', {
            name: /8/i
        })    

        const bottonDiv = screen.getByRole('button', {
            name: /\//i
        })

        const bottonsum = screen.getByRole('button', {
            name: /\+/i
        })

        const bottonEqual = screen.getByRole('button', {
            name: /=/i
        })

        await user.click(numbersix)
        await user.click(bottonDiv)
        await user.click(numberTwo)
        await user.click(bottonsum)
        await user.click(numberEight)
        await user.click(bottonEqual)

        const value = screen.getByTestId("result")

        screen.logTestingPlaygroundURL()
        screen.debug()

        expect(value).toHaveTextContent("11")
    })

    test("teste de concatenação de cálculos", async () => {
        const user = userEvent.setup()

        render(<Calculator />)

         // screen.logTestingPlaygroundURL()

         const numbersix = screen.getByRole('button', {
            name: /6/i
        })

        const numberTwo = screen.getByRole('button', {
            name: /2/i
        })

        const numberEight = screen.getByRole('button', {
            name: /8/i
        })    

        const bottonDiv = screen.getByRole('button', {
            name: /\//i
        })

        const bottonsum = screen.getByRole('button', {
            name: /\+/i
        })

        const bottonEqual = screen.getByRole('button', {
            name: /=/i
        })

        await user.click(numbersix)
        await user.click(bottonsum)
        await user.click(numberTwo)
        await user.click(bottonDiv)
        await user.click(numberEight)
        await user.click(bottonEqual)

        const value = screen.getByTestId("result")

        screen.logTestingPlaygroundURL()
        screen.debug()

        expect(value).toHaveTextContent("6.25")
    })
})