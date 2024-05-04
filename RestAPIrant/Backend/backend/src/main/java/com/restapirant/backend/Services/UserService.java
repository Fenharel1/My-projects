package com.restapirant.backend.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.restapirant.backend.Models.DTOs.UserDTO;
import com.restapirant.backend.Models.Entities.User;
import com.restapirant.backend.Repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final ModelMapper mapper;

  public List<User> getAll(){
    return repository.findAll();
  }

  public org.springframework.security.core.userdetails.User getUserDetailsByEmail(String email){
    var userOpt = repository.findByEmail(email);
    if(!userOpt.isPresent()) return null;
    var user = userOpt.get(); 
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

  public UserDTO.saved registerUser(UserDTO.toRegister register){
    var userToSave = User.builder()
      .email(register.email)
      .firstname(register.firstname)
      .lastname(register.lastname)
      .password(passwordEncoder.encode(register.password))
      .alias(register.alias)
      .build();
    System.out.println(userToSave.toString());
    var temp = repository.save(userToSave);
    var savedUser = mapper.map(temp, UserDTO.saved.class);
    System.out.println(savedUser.toString());
    return savedUser;
  }

  public UserDTO.saved updateUser(UserDTO.toUpdate updateUser){
    return null;
  }
}
