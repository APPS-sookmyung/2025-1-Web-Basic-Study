-컴포넌트 스캔 (Component Scan)
스프링이 클래스를 자동으로 찾아서 빈(bean)으로 등록해주는 기능
@Component, @Service, @Repository, @Controller 같은 어노테이션을 클래스에 붙이면,스프링이 @ComponentScan이 선언된 위치부터 자동으로 탐색해서 빈으로 등록해줌.

-컴포넌트 스캔 (Component Scan)
스프링이 클래스를 자동으로 찾아서 빈(bean)으로 등록해주는 기능
@Component, @Service, @Repository, @Controller 같은 어노테이션을 클래스에 붙이면, 스프링이 @ComponentScan이 선언된 위치부터 자동으로 탐색해서 빈으로 등록해줌

-자바 코드로 직접 스프링 빈 등록하기 (@Configuration + @Bean)
스프링에서는 @Configuration 클래스 안에 @Bean 메서드를 사용하면, 개발자가 직접 객체(빈)를 생성하고 등록할 수 있음. 자동 컴포넌트 스캔을 쓰지 않고도, 필요한 객체를 명시적으로 등록할 수 있어 유지보수나 제어가 쉬움.
@Configuration + @Bean 조합으로 스프링 컨테이너에 직접 객체를 등록할 수 있음.
->자동 등록이 아닌 직접적인 수동 등록 방식이며, 명확한 의존성 관리에 유리함.
