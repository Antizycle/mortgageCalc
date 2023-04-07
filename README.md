# **Mortgage Calculator**

Warning! This is app is a learning exercise. It uses real loan logic, but made up currency!

## **Using:** 
Node.Js, Webpack 5 (with SASS, min-css-extract-plugin, html-webpack-plugin, devserver), SASS, React, Typescript  

### **Goal:**
Create a mortgage calculator with proper math behind calculations, different options that would affect calculations.
Practice styling complex form components, wire interdependency, complex conditional rendering, state management on multiple levels, debouncing result calculation.  

### **Expected behavior:**
User can choose different types of mortgage, enter (or use range sliders) different values, check additional options to reduce loan interest value. And after some delay (to minimize rerenders) results should be calculated and shown. Additionally user can view payment schedule.  
### **Progress Log:**

#2. Add data lists (initial Form data, options, mods and inputs).  
Add Form components with rudimentary logic for rendering inputs and corresponding range sliders, toggles and maternity/funds balancing. And required prop drilling for upcoming Form and Results state changing.
Add form elements stylings. Add some auxiliary functions for general use.  
#1. Add development environment, basic Layout and Initial style.  

### **TODO:**
- [x] Development env., basic layout, styles
- [x] Fill up default form and lists data
- [x] Create Form Component and its children, style up
- [ ] Implement form logic
- [ ] Implement results debounce and calculation logic
- [ ] Add payment schedule rendering
- [ ] Refactor
- [ ] Refactor more
- [ ] And refactor some more!

### **Known Issues:**
1. Might be some quirks in maternity/funds balancing, would test and catch when Form state changing logic is implemented