package com.restapirant.backend.Models.DTOs;

import org.springframework.web.multipart.MultipartFile;

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
    public String email;
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
  public static class toUpdate{
    private String email;
    private String firstname;
    private String lastname;
  }
}
