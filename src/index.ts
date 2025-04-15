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

import Logger from "./creational/Logger";

const log1 = Logger.getInstance();
log1.log("Logger-1 added!").then(console.log);

const log2 = Logger.getInstance();
log2.log("Logger-2 added!").then(console.log);

console.log("log1==log2 : ", log1 == log2);
