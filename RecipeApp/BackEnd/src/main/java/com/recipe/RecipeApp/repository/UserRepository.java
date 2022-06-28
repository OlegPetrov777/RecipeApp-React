package com.recipe.RecipeApp.repository;

import com.recipe.RecipeApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNickname(String nickname);

    Boolean existsById(Integer id);
}
