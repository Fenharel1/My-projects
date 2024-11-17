package com.restapirant.backend.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restapirant.backend.Services.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController extends BaseController {

  private final UserService service;

  @GetMapping
  public ResponseEntity<?> getAll() {
    return ResponseEntity.ok(service.getAll());
  }

  
}
