# 1. 프로젝트 생성

하얀 에러 페이지가 뜨면 성공ㅎㅎ

# 2. 라이브러리 살펴보기

많은 라이브러리를 외부에서 불러와 사용하고 있음

# 3. View 환경설정

컨트롤러에서 리턴 값으로 문자를 반환하면 뷰 리졸버('viewResolver')가 화면을 찾아서 처리함

- 스프링 부트 템플릿엔진 기본 viewName 매핑
- 'resources:templates/'+{ViewName}+'.html'

1. 웹 브라우저가 localhost:8080/hello를 내장 톰켓 서버로 넘김
2. helloController 실행 -> hello.html을 스프링에 찾아서 타임루프 템플릿 엔진이 처리 (return값)

# 4. 빌드하고 실행하기

1. gradlew -> gradlew build 로 빌드
2. java -jar을 통해 실행

서버 배포 시에는 jar 파일만 넣어주면 서버에서 스프링이 실행됨
