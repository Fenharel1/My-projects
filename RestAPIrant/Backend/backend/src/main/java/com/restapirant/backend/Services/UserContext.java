package com.restapirant.backend.Services;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Service
@Scope("prototype")
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class UserContext {
  Long currentUserId;
}
