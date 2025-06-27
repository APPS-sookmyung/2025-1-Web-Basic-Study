import styled from "styled-components";

const Wrapper= styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;

`;

const Block= styled.div`
    padding: ${(props)=> props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props)=> props.backgorundColor};
    color: white;
    font-size: 2rem;
    font-weight: bolid;
    text-align: center;
`;

const blockItems =[
    {
        label: "1",
        padding: "1rem",
        backgorundColor: "red",

    },
    {
        label: "2",
        padding: "3rem",
        backgorundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgorundColor: "blue",
    },
];

function Blocks(props){
    return (
        <Wrapper>
            {blockItems.map((blockItem)=> {
                return (
                    <Block
                        padding={blockItem.padding}
                        backgorundColor={blockItem.backgorundColor}
                    >
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>

    );
}

export default Blocks;