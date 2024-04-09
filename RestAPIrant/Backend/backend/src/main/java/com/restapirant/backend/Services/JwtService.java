package com.restapirant.backend.Services;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.restapirant.backend.Constants;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtService {

  @Value("${jwt.key}")
  private String SecretKeyString;

  public String createToken(String username, HashMap<String,?> claims){
    return Jwts.builder()
      .signWith(getSecretKey())
      .setClaims(claims)
      .setSubject(username)
      .setIssuedAt(new Date())
      .setExpiration(new Date(System.currentTimeMillis() + Constants.TIME_EXPIRATION))
      .compact();
  }

  public String createToken(String username){
    return createToken(username, new HashMap<>());
  }

  private Key getSecretKey(){
    return Keys.hmacShaKeyFor(SecretKeyString.getBytes());
  }
}
