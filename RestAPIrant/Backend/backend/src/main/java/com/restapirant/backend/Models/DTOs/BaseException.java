package com.restapirant.backend.Models.DTOs;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class BaseException extends RuntimeException {
  private String message;
  private HttpStatus status;

  public BaseException(String message, HttpStatus status){
    super(message);
    this.message = message; this.status = status;
  }
}
