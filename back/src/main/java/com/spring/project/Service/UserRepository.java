package com.spring.project.Service;

// import java.util.List;

import com.spring.project.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // List<User> findAll();
}
