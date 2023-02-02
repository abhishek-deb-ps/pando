import iconStyles from '../Icon/generated/iconCSS.module'
import styles from './generated/selectCSS.module'

const selectBase = styles.selectBase

const baseSelectStyles = {
  ...styles.selectBase,
  _active: {
    ...selectBase['&:focus'],
  },
  _hover: {
    ...selectBase["&:not(:disabled, [dataReadonly='true']):hover"],
  },
  _focus: {
    ...selectBase['&:focus'],
    borderColor: 'none',
  },
  _disabled: {
    ...selectBase['&:disabled'],
    _hover: {
      ...selectBase['&:disabled'],
    },
  },
  _invalid: {
    ...selectBase["&[dataInvalid='true']"],
  },
}

export const ChakraSelect = {
  baseStyle: {
    field: baseSelectStyles,
    icon: {
      ...styles.selectIcon,
      ...iconStyles.mIconSize,
      marginTop: '4px',
    },
    addon: {
      bg: 'none',
      border: 'none',
    },
  },
  sizes: {
    m: {
      field: {},
      icon: {},
    },
    l: {
      field: {
        ...styles.lSelectBase,
      },
    },
  },
  defaultProps: {
    size: 'l',
    variant: 'unstyled',
  },
  variants: null,
}
