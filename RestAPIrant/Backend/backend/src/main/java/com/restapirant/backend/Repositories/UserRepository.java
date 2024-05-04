package com.restapirant.backend.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restapirant.backend.Models.Entities.User;

public interface UserRepository extends JpaRepository<User,Long> {
  public Optional<User> findByEmail(String email);
}
