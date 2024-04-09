package com.restapirant.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restapirant.backend.Models.UserLogin;
import com.restapirant.backend.Services.AuthService;
import com.restapirant.backend.Services.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

  private final UserService userService;
  private final AuthService authService;

  @PostMapping("/login")
  // public ResponseEntity<?> login(@RequestBody UserLogin login) {
  public ResponseEntity<?> login(@RequestBody UserLogin login) {
    return ResponseEntity.ok(authService.login(login.getEmail(), login.getPassword())); 
  }

  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody UserLogin register) {
    var registeredUser = userService.registerUser(register);
    return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
  }
}
