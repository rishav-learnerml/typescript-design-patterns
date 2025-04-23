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

// ------------------- Behavioural Design Patterns ----------------------

// Simple Facade

// import { Boiler, Brewer, CoffeeFacade, Grinder } from "./structural/facade/FacadeSimple";

// const boiler = new Boiler();
// const grinder = new Grinder();
// const brewer = new Brewer();

// const coffeeFacade = new CoffeeFacade(grinder,boiler,brewer);

// coffeeFacade.makeCoffee()

//Facade RealWorld

// import MovieFacade from "./structural/facade/FacadeRW";

// const movie = new MovieFacade()

// movie.bookMovie("Intersteller",1000,"Rishav","Ris12345")

// Bridge Design Pattern

// Simple Bridge

// import {
//   AudioPlayer,
//   MacMediaPlayer,
//   VideoPlayer,
//   WindowsMediaPlayer,
// } from "./structural/bridge/SimpleBridge";

// const windowsVideoPlayer = new VideoPlayer(new WindowsMediaPlayer());
// windowsVideoPlayer.playFile();

// const macAudioPlayer = new AudioPlayer(new MacMediaPlayer());
// macAudioPlayer.playFile();

// import {
//   ClientDbService,
//   MongoDb,
//   PostgresDb,
// } from "./structural/bridge/BridgeRW";

// const postgresDB = new PostgresDb();
// const mongoDb = new MongoDb();

// const mongoDbService = new ClientDbService(mongoDb);
// const postgresDbService = new ClientDbService(postgresDB);

// postgresDbService.fetchData(
//   "CREATE TABLE IF NOT EXISTS Users(id SERIAL PTIMARY KEY, username VARCHAR(256), password VARCHAR(256));"
// );

// mongoDbService.fetchData("users.find({})");

// import {
//   Designer,
//   Developer,
//   Manager,
// } from "./structural/composite/CompositeSimple";

// const developer = new Developer("Rishav", 50000);
// const designer = new Designer("Ramit", 40000);
// const manager = new Manager("Arun", 100000, [developer, designer]);

// manager.getEmployees();
// const developer2 = new Developer("Prity", 60000);
// manager.addEmployee(developer2);

// manager.getEmployees();

// import { FileClass, Folder } from "./structural/composite/CompositeRW";

// const file1 = new FileClass("file1.txt", 34);
// const file2 = new FileClass("file2.txt", 45);

// const folder = new Folder("Devops", [file1, file2]);

// console.log(folder.getName(), " : ", folder.getSize() ,"MB");

// folder.getFiles().forEach((file) => {
//   console.log("    - " + file.getName() + " : " + file.getSize() + " MB");
// });

// import { BurgerMeal,ClassicBurger } from "./structural/Decorator/SimpleDecorator";

// let burger = new ClassicBurger();
// console.log(`${burger.getName()} costs ${burger.getPrice()}`)
// burger = new BurgerMeal(burger);
// console.log(`${burger.getName()} costs ${burger.getPrice()}`)

// Decorator Real World

// import { AuthMiddleware, BaseServer, LogMiddleware, requesttypes, ServerRequest } from "./structural/Decorator/DecoratorRW";

// let server:ServerRequest = new BaseServer();
// server = new LogMiddleware(server);
// server = new AuthMiddleware(server)

// server.handle({
//     type: requesttypes.POST,
//     body:{
//         username:"rishav",
//         password:"ris1234"
//     }
// })

// Simple Adapter

// import {
//   Square,
//   Rectangle,
//   SquareToRectangle,
// } from "./structural/Adapter/SimpleAdapter";

// let square = new Square(5);
// let newSquare = new SquareToRectangle(square);

// console.log(
//   `Height : ${newSquare.getHeight()}, Width : ${newSquare.getWidth()}, Area : ${newSquare.area()}`
// );

// import { DBAdapter,MySql,PostgreSql } from "./structural/Adapter/AdapterRW";

// let database = new DBAdapter(new PostgreSql());
// database.connectToMySqlDB("postgresql://rishav@ris1234:5432/postgres");
// database.queryMySqlDB("SELECT * FROM USERS");

// ---- Behavioral Design Patterns -----

// Observer DP

// import {
//   Observer,
//   Subject,
//   ConcreteObserver,
//   ConcreteSubject,
// } from "./behavioral/observer/SimpleObserver";

