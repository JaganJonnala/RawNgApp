export {isAndroid, isIOS} from './platform';
export {isValidEmail} from './validations';

export var loaderOptions = {
  message: 'Loading...',
  progress: 0.65,
  android: {
    indeterminate: true,
    cancelable: false,
    max: 100,
    progressNumberFormat: "%1d/%2d",
    progressPercentFormat: 0.53,
    progressStyle: 1,
    secondaryProgress: 1
  }
};

export var animationObject = {
  animated: true,
  transition: {
    name: "slide",
    duration: 380,
    curve: "easeIn"
  }
};
export var clearHistoryAnimation = {
  clearHistory: true,
  animationObject
}
