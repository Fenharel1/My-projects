package com.restapirant.backend.Models.Entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class User extends BaseEntity {
  @Column(nullable = false, length = 100)
  private String firstname;
  @Column(nullable = false, length = 100)
  private String lastname;
  @Column(length = 200)
  private String alias;
  @Column(unique = true, nullable = false)
  private String email;
  @Column(nullable = false, length = 100)
  private String password;
  private String imgUrl;

  @OneToMany(mappedBy = "user")
  private List<Recipe> recipes;
}
