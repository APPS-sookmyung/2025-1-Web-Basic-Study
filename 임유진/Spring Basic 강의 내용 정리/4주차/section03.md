# 1. 정적 컨텐츠

- 정적 컨텐츠: 파일을 있는 그대로 사용자에게 전달

# 2. MVC와 템플릿 엔진

- MVC & 템플릿 엔진: 서버 내에서 HTML 코드를 수정하여 제공
- MVC: Model View Controller

1. 웹 브라우저에서 localhost:8080에 hello-mvc를 넘김
2. 내장 톰켓 서버 거침
3. name:spring 과 같은 파라미터를 받아 viewResolver를 거침
4. Thymeleaf 템플릿 엔진 처리 후 웹 브라우저에 반환

# 3. API

- '@ResponseBody' : HTTP의 BODY에 문자 내용을 직접 반환, viewResolver 대신 HttpMessageConverter가 동작
