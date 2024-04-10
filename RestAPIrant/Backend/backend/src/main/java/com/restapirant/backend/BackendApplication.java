package com.restapirant.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.restapirant.backend.Models.Entities.User;
import com.restapirant.backend.Repositories.UserRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// @Bean
	public CommandLineRunner commandLineRunner(
		UserRepository userRepo
	){
		return args -> {
			userRepo.save(User.builder().firstname("Pepe").lastname("Perez").alias("El chef").password("123").build());
		};
	}

}
