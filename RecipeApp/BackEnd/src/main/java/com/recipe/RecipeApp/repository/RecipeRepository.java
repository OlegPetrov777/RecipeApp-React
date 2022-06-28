package com.recipe.RecipeApp.repository;

import com.recipe.RecipeApp.entity.Recipe;
import com.recipe.RecipeApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    Boolean existsById(Integer id);
    List<Recipe> findByuId(Long uId);

}
