package com.recipe.RecipeApp.controller;

import com.recipe.RecipeApp.entity.Recipe;
import com.recipe.RecipeApp.entity.User;
import com.recipe.RecipeApp.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*",  allowedHeaders = "*")
public class RecipeController {
    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping(value = "/api/recipes")
    public ResponseEntity<?> create(@RequestBody Recipe recipe) {
        recipeService.create(recipe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = "/api/recipes")
    public ResponseEntity<?> findAll() {
        final List<Recipe> recipeList = recipeService.findAll();

        return recipeList != null && !recipeList.isEmpty() ? new ResponseEntity<>(recipeList, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/api/recipes/{id}")
    public ResponseEntity<Optional<Recipe>> find(@PathVariable(name = "id") Long id) {
        final Optional<Recipe> recipe = recipeService.find(id);

        return recipe.isPresent() ? new ResponseEntity<>(recipe, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/recipes/userId-{uId}")
    public ResponseEntity<List<Recipe>> findByUserId(@PathVariable(name = "uId") Long uId){
        final List<Recipe> recipesList = recipeService.findByUserId(uId);
        return recipesList != null && !recipesList.isEmpty()
                ? new ResponseEntity<>(recipesList, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/api/recipes/{id}")
    public ResponseEntity<List<Recipe>> update(@RequestBody Recipe recipe) {
        final List<Recipe> recipeList = recipeService.update(recipe);

        return new ResponseEntity<>(recipeList, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/recipes/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") Long id) {
        final Optional<Recipe> recipe = recipeService.find(id);
        recipeService.delete(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