// const subject: Subject = new ConcreteSubject();
// const observer1: Observer = new ConcreteObserver(1);
// const observer2: Observer = new ConcreteObserver(2);

// subject.addObserver(observer1);
// subject.addObserver(observer2);

// subject.setState(3);

// import { DisplayWeather, WeatherData } from "./behavioral/observer/ObserverRW";

// const weather = new WeatherData();
// const displayWData = new DisplayWeather(weather);

// weather.setMeasureMents(35, 97, 20);
// weather.setMeasureMents(40, 95, 30);

// displayWData.update(35, 97, 20)

// displayWData.display();

// import { ArrayIterator } from "./behavioral/iterator/SimpleIterator";

// const names = new ArrayIterator<string>([
//   "Rishav",
//   "Sandipan",
//   "Partha",
//   "Ramit",
//   "Raja",
// ]);

// while (names.hasNext()) {
//   console.log(names.next());
// }

// import {
//   User,
//   ConcreteUserIterator,
//   ConcreteUser,
// } from "./behavioral/iterator/IteratorRW";

// const users = new ConcreteUserIterator([
//   new ConcreteUser(
//     "Rishav",
//     "Chatterjee",
//     "rishav@gmail.com",
//     "ris1234",
//   ),
// ]);

//Strategy DP

// import { CreditCardStrategy,UPIStrategy,ShoppingCart } from "./behavioral/strategy/SimpleStrategy"

// const paymentMethod = new ShoppingCart(new UPIStrategy());
// paymentMethod.addToCart(100);
// paymentMethod.addToCart(50);

// paymentMethod.checkout();

// paymentMethod.setpaymentStrategy(new CreditCardStrategy());
// paymentMethod.addToCart(134);

// paymentMethod.checkout()

// import { GoRideStrategy,PremireRideStrategy,SharedRideStrategy,BookCab } from "./behavioral/strategy/StrategyRW";

// const cab = new BookCab(new SharedRideStrategy());
// cab.rideCab(150);
// cab.rideCab(250);

// cab.completeRide();

// cab.setRide(new GoRideStrategy());
// cab.rideCab(300);
// cab.completeRide()

// import {
//   SeniorCitizenTicket,
//   TatkalTicket,
// } from "./behavioral/template/SimpleTemplate";

// let ticket = new SeniorCitizenTicket(
//   "rishav",
//   "ris1234",
//   "Vande Varat",
//   "21/04/2025",
//   2,
//   2000
// );
// ticket.bookTicket();

// ticket = new TatkalTicket(
//   "rishav",
//   "ris1234",
//   "Duronto",
//   "22/04/2025",
//   4,
//   4000
// );
// ticket.bookTicket();

// import {
//   Light,
//   SimpleRemoteControl,
//   TurnOffCommand,
//   TurnOnCommand,
// } from "./behavioral/command/SimpleCommand";

// const remoteControl: SimpleRemoteControl = new SimpleRemoteControl();
// const light: Light = new Light();

// //Turn On

// remoteControl.setCommand(new TurnOnCommand(light));
// remoteControl.buttonWasPressed();

// //Turn Off

// remoteControl.setCommand(new TurnOffCommand(light));
// remoteControl.buttonWasPressed();

// //undo

// remoteControl.undoButtonWasPressed();

// //create a queue of comands

// remoteControl.setCommand(new TurnOffCommand(light))
// remoteControl.setCommand(new TurnOnCommand(light))

// while(remoteControl.hasCommands()){
//     remoteControl.buttonWasPressed()
// }

// import {
//   CreateFile,
//   ReadFile,
//   UpdateFile,
//   DeleteFile,
//   MyFileSystem,
// } from "./behavioral/command/CommandRW";

// const filesystem = new MyFileSystem();

// const addCommand = new CreateFile("/c:/users/rishav/file.txt");
// const updateCommand = new UpdateFile(
//   "/c:/users/rishav/file.txt",
//   "Rishav",
//   "Ramit"
// );
// const readCommand = new CreateFile("/c:/users/rishav/file.txt");
// const deleteCommand = new DeleteFile("/c:/users/rishav/file.txt");

// filesystem.addCommand(addCommand);
// filesystem.addCommand(updateCommand);
// filesystem.addCommand(readCommand);
// filesystem.addCommand(deleteCommand);

// while (filesystem.hasCommands()) {
//   filesystem.executeCommand();
// }

// State Design Pattern

