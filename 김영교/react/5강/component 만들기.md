component는 function component와 class component로 나뉨

function component
: 리액트 컴포넌트를 간단한 함수로 생각

function Welcome(props){
return <h1> 안녕, {props.name}</h1>;
}//함수 컴포넌트는 간단

class component

class Welcome ectends React.Component{
render(){
return <h1>안녕, {this.props.name}</ha>;
}
}//react.component를 상속받아서 만드는 것

component의 이름
: 항상 대문자로 시작해야한다!

const element = <div />;//HTML div 태그로 인식
const element = <Welcome name="영교" />;//Welcome이라는 react component로 인식

component와 렌더링

1. component로부터 element를 생성

function Welcome(props){
retutn <h1>안녕, {props.name}</h1>;
}
const element = <Welcome name= '영교' />;
ReactDOM.render(
element,
document.getElementById('root')
);
