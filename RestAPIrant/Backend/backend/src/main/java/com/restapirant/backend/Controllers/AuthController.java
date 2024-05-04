package com.restapirant.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.restapirant.backend.Models.DTOs.UserDTO;
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
  public ResponseEntity<?> login(@RequestBody UserDTO.login login) {
    return ResponseEntity.ok(authService.login(login.getEmail(), login.getPassword())); 
  }

  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody UserDTO.toRegister register) {
    var registeredUser = userService.registerUser(register);
    return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
  }

  @PostMapping("/forgot-password")
  public ResponseEntity<?> postMethodName(@RequestBody String email) {
    return ResponseEntity.ok(authService.forgotPassword(email));
  }

  // @PostMapping("/testing")
  // public String testing(@RequestParam("username") String username, @RequestParam("password") String password) {
  //   return username + " " + password;
  // }
  
}
