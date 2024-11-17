package com.restapirant.backend.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

public class BaseController {
  protected ResponseEntity<?> validation(BindingResult result){
    Map<String, String> errors = new HashMap<>();
    result.getFieldErrors().forEach((err) -> {
      errors.put(err.getField(), "Este campo " + err.getDefaultMessage());
    });
    return ResponseEntity.badRequest().body(errors);    
  }
}