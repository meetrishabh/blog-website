import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.css']
})
export class InterviewQuestionsComponent  implements OnInit{
  item: any;
  constructor(public serv:BlogService){}
  ngOnInit(): void {
    this.item=this.serv.data
  }
interviewQues:any=[{
  "question": "What is Angular?",
  "answer": "Angular is an open-source, front-end web application framework developed by Google."
}, {
  "question": "What is a component in Angular?",
  "answer": "A component is a building block of an Angular application that represents a part of the user interface."
}, {
  "question": "What is a directive in Angular?",
  "answer": "A directive is a marker on a DOM element that tells Angular to attach a specific behavior to that element."
}, {
  "question": "What is dependency injection in Angular?",
  "answer": "Dependency injection is a design pattern in which components are provided with their dependencies instead of creating them within the component."
}, {
  "question": "What is the difference between one-way and two-way data binding in Angular?",
  "answer": "One-way data binding binds data from the component to the view, while two-way data binding binds data in both directions, from the component to the view and vice versa."
},
{
  "question": "What is a service in Angular?",
  "answer": "A service is a class in Angular that provides functionality to multiple components in an application."
}, {
  "question": "What is a module in Angular?",
  "answer": "A module is a container for related components, directives, services, and pipes in an Angular application."
}, {
  "question": "What is a pipe in Angular?",
  "answer": "A pipe is a way to transform data in an Angular template before it is displayed."
}, {
  "question": "What is NgZone in Angular?",
  "answer": "NgZone is a service in Angular that provides a way to execute code outside of the Angular zone, which can improve performance and reduce the risk of errors."
}, {
  "question": "What is the Angular CLI?",
  "answer": "The Angular CLI is a command-line interface for Angular that provides a set of tools and utilities to help with development, such as creating new projects, generating code, and running tests."
},
{
  "question": "What is an observable in Angular?",
  "answer": "An observable is a data source that emits values over time and allows you to subscribe to those values in your application."
}, {
  "question": "What is the difference between a service and a component in Angular?",
  "answer": "A component is responsible for the user interface, while a service provides functionality to multiple components and can be used to share data between them."
}, {
  "question": "What is Angular Universal?",
  "answer": "Angular Universal is a server-side rendering solution for Angular applications that allows the initial rendering to happen on the server instead of the client, which can improve performance and SEO."
}, {
  "question": "What is lazy loading in Angular?",
  "answer": "Lazy loading is a technique in Angular where you can load modules or components only when they are needed, which can improve performance by reducing the initial load time of an application."
}, {
  "question": "What is TestBed in Angular?",
  "answer": "TestBed is a utility in Angular that provides a way to configure and create an instance of a component or service for testing."
},
{
  "question": "What is a resolver in Angular?",
  "answer": "A resolver is a service in Angular that allows you to fetch data before a route is activated and render the component only after the data is available."
},
{
  "question": "What is the difference between ngOnInit and ngAfterViewInit in Angular?",
  "answer": "ngOnInit is called once when the component is initialized, while ngAfterViewInit is called after the view has been initialized, meaning that any child components or directives have been initialized as well."
},
{
  "question": "What is change detection in Angular?",
  "answer": "Change detection is the process in Angular where the framework checks for changes in the data and updates the view accordingly."
},
{
  "question": "What is the difference between ViewEncapsulation and Shadow DOM in Angular?",
  "answer": "ViewEncapsulation is a feature in Angular that allows you to control how styles are applied to a component, while Shadow DOM is a web standard that provides a way to encapsulate the style and behavior of a component in a separate DOM tree."
},
{
  "question": "What is the difference between a template-driven form and a reactive form in Angular?",
  "answer": "A template-driven form is built using directives in the HTML template, while a reactive form is built using form control objects in the component class."
}, {
  "question": "What is the difference between a provider and a service in Angular?",
  "answer": "A provider is a way to register a service with the Angular injector, while a service is a class that provides functionality to multiple components in an application."
}, {
  "question": "What is an NgTemplateOutlet in Angular?",
  "answer": "An NgTemplateOutlet is a directive in Angular that allows you to render a template dynamically at runtime."
}, {
  "question": "What is a ViewChild decorator in Angular?",
  "answer": "ViewChild is a decorator in Angular that allows you to access a child component, directive or DOM element from the parent component."
}, {
  "question": "What is NgFor in Angular?",
  "answer": "NgFor is a directive in Angular that allows you to iterate over a collection and render a template for each item in the collection."
},
{
  "question": "What is the difference between @ViewChild and @ContentChild in Angular?",
  "answer": "@ViewChild is used to access a child component or directive from the parent component, while @ContentChild is used to access a child component or directive that is projected into the parent component using content projection."
},
{
  "question": "What is the difference between ngOnChanges and ngDoCheck in Angular?",
  "answer": "ngOnChanges is called when a data-bound input property changes, while ngDoCheck is called whenever Angular checks for changes in the component's view."
}, {
  "question": "What is the difference between ngIf and ngSwitch in Angular?",
  "answer": "ngIf is a directive in Angular that allows you to conditionally render a template based on a boolean expression, while ngSwitch allows you to conditionally render a template based on a value."
}, {
  "question": "What is an Injector in Angular?",
  "answer": "An Injector is a service in Angular that allows you to create instances of a class and resolve its dependencies."
}, {
  "question": "What is a directive in Angular?",
  "answer": "A directive in Angular is a class that adds behavior to an existing element or component in the application."
}, {
  "question": "What is an NgModule in Angular?",
  "answer": "An NgModule in Angular is a way to organize and configure a collection of components, directives, pipes, and services into a functional unit."
}
]
}
