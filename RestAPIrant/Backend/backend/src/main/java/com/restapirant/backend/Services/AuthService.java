package com.restapirant.backend.Services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.restapirant.backend.Models.DTOs.UserDTO;
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
  private final UserContext userContext;

  public UserDTO.logged login(String email, String password) {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
    var token = jwtService.createToken(email);
    var userOpt = userRepository.findByEmail(email);
    if(userOpt.isPresent());
    var user = userOpt.get();

    userContext.setCurrentUserId(user.getId());

    var userLogged = new UserDTO.logged();
    userLogged.email = email;
    userLogged.token = token;
    userLogged.firstname = user.getFirstname();
    userLogged.lastname = user.getLastname();

    return userLogged;
  }

  public boolean forgotPassword(String email){
    // validate email
    // generate token
    // send to email
    return true;
  }
}
