enum requesttypes {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

type RequestType = {
  type: requesttypes;
  body: {
    username: string;
    password: string;
  };
};

interface ServerRequest {
  handle(request: RequestType): void;
}

class BaseServer implements ServerRequest {
  handle(request: RequestType): void {
    console.log(`Handling the ${request.type} request`);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handle(request: RequestType): void;
}

class AuthMiddleware extends ServerRequestDecorator {
  handle(request: RequestType): void {
    if (
      request.body.username === "rishav" &&
      request.body.password === "ris1234"
    ) {
      console.log("User Authenticated");
      this.serverRequest.handle(request);
    } else {
      console.log("User is not Authenticated");
    }
  }
}

class LogMiddleware extends ServerRequestDecorator {
  handle(request: RequestType): void {
    console.log(
      `${request.body.username} : ${
        request.type
      } @ ${new Date().toLocaleString()}`
    );
    this.serverRequest.handle(request);
  }
}

export {
  BaseServer,
  LogMiddleware,
  AuthMiddleware,
  ServerRequest,
  requesttypes,
};
