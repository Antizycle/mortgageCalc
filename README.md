# **Mortgage Calculator**

Warning! This is app is a learning exercise. It uses real loan logic, but made up currency!

## **Using:** 
Node.Js, Webpack 5 (with SASS, min-css-extract-plugin, html-webpack-plugin, devserver), SASS, React, Typescript  

### **Goal:**
Create a mortgage calculator with proper math behind calculations, different options that would affect calculations.
Practice styling complex form components, wire interdependency, complex conditional rendering, state management on multiple levels, debouncing input checking and updating state.  

### **Expected behavior:**
User can choose different types of mortgage, enter (or use range sliders) different values, check additional options to reduce loan interest value. And after some delay (to minimize rerenders) results should be calculated and shown. Additionally user can view payment schedule.  
### **Progress Log:**

#4. Results calculating and rendering is implemented. Debouncing is done on Inputs component level and only for input values. That should be sufficient in my opinion. Some styling optimization. And fixed an issue with input fields state update. Now it is impossible to enter and save a value that is out of maximum bound.  
#3. Form logic is online. All components interactions with formData state are completely streamlined (check and prepare new values on a components local level -> pass to the top component update function as object of new values -> update formData in one go). Due to the strictness of input value checking Inputs component stores local state of all input values. Final value checking and formData state updating is debounced for 1 second. This way lets user enter any new positive number before it get checked and corrected if it is out of bounds (bounds set either in the input data or calculated from the price value).   
#2. Add data lists (initial Form data, options, mods and inputs).  
Add Form components with rudimentary logic for rendering inputs and corresponding range sliders, toggles and maternity/funds balancing. And required prop drilling for upcoming Form and Results state changing.
Add form elements stylings. Add some auxiliary functions for general use.  
#1. Add development environment, basic Layout and Initial style.  

### **TODO:**
- [x] Development env., basic layout, styles
- [x] Fill up default form and lists data
- [x] Create Form Component and its children, style up
- [x] Implement form logic
- [x] Fix maternity capital balancing 
- [x] Implement results debounce and calculation logic
- [ ] Add payment schedule rendering
- [ ] Add tooltip component to streamline all tooltips visuals
- [ ] Refactor
- [ ] Refactor more
- [ ] And refactor some more!

### **Known Issues:**
1. Might be some quirks in maternity/funds balancing...