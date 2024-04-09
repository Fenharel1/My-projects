package com.restapirant.backend.Config;

import java.io.IOException;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtValidationFilter extends OncePerRequestFilter {

  @Value("${jwt.key}")
  private String secretKey;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    String header = request.getHeader("Authorization");

    if (header == null || !header.startsWith("Bearer ")) {
      filterChain.doFilter(request, response);
      return;
    }

    var token = header.substring(7);
    try {
      Claims claims = Jwts.parserBuilder()
          .setSigningKey(getSecretKey())
          .build()
          .parseClaimsJws(token)
          .getBody();

      var username = claims.getSubject();
      var expiration = claims.getExpiration();
      if (expiration.after(new Date())) {
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
            username,
            null,
            null);
        SecurityContextHolder.getContext().setAuthentication(auth);
        filterChain.doFilter(request, response);
      } 
    } catch (JwtException e) {
      Map<String, String> body = new HashMap<>();
      body.put("message", "El token no es valido");
      body.put("error", e.getMessage());
      response.getWriter().write(new ObjectMapper().writeValueAsString(body));
      response.setStatus(401);
      response.setContentType("application/json");
    }
  }

  private Key getSecretKey() {
    byte[] bytes = secretKey.getBytes();
    return Keys.hmacShaKeyFor(bytes);
  }
}
