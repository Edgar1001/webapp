// src/main/java/com/example/webapp/repository/UserRepository.java
package com.example.webapp.repository;

import com.example.webapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

