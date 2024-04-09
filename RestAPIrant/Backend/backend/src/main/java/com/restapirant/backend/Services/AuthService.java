package com.restapirant.backend.Services;

import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.restapirant.backend.Models.UserLogged;
import com.restapirant.backend.Repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
  @Value("${jwt.key}")
  private String key;

  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;
  private final UserRepository userRepository;

  public UserLogged login(String email, String password) {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
    var token = jwtService.createToken(email);
    var user = userRepository.findByEmail(email);
    return UserLogged.builder()
      .email(email)
      .token(token)
      .firstname(user.getFirstname())
      .lastname(user.getLastname())
      .build();
  }
}
