package com.restapirant.backend.Config;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.boot.model.internal.ListBinder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.restapirant.backend.Repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

  private final UserRepository userRepository;

  @Bean
  public PasswordEncoder getPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  UserDetailsService getUserDetailsService() {
    return email -> {
      var user = userRepository.findByEmail(email);
      System.out.println(user.toString());
      List<GrantedAuthority> authorities = new ArrayList<>();
      var userDetails = new org.springframework.security.core.userdetails.User(
          user.getEmail(),
          user.getPassword(),
          true,
          true,
          true,
          true,
          authorities);
      return userDetails;
    };
  }

  @Bean
  public AuthenticationProvider getAuthenticationProvider() {
    DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
    authProvider.setUserDetailsService(getUserDetailsService());
    authProvider.setPasswordEncoder(getPasswordEncoder());
    return authProvider;
  }

  @Bean
  public AuthenticationManager getAuthenticationManager(AuthenticationConfiguration config) throws Exception {
    return config.getAuthenticationManager();
  }
}
