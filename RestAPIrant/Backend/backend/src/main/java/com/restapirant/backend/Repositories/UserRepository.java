package com.restapirant.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restapirant.backend.Models.Entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
  public User findByEmail(String email);
}
