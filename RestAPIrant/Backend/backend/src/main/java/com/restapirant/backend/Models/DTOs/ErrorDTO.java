package com.restapirant.backend.Models.DTOs;

import org.springframework.http.HttpStatus;

public record ErrorDTO(
  HttpStatus status,
  String description
) {
}
