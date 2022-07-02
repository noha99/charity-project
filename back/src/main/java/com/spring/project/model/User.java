package com.spring.project.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user_details")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id") private Integer id;

    @Column(name = "name") private String name;
    @Column(name = "email") private String email;
    @Column(name = "type") private String type;
    @Column(name = "password") private String password;


  public User(){}

    public User( String name, String email, String type, String password) {
      this.name = name;
        this.email = email;
        this.type = type;
        this.password = password;
    }
    public Integer getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public String toString() {
        return "User [email=" + email + ", id=" + id + ", name=" + name + ", password=" + password + ", type=" + type
                + "]";
    }


}
