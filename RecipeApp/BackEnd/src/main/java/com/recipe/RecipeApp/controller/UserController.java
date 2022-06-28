package com.recipe.RecipeApp.controller;

import com.recipe.RecipeApp.entity.User;
import com.recipe.RecipeApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*",  allowedHeaders = "*")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/api/users")
    public ResponseEntity<?> create(@RequestBody User user) {
        userService.create(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = "/api/users")
    public ResponseEntity<?> findAll() {
        final List<User> userList = userService.findAll();

        return userList != null && !userList.isEmpty() ? new ResponseEntity<>(userList, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/api/users/{id}")
    public ResponseEntity<Optional<User>> find(@PathVariable(name = "id") Long id) {
        final Optional<User> user = userService.find(id);

        return user.isPresent() ? new ResponseEntity<>(user, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/users/userName-{nickname}")
    public ResponseEntity<List<User>> findByName(@PathVariable(name = "nickname") String nickname){
        final List<User> userList = userService.findByName(nickname);
        return userList != null && !userList.isEmpty()
                ? new ResponseEntity<>(userList, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/api/users/{id}")
    public ResponseEntity<List<User>> update(@RequestBody User user) {
        final List<User> userList = userService.update(user);

        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/users/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") Long id) {
        final Optional<User> user = userService.find(id);
        userService.delete(id);

        return new ResponseEntity<>(HttpStatus.OK);

    }
}
