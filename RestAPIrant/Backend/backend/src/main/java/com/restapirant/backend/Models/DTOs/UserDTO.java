package com.restapirant.backend.Models.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

public class UserDTO {
  @NoArgsConstructor
  @Data
  public static class logged{
    public String firstname;
    public String lastname;
    public String email;
    public String token;
  }

  @NoArgsConstructor
  @Data
  public static class login{
    @NotBlank
    public String email;
    @Size(min = 6, max = 20)
    public String password;
  }

  @NoArgsConstructor
  @Data
  public static class saved{
    public Long id;
    public String firstname;
    public String lastname;
    public String alias;
    public String email;
  }

  @NoArgsConstructor
  @Data
  public static class toRegister{
    public String firstname;
    public String lastname;
    public String alias;
    public String email;
    public String password;
  }

  @NoArgsConstructor
  @Data
  public static class validUserData{
    @NotBlank
    public String firstname;
    @NotBlank
    public String lastname;
    public String alias;
    @NotBlank
    @Email
    public String email;
  }

  @NoArgsConstructor
  @Data
  public static class toUpdate{
    private String email;
    private String firstname;
    private String lastname;
  }
}
