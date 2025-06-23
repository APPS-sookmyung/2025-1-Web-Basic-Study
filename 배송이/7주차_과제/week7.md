섹션 7: 스프링 DB 접근 기술
 1.H2 데이터베이스 설치
 - H2는 Java 기반의 경량형 인메모리 데이터베이스.
 - 로컬에서 빠르게 테스트하거나 개발용으로 많이 사용됨.
 2.순수 JDBC
 - Java의 기본 DB 연동 방식.
 - DriverManager, Connection, PreparedStatement 등을 직접 사용.
 3.스프링 통합 테스트
 -스프링 환경에서 테스트하는 방법.
 -@SpringBootTest와 같은 어노테이션을 사용.
 -DB 연동, 컨텍스트 로딩 등을 실제와 유사하게 테스트할 수 있음.
 4.스프링 JdbcTemplate
 -순수 JDBC의 단점을 보완한 스프링 제공 템플릿 클래스.
 - 리소스 자동 관리, 반복 코드 제거.
 -SQL은 여전히 직접 작성해야 함.
 5.JPA
 -객체와 관계형 DB 사이의 매핑을 처리하는 표준 API.
 - 엔티티(Entity) 클래스 기반으로 DB를 다룸.
 - SQL 직접 작성 없이도 CRUD 가능.
 - EntityManager로 조작하며, ORM(Object-Relational Mapping)의 핵심 기술.
 6.스프링 데이터 JPA
 - JPA를 더 간편하게 사용하도록 도와주는 Spring 기술.
 - JpaRepository 등의 인터페이스만 상속받으면 기본 CRUD 자동 구현.
 - 쿼리 메서드 이름만으로 검색 기능 구현 가능 (findByName 등).
 섹션 8: AOP (Aspect-Oriented Programming)7.	AOP가 필요한 상황
 -로깅, 보안, 트랜잭션 같은 공통 관심사가 여러 곳에 흩어져 있을 때.
 -핵심 비즈니스 로직과 별도로 분리하여 재사용성과 유지보수성 향상.
 8.AOP 적용
 - 스프링 AOP는 프록시 기반.
 -@Aspect, @Before, @After, @Around 등의 어노테이션 사용.
 -공통 관심사 로직을 핵심 로직과 분리해서 모듈화 가능.