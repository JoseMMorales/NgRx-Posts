 <div align="center">
 <img width="467" alt="header" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/5f9d5181-4405-4edc-8203-5db89c04ea37">

<br>

# NgRx Posts App

 </div>

This App has been developed following [Flux pattern](https://ngrx.io/guide/store) where states are stored in an object tree within a single store. That means, all states will be handled globally in an architecture based on unidirectional data flow, with [NgRx](https://ngrx.io/) will dispatch actions to express state changes ideally for large/complex Apps(NgRx-Psts in the future 😊) where users have multiple interactions and multiple data sources.

</br>

### Breakdown of features implemented on this project...

&rarr; REST API used [{JSON}Placeholder](https://jsonplaceholder.typicode.com/).

1. Rendering posts provided by the API.
2. Implement CRUD for the resources Posts.
3. Include Comments for each post.
4. Search bar to filter posts rendered by title.
5. Sorting Ascending/Descending by post (title and body).

</br>

### Components in the App...

As this App has been built with Angular 15 one of the most important new features is [Standalone components](https://angular.io/guide/standalone-components), this great goodie gives to the developer to create individual components, pipes, directives at any level independently of each module, just being imported to be used. Actually, in out lovely NgRx Posts App there are a few of them when are going to be re-used or if any pipe, directive in needed for an easier re-usable meaning.

!! Note that standalone ones are: NavBarComponent, LoadingComponent, FormPostComponent, ButtonToTopComponent, PassworSecureDirective, OneValidatorPipe.

</br>

### Angular router tasks...

&rarr; <span style="color:red"> Guards:</span> In this case posts route has been implemented with a guard to make sure the email in this case has been stored locally, trusting on Auth Service that is corroborating this string is saved accordingly to let the user get through and be able to access to posts page.

- Auth guard and Auth service have been placed on highest level (Core folder) this security check.

&rarr; <span style="color:red"> Lazy Loading:</span> This is a mandatory design pattern for angular Apps that have a considered size (This is not the case but it is a nice to have 😊)decreasing load time and keeping initial bundle sizes smaller. It will be based on modules to be rendered using path as main guide to reach in an asynchronous way each module.

</br>

### Intercepting Http requests...

In the highest level of the App(Core folder) has been included an interceptor which is very handy when need to transform each HttpRequest, just injecting the token as provider we will be allow to modify each request on a global basis. As all requests raised on this project were as mandatory to add Content-type this technique was a win to win doing it dynamically.

<br>

### Handling errors...

In NgRx App errors are handled by an individual effect as per only one existing state across the App, it will throw out a snack bar showing up error received through the fail action received on each effect for that state. It was decided to move with this approach due to individual state(posts) so it was a cleaned and smart way to meet the purpose which was let the user know that something was failing on the background when interacting with the API.

Please see the effect below:

<div align="center">
<img width="259" alt="error" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/1a1ee28f-4501-4c7b-8a3e-88f514125415">
</div>

</br>

### Structure of the App...

General overview of the App to understand levels

<div align="center">

| **Shared/Pages Structure**                                                                                                                       | **Main Structure**                                                                                                                                   | **Core/Store Structure**                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="189" alt="pages" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/d5730f48-0fc2-44f3-9548-4c81cfd21418"> | <img width="200" alt="structure" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/2b5935b5-a4e9-4382-84c9-9fe8d6ca907a"> | <img width="188" alt="core" src="https://github.com/JoseMMorales/ionic-nav-siblings-data/assets/43299285/1cb365e8-9cab-4ff1-91a5-08c1a3ca8e14"> |

</div>

</br>

### Installing...

Please use commands as following to install/start the App:

- `git clone https://github.com/JoseMMorales/NgRx-Posts.git`
- `cd NgRx-Posts`
- `code .` if using VSCode

</br>

### Technology...

<b>angular</b>: 15.0.0</br>
<b>rxjs</b>: 7.5.0</br>
<b>ngrx</b>: 15.4.0</br>
<b>angular/material</b>: 15.2.9</br>
<b>typescript</b>: 4.8.2</br>

</br>

### Author

JoseMMorales
