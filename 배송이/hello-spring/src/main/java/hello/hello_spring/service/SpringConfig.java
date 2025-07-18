package hello.hello_spring;

import hello.hello_spring.domain.Member;
import hello.hello_spring.repository.MemberRepository;
import hello.hello_spring.repository.MemoryMemberRepository;
import hello.hello_spring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    @Bean
    public MemberService memberService(){
        return new MemberService(memberRepository());
        private final MemberRepository memberRepository;

    @Autowired
    public SpringConfig(MemberRepository memberRepository){
            this.memberRepository = memberRepository;
        }

        @Bean
        public MemberRepository memberRepository(){
            return new MemoryMemberRepository();
            public MemberService memberService(){
                return new MemberService(memberRepository);
            }
        }