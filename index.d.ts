declare module 'react-native-device-info' {
  export function getVersion(): string;
  export function getBuildNumber(): string;
  export function getBundleId(): string;
  export function getApplicationName(): string;
  
  const DeviceInfo: {
    getVersion(): string;
    getBuildNumber(): string;
    getBundleId(): string;
    getApplicationName(): string;
  };
  
  export default DeviceInfo;
}