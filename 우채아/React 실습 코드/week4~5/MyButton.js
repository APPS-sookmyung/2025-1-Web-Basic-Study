function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    
    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click Here!'
    )
}

//Dom Container에 렌더링하기 위한 코드
const domContainer = document.querySelector('#root'); 
ReactDOM.render(React.createElement(MyButton), domContainer);