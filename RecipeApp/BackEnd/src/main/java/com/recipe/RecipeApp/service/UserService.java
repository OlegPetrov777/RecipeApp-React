package com.recipe.RecipeApp.service;

import com.recipe.RecipeApp.entity.User;
import com.recipe.RecipeApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void create(User user) {
        userRepository.save(user);
    }


    public List<User> findAll() {
        return userRepository.findAll();
    }


    public Optional<User> find(Long id) {
        return userRepository.findById(id);
    }


    public List<User> findByName(String nickname){
        return userRepository.findByNickname(nickname);
    }

    public List<User> update(User user) {
        var updatedUser = userRepository.findById(user.getId());

        if (updatedUser.isPresent()) {
            var updatedUser_ = updatedUser.get();

            updatedUser_.setNickname(user.getNickname() != null ? user.getNickname() : updatedUser_.getNickname());
            updatedUser_.setEmail(user.getEmail() != null ? user.getEmail() : updatedUser_.getEmail());
            updatedUser_.setPassword(user.getPassword() != null ? user.getPassword() : updatedUser_.getPassword());

            userRepository.save(updatedUser_);
        }
        return userRepository.findAll();
    }


    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}

