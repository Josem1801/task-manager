import { io, Socket } from "socket.io-client";

const API_URL = "wss://echo.websocket.org";

// Create the socket instance only once for a specific socket.io namespace.
export const createSocketFactory = () => {
  let _socket: Socket;

  return async (): Promise<Socket> => {
    if (!_socket) {
      _socket = io(API_URL, {
        transports: ["websocket"],
      });
    }

    if (_socket.disconnected) {
      _socket.connect();
    }

    return _socket;
  };
};

export const socketEmitAsPromise = (socket: Socket) => {
  return <TData = object>(message: string, data: TData): Promise<TData> => {
    return new Promise((resolve, reject) => {
      socket.emit(message, data, (response: TData) => {
        // @ts-expect-error - TODO: fix this
        if (response?.error) {
          reject(response);
        } else {
          resolve(response);
        }
      });
    });
  };
};

export const getSocket = createSocketFactory();
