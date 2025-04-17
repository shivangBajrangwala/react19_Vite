import styled from "styled-components"
export default function EventHandeling() {

    // CLICK FUNCTION
    const handleClick = (userName) => {
        alert(`Hey ${userName}, Welcome!`);
    }
    // ANCHOR STYLE
    const Button = styled.a`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        line-height: 1.4;
        color: #FFFFFF;
        background-color: #535bf2;
        transition: .3s;
        &:hover{
            background-color: #FFFFFF;
            color: #535bf2;
        }
    `
    return (
        <>
            <Button onClick={() => { handleClick("Akshay💘") }} className="test_class" title="Click Me !!!">Click Me !!!</Button>
        </>
    )
}