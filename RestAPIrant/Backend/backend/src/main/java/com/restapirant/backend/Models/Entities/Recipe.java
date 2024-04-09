package com.restapirant.backend.Models.Entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.UniqueConstraint;
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
public class Recipe extends BaseEntity {
  private String title;
  private int portions;
  private String introduction;
  private String instructions;
  private String farewell;
  private String imgUrl;

  @ManyToOne
  @JoinColumn(
    name = "user_id"
  )
  private User user;

  @OneToOne
  @JoinColumn(
    name = "time_id"
  )
  private RecipeTime time;

  @ManyToMany
  @JoinTable(
    name = "recipe_flavour",
    joinColumns = @JoinColumn(name="recipe_id"),
    inverseJoinColumns = @JoinColumn(name="flavour_id"),
    uniqueConstraints = {@UniqueConstraint(columnNames = {"recipe_id","flavour_id"})}
  )
  private List<Flavour> flavours;

  @ManyToMany
  @JoinTable(
    name = "recipe_utensil",
    joinColumns = @JoinColumn(name="recipe_id"),
    inverseJoinColumns = @JoinColumn(name="utensil_id"),
    uniqueConstraints = {@UniqueConstraint(columnNames = {"recipe_id","utensil_id"})}
  )
  private List<Utensil> utensils;
}
