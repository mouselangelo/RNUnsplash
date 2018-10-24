import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const navBarHeightInPortrait = 44;

export const headerHeight = () => {
    const statusBarHeight = getStatusBarHeight(true);
    return navBarHeightInPortrait + statusBarHeight
}