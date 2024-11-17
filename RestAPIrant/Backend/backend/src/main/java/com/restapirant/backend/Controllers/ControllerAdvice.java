package com.restapirant.backend.Controllers;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.restapirant.backend.Models.DTOs.BaseException;
import com.restapirant.backend.Models.DTOs.ErrorDTO;

@RestControllerAdvice
public class ControllerAdvice {

  @ExceptionHandler(BaseException.class)
  public ResponseEntity<ErrorDTO> runtimeExceptionHandler(BaseException ex){
    var error = new ErrorDTO(ex.getStatus(),ex.getMessage());
    return new ResponseEntity<>(error, ex.getStatus());
  }
}
