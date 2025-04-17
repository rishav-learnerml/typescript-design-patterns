// Creational Design Patterns

// singleton dp

// Basic

// import Singleton from "./creational/SingletonBasic";

// let instance1 = Singleton.getInstance();
// let instance2 = Singleton.getInstance();

// console.log("i1", instance1.getValue, "  ", "i2", instance2.getValue);

// instance1.setValue = 11;

// console.log("i1", instance1.getValue, "  ", "i2", instance2.getValue);

// console.log("instance1==instance2 : ", instance1 == instance2);

// Real world

// import Logger from "./creational/singleton/Logger";

// const log1 = Logger.getInstance();
// log1.log("Logger-1 added!").then(console.log);

// const log2 = Logger.getInstance();
// log2.log("Logger-2 added!").then(console.log);

// console.log("log1==log2 : ", log1 == log2);

// Prototype Design Pattern

// import ConcretePrototype from "./creational/prototype/PrototypeBasic";

// const obj1 = new ConcretePrototype({
//   username: "Rishav",
//   password: "ris1234",
//   email: "ris@google.com",
// });

// const obj2 = obj1.clone();

// if (obj1.getUserDetails() === obj2.getUserDetails()) {
//   console.log("Both instances are same");
// } else {
//   console.log("Both instances are different");
// }

// Real World exm

// import {
//   Creator,
//   Gender,
//   LinkedinUser,
//   Recruiter,
// } from "./creational/prototype/PrototypeRW";

// const rishavUser: Creator = new Creator(
//   {
//     username: "Rishav",
//     email: "crishav01@gmail.com",
//     password: "ris12345",
//     gender: Gender.Male,
//   },
//   20000
// );

// const priyaUser: Recruiter = new Recruiter(
//   {
//     username: "Priya",
//     email: "priya@gmail.com",
//     password: "priya12345",
//     gender: Gender.Female,
//   },
//   false
// );

// const ramitUser = rishavUser.clone();
// const bhuvanUser = priyaUser.clone();

// ramitUser.userDetails.username = "Ramit";
// ramitUser.userDetails.email = "Ramit@gmail.com";
// ramitUser.userDetails.password = "Ramit12345";
// ramitUser.followerCount = 50000;

// bhuvanUser.userDetails.username = "Bhuvan";
// bhuvanUser.userDetails.gender = Gender.Female;
// bhuvanUser.hiringStatus = true;

// rishavUser.getUserDetails();
// ramitUser.getUserDetails();
// bhuvanUser.getUserDetails();
// priyaUser.getUserDetails();

//Builder Design Pattern

// import { ConcreteBuilder, Director } from "./creational/builder/SimpleBuilder";

// const director = new Director();
// const product = new ConcreteBuilder();

// director.setBuilder(product);

// console.log("Building MVP1...");
// director.buildMVP1();
// product.getProduct().listParts();

// console.log("Building MVP2...");
// director.buildMVP2();
// product.getProduct().listParts();

// console.log("Building MVP3...");
// director.buildMVP3();
// product.getProduct().listParts();

//Builder Realworld

// import { CustomerBuilder, CustomerDirector, ICustomer, ICustomerBuilder } from "./creational/builder/BuilderRW";

// const customerBuilder:ICustomerBuilder=new CustomerBuilder();
// const director:CustomerDirector=new CustomerDirector(customerBuilder);

// const customer:ICustomer = director.buildMinimal("John","Doe","john@doe.com")

// console.log(customer)

// Factory Simple

// import MovieFactory from "./creational/Factory/SimpleFactory";

// const movieFactory = new MovieFactory();
// const horrorMovie = movieFactory.CreateMovie(
//   "horror",
//   "Conjuring3",
//   4.5,
//   new Date()
// );

// const comedyMovie = movieFactory.CreateMovie("comedy", "Hera Pheri", 5, new Date());
// const thrillerMovie = movieFactory.CreateMovie("thriller", "Drishyam", 4.7, new Date());

// horrorMovie.disPlayMovieInfo();
// comedyMovie.disPlayMovieInfo();
// thrillerMovie.disPlayMovieInfo();

// Real World Factory

// import ProcessPaymentFactory from "./creational/Factory/FactoryRW";

// const paymentGateway = new ProcessPaymentFactory();
// const creditCard = paymentGateway.getPaymentGateway("credit", 1000);
// const debitCard = paymentGateway.getPaymentGateway("debit", 1000);
// const upi = paymentGateway.getPaymentGateway("upi", 1000);

// creditCard.processPayment(500);
// debitCard.processPayment(700);
// upi.processPayment(1100);

// import AbstractFactory from "./creational/AbstractFactory/SimpleAbstractFactory";

// const factory = new AbstractFactory();
// const productA = factory.createProductA();
// const productB = factory.createProductB();

// productB.combinedOperation(productA);
// productB.operationB();
// productA.operationA();

//Abstract Factory Real World
// import {
//   GUIFactory,
//   MacFactory,
//   WindowsFactory,
// } from "./creational/AbstractFactory/AbstractFactoryRW";

// const windowsUIFactory = new WindowsFactory();
// const macUIFactory = new MacFactory();

// function renderUI(factory: GUIFactory) {
//   const btn = factory.createButton();
//   const checkbox = factory.createCheckbox(btn);

//   btn.render();
//   checkbox.render();
//   btn.onClick(() => {
//     console.log("Hi");
//   });
//   checkbox.toggle();
// }

// renderUI(windowsUIFactory);
// renderUI(macUIFactory);