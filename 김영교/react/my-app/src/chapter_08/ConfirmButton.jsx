import React from 'react';

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirmed: false,
    };
  }

  // 클래스 바깥에서 화살표 함수 정의 (필드 문법)
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? '확인됨' : '확인하기'}
      </button>
    );
  }
}

export default ConfirmButton;
