function MyButton(props) {
  const [isCliked, setISCliked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setISCliked(true) },

    isCliked ? 'Clicked!' : 'Click here!'
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
