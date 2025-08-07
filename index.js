import * as Application from 'expo-application';
import { Platform } from 'react-native';

// Implement the methods that sp-react-native-in-app-updates actually uses
export default {
  getVersion: () => {
    return Application.nativeApplicationVersion || '1.0.0';
  },
  
  getBuildNumber: () => {
    return Application.nativeBuildVersion || '1';
  },
  
  getBundleId: () => {
    return Application.applicationId || 'com.example.app';
  },
  
  getApplicationName: () => {
    return Application.applicationName || 'App';
  },
};

// Named exports for compatibility
export const getVersion = () => Application.nativeApplicationVersion || '1.0.0';
export const getBuildNumber = () => Application.nativeBuildVersion || '1';
export const getBundleId = () => Application.applicationId || 'com.example.app';
export const getApplicationName = () => Application.applicationName || 'App';