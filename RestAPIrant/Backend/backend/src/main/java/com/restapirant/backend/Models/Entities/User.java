package com.restapirant.backend.Models.Entities;

import java.util.List;

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
  private String firstname;
  private String lastname;
  private String alias;
  private String email;
  private String password;
  private String imgUrl;

  @OneToMany(mappedBy = "user")
  private List<Recipe> recipes;

}
