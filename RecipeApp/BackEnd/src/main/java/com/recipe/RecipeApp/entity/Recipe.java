package com.recipe.RecipeApp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String url;

    private String description;

    private String manual;

    private Long uId;

//    @ManyToOne(optional=false, cascade=CascadeType.MERGE)
//    @JoinColumn(name="user_id")
//    @JsonIgnore
//    private User user;
//
//    @Column(insertable = false, updatable = false)
//    private Long user_id;

//    @ManyToOne(optional=false, cascade=CascadeType.MERGE)
//    @JoinColumn(name="user_id")
//    @JsonIgnore
//    private User user;

}