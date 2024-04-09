package com.restapirant.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restapirant.backend.Models.Entities.User;
import com.restapirant.backend.Services.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

  private final UserService service;

  @PostMapping
  public ResponseEntity<?> save(@RequestBody User user) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));
  }

  @GetMapping
  public ResponseEntity<?> getAll() {
    return ResponseEntity.ok(service.getAll());
  }
}
