package com.restapirant.backend.Models.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment extends BaseEntity {
  private String comment;
  private int stars;

  @OneToOne
  @JoinColumn(
    name = "user_id"
  )
  private User user;

  @OneToOne
  @JoinColumn(
    name = "recipe_id"
  )
  private Recipe recipe;
}
