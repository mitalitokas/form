package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class FormController {

    @GetMapping("/")
    public String showForm() {
        return "form";
    }

    @PostMapping("/submit")
    public String submitForm(@RequestParam String name, @RequestParam String hasAllergies, 
                             @RequestParam(required = false) String allergyQuestions, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("hasAllergies", hasAllergies);
        model.addAttribute("allergyQuestions", allergyQuestions);
        return "result";
    }
}