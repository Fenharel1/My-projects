package com.restapirant.backend.Repositories;

import java.time.LocalDateTime;
import org.springframework.stereotype.Component;

import com.restapirant.backend.Models.Entities.BaseEntity;

import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

@Component
public class RepositoryListener {

  @PrePersist
  protected void onCreate(Object entity) {
    if (entity instanceof BaseEntity) {
      BaseEntity baseEntity = (BaseEntity) entity;
      baseEntity.setCreatedAt(LocalDateTime.now().withNano(0));
    }
  }
  @PreUpdate
  protected void onUpdate(Object entity) {
    if (entity instanceof BaseEntity) {
      BaseEntity baseEntity = (BaseEntity) entity;
      baseEntity.setUpdateAt(LocalDateTime.now().withNano(0));
    }
  }
}
