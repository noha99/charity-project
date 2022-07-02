package com.spring.project.Controller;

//import java.util.ArrayList;

import com.spring.project.Service.UserRepository;
import com.spring.project.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
//

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class UserController {
  @Autowired
  private UserRepository userRepo;

  @GetMapping("/get")
  public ResponseEntity<List<User>> getUsers() {
    List<User> userList;
    userList = userRepo.findAll();
    if (userList.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(userList, HttpStatus.OK);
    }
  }

  @PostMapping("/add")
  public ResponseEntity<User> addUser(@RequestBody User newUser) {
    try {
      User _newUser = userRepo.save(new User( newUser.getName(), newUser.getEmail(),
        newUser.getType(), newUser.getPassword()));
      return new ResponseEntity<>(_newUser, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/signup")
  public ResponseEntity<User> signUpUser(@RequestBody User newUser) {
    try {
      newUser.setType("user");
      User _newUser = userRepo.save(new User( newUser.getName(), newUser.getEmail(), newUser.getType(), newUser.getPassword()));
      return new ResponseEntity<>(_newUser, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<User> deleteUser(@PathVariable("id") Integer id) {
    try {
      User _user = getUserById(id);
      userRepo.deleteById(id);
      return new ResponseEntity<>(_user, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
  }

  public User getUserById(Integer id) {
    Optional<User> UserData = userRepo.findById(id);
    return UserData.orElse(null);
  }

  @PutMapping("/update")
  public ResponseEntity<User> updateUser(@RequestBody User newUser) {
    try {
//      User _user = getUserById(newUser.getId());
//      _user.setEmail(newUser.getEmail());
//      _user.setName(newUser.getName());
//      _user.setType(newUser.getType());
//      _user.setPassword(newUser.getPassword());
      userRepo.save(newUser);
      return new ResponseEntity<>(newUser, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/hi")
  public String greeting() {
    return "message hello everyone";
  }
}
