import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 668;

export const getFontSize = (tabletSize, mobileSize) => Platform.select({
  ios: isTablet ? tabletSize : mobileSize,
  android: isTablet ? tabletSize : mobileSize,
});

export const getIconSize = (tabletSize, mobileSize) => Platform.select({
  ios: isTablet ? tabletSize : mobileSize,
  android: isTablet ? tabletSize : mobileSize,
});