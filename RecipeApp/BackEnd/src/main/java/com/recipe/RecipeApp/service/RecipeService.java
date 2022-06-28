package com.recipe.RecipeApp.service;

import com.recipe.RecipeApp.entity.Recipe;
import com.recipe.RecipeApp.entity.User;
import com.recipe.RecipeApp.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public void create(Recipe recipe) {
        recipeRepository.save(recipe);
    }


    public List<Recipe> findAll() {
        return recipeRepository.findAll();
    }


    public Optional<Recipe> find(Long id) {
        return recipeRepository.findById(id);
    }

    public List<Recipe> findByUserId(Long uId){
        return recipeRepository.findByuId(uId);
    }

    public List<Recipe> update(Recipe recipe) {
        var updatedRecipe = recipeRepository.findById(recipe.getId());

        if (updatedRecipe.isPresent()) {
            var updatedRecipe_ = updatedRecipe.get();

            updatedRecipe_.setName(recipe.getName() != null ? recipe.getName() : updatedRecipe_.getName());
            updatedRecipe_.setUrl(recipe.getUrl() != null ? recipe.getUrl() : updatedRecipe_.getUrl());
            updatedRecipe_.setUrl(recipe.getUrl() != null ? recipe.getUrl() : updatedRecipe_.getUrl());
            updatedRecipe_.setDescription(recipe.getDescription() != null ? recipe.getDescription() : updatedRecipe_.getDescription());
            updatedRecipe_.setUId(recipe.getUId() != null ? recipe.getUId() : updatedRecipe_.getUId());
            recipeRepository.save(updatedRecipe_);
        }
        return recipeRepository.findAll();
    }


    public void delete(Long id) {
        recipeRepository.deleteById(id);
    }
}

