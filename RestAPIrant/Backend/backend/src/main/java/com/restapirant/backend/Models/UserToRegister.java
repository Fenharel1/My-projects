package com.restapirant.backend.Models;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserToRegister(
  @NotBlank
  String firstname,
  @NotBlank
  String lastname,
  @NotBlank
  String alias,
  @NotBlank
  String email,
  @NotBlank
  @Size(min = 6, max = 10)
  String password
) {

}
