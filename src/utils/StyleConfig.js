export const Type = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  SUCCESS: 'success',
  INFO: 'info',
  DANGER: 'danger',
  GHOST: 'ghost'
};

export const Shape = {
  RECTANGLE: 'rectangle',
  'SEMI-ROUND': 'semi-round',
  ROUND: 'round'
};

export const Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse'
};

export const Size = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
};


export const SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

export const DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

export default {
  type: Type,
  shape: Shape,
  size: Size,
  size_map: SIZE_MAP,
  device_size: DEVICE_SIZES,
  style: Style
};
