import PropTypes from 'prop-types';
import StyleConfig from 'utils/StyleConfig';

const validatePropTypes = propName => PropTypes.oneOf(Object.values(StyleConfig[propName]));

export default validatePropTypes;
