 <div align="center">
 <img width="467" alt="header" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/5f9d5181-4405-4edc-8203-5db89c04ea37">

# NgRx Posts App

 </div>

This App has been developed following the [Flux pattern](https://ngrx.io/guide/store) where states are stored in an object tree within a single store. That means, all states will be handled globally in an architecture based on unidirectional data flow, with [NgRx](https://ngrx.io/) will dispatch actions to express state changes ideally for large/complex Apps(NgRx-Pots in the future 😊) where users have multiple interactions and multiple data sources.

### **Breakdown of features implemented...**

✨REST API used [{JSON}Placeholder](https://jsonplaceholder.typicode.com/).

1. Rendering posts provided by the API.
2. Implementing CRUD for Posts' resources.
3. Including Comments for each post.
4. Search bar to filter posts by title.
5. Sorting Ascending/Descending by post (title and body).

### **Components in the App...**

This App has been built with Angular 15 which one of the most important features is [Standalone components](https://angular.io/guide/standalone-components) that gives the developer the ability to create components, pipes or directives at any level independently of each module, with just being imported, we can use them either in another standalone or module-based components.

❗❗ Standalone ones: NavBarComponent, LoadingComponent, FormPostComponent, ButtonToTopComponent, PassworSecureDirective, OneValidatorPipe.

### **Angular router tasks...**

⚡**Guards:** Controlling the accessibility to the user in a route, CanActivate has been taken to do that job on posts route, the guard will rely on AuthService to corroborate that the email is stored accordingly to get through.

- Auth guard and Auth service have been placed on highest level (Core folder) for this security check.

⚡**Lazy Loading:** This is a mandatory design pattern for angular Apps that have a considered size (This is not the case but it is a nice to have 😊)decreasing load time and keeping initial bundle sizes smaller. It will be based on modules to be rendered using path as main guide to reach in an asynchronous way each module.

### **Intercepting Http requests...**

Included on Core folder our interceptor will be very handy when any HttpRequest will be made and will require to be transformed, just adding HTTP_INTERCEPTORS as a provider we will be allowed to modify each request on a global basis. In our project it's a mandatory to add Content-type on each header so it's a good technique to do that.

### **Handling errors...**

Errors in NgRx Posts App are handled by an individual effect as in our store there is just one state across the App(posts), a snack bar will show the error received through the fail actions triggered from each effect. Meeting the purpose in a clean way to meet main purpose which is let the user know that something was failing on the background when interacting with the API.

Please see the effect below:

<div align="center">
<img width="259" alt="error" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/1a1ee28f-4501-4c7b-8a3e-88f514125415">
</div>

</br>

### **Structure of the App...**

<div align="center">

| **Shared/Pages Structure**                                                                                                                       | **Main Structure**                                                                                                                                   | **Core/Store Structure**                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="189" alt="pages" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/d5730f48-0fc2-44f3-9548-4c81cfd21418"> | <img width="200" alt="structure" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/2b5935b5-a4e9-4382-84c9-9fe8d6ca907a"> | <img width="188" alt="core" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/1cb365e8-9cab-4ff1-91a5-08c1a3ca8e14"> |

</div>

</br>

### **Installing...**

Please use commands as following to install/start the App:

- `git clone https://github.com/JoseMMorales/NgRx-Posts.git`
- `cd NgRx-Posts`
- `code .` if using VSCode

### **Technology...**

<b>angular</b>: 15.0.0</br>
<b>rxjs</b>: 7.5.0</br>
<b>ngrx</b>: 15.4.0</br>
<b>angular/material</b>: 15.2.9</br>
<b>typescript</b>: 4.8.2</br>

### **Author**

💻 JoseMMorales
