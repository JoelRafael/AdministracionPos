export default class ReturnMessageHelpers {
  Message(HttpCode, IsError, Message, Data) {
    const retunr = {
      HttpCode: HttpCode,
      Error: IsError,
      Mensaje: Message,
      Data: Data,
    };
    return retunr;
  }
}
