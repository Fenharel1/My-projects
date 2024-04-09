package com.restapirant.backend.Services;

import java.util.Date;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.restapirant.backend.Models.UserLogin;
import com.restapirant.backend.Models.Entities.User;
import com.restapirant.backend.Repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository repository;
  private final PasswordEncoder passwordEncoder;

  public User save(User user){
    user.setCreatedAt(new Date());
    var savedUser = repository.save(user);
    return savedUser; 
  }

  public List<User> getAll(){
    return repository.findAll();
  }

  public org.springframework.security.core.userdetails.User getUserDetailsByEmail(String email){
    var user = repository.findByEmail(email);
    List<GrantedAuthority> authorities = null;
    var userDetails = new org.springframework.security.core.userdetails.User(
      user.getFirstname(),
      user.getPassword(),
      true,
      true,
      true,
      true,
      authorities 
    );
    return userDetails;
  }

  public User registerUser(UserLogin register){
    var savedUser = repository.save(
      User.builder()
      .email(register.getEmail())
      .password(passwordEncoder.encode(register.getPassword()))
      .build()
      );
    
    return savedUser;
  }
}
