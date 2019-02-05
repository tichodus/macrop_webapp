export = pusher;
declare class pusher {
  static DependenciesReceivers: any;
  static ScriptReceivers: any;
  static auth_callbacks: any;
  static getClientFeatures(): any;
  static instances: any[];
  static isReady: boolean;
  static log(message: any): void;
  static logToConsole: boolean;
  static ready(): void;
  constructor(app_key: any, options: any);
  key: any;
  config: any;
  channels: any;
  global_emitter: any;
  sessionID: any;
  timeline: any;
  timelineSender: any;
  connection: any;
  allChannels(): any;
  bind(event_name: any, callback: any, context: any): any;
  bind_global(callback: any): any;
  channel(name: any): any;
  connect(): void;
  disconnect(): void;
  send_event(event_name: any, data: any, channel: any): any;
  shouldUseTLS(): any;
  subscribe(channel_name: any): any;
  subscribeAll(): void;
  unbind(event_name: any, callback: any, context: any): any;
  unbind_all(callback: any): any;
  unbind_global(callback: any): any;
  unsubscribe(channel_name: any): void;
}
declare namespace pusher {
  namespace Runtime {
    namespace HTTPFactory {
      function createPollingSocket(url: any): any;
      function createRequest(hooks: any, method: any, url: any): any;
      function createSocket(hooks: any, url: any): any;
      function createStreamingSocket(url: any): any;
      function createXHR(method: any, url: any): any;
    }
    namespace TimelineTransport {
      function getAgent(sender: any, useTLS: any): any;
      const name: string;
    }
    const Transports: {
      ws: {
        createConnection: Function;
        hooks: {
          getSocket: any;
          handlesActivityChecks: any;
          isInitialized: any;
          isSupported: any;
          supportsPing: any;
          urls: any;
        };
        isSupported: Function;
      };
      xhr_polling: {
        createConnection: Function;
        hooks: {
          getSocket: any;
          handlesActivityChecks: any;
          isInitialized: any;
          isSupported: any;
          supportsPing: any;
          urls: any;
        };
        isSupported: Function;
      };
      xhr_streaming: {
        createConnection: Function;
        hooks: {
          getSocket: any;
          handlesActivityChecks: any;
          isInitialized: any;
          isSupported: any;
          supportsPing: any;
          urls: any;
        };
        isSupported: Function;
      };
    };
    function addUnloadListener(listener: any): void;
    function createSocketRequest(method: any, url: any): any;
    function createWebSocket(url: any): any;
    function createXHR(): any;
    function getAuthorizers(): any;
    function getDefaultStrategy(config: any): any;
    function getLocalStorage(): any;
    function getNetwork(): any;
    function getProtocol(): any;
    function getWebSocketAPI(): any;
    function getXHRAPI(): any;
    function isXHRSupported(): any;
    function removeUnloadListener(listener: any): void;
    function setup(PusherClass: any): void;
    function transportConnectionInitializer(): void;
  }
}
