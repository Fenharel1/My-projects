package com.restapirant.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restapirant.backend.Models.DTOs.UserDTO;
import com.restapirant.backend.Services.AuthService;
import com.restapirant.backend.Services.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController extends BaseController {

  private final UserService userService;
  private final AuthService authService;

  @PostMapping("/login")
  public ResponseEntity<?> login(@Valid @RequestBody UserDTO.login login, BindingResult result) {
    if(result.hasErrors()) return validation(result);
    return ResponseEntity.ok(authService.login(login.getEmail(), login.getPassword())); 
  }

  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody UserDTO.toRegister register) {
    var registeredUser = userService.registerUser(register);
    return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
  }
  
  @PostMapping("/validate-user")
  public ResponseEntity<?> validateUser(@Valid @RequestBody UserDTO.validUserData userData, BindingResult result) {
    if(result.hasErrors()) return validation(result);
    userService.validateUser(userData);
    return ResponseEntity.ok(true);
  }

  @PostMapping("/forgot-password")
  public ResponseEntity<?> forgotPassword(@RequestBody String email) {
    return ResponseEntity.ok(authService.forgotPassword(email));
  }
  // @PostMapping("/testing")
  // public String testing(@RequestParam("username") String username, @RequestParam("password") String password) {
  //   return username + " " + password;
  // }
}
