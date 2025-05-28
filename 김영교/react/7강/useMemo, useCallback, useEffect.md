useMemo
: memoized value를 리턴하는 hook

메모이즈드 밸류:
메모를 해두었다가 나중에 다시 사용하는 법

const memoizedValue = useMemo(
()=> {
//연산량이 높은 작업을 수행하여 결과를 반환
return computeExpensiveValue(의존성 변수1, 의존성 변수2);

    },
    [의존성 변수1, 의존성 변수2]

);

의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행됨

의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출됨

useCallback()
: useMemo와 유사하지만 값이 아닌 함수를 반환
: 의존성 배열에 값이 바뀐 경우에만 함수를 새로 정의해서 return

useCallback(함수, 의존성 배열);
useMemo(()=> 함수, 의존성 배열);

useRef()
:레퍼런스(특정 컴포넌트에 접근할 수 있는 객체)를 사용하기 위한 hook
refObject.current(현재 참조하고 있는 element)

const refContainer = useRef(초깃값);

useRef() Hook은 내부의 데이터가 변경되었을 때 별도로 알리지 않는다
callback ref
