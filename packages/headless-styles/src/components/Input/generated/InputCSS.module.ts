// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  inputBase: {
    appearance: 'none',
    background: 'inherit',
    borderColor: 'hsl(237deg 30% 36% / 100%)',
    borderImage: 'initial',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'hsl(0deg 0% 100% / 100%)',
    fontFamily:
      "'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,\n    sans-serif",
    fontSize: '1rem',
    fontVariationSettings: "'wght' 400",
    fontWeight: '400',
    height: '2.5rem',
    marginTop: '8px',
    minWidth: '0',
    outline: 'transparent solid 2px',
    outlineOffset: '2px',
    position: 'relative',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
    transitionDuration: '150ms',
    transitionProperty: 'border-color, color, opacity, box-shadow, transform',
    width: '100%',
    '&:active': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      borderColor: 'hsl(234deg 30% 49% / 100%)',
      borderWidth: '2px',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid hsl(249deg 63% 34% / 100%)',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  mInputSize: {
    composes: 'inputBase',
    height: '2rem',
    fontSize: '0.875rem',
    paddingInlineStart: '0.75rem',
    paddingInlineEnd: '0.75rem',
  },
  lInputSize: {
    composes: 'inputBase',
  },
  '': {
    '&::placeholder': {
      color: 'hsl(237deg 30% 36% / 100%)',
      opacity: '1',
    },
  },
  inputBase_data_disabled__true: {
    opacity: '0.7',
    cursor: 'not-allowed',
    '&:hover': {
      borderColor: 'hsl(237deg 30% 36% / 100%)',
      borderWidth: '1px',
    },
  },
  inputBase_data_invalid__true: {
    borderColor: 'hsl(336deg 100% 54% / 100%)',
    borderWidth: '2px',
  },
  inputBase_data_readonly__true: {
    cursor: 'not-allowed',
    '&:hover': {
      borderColor: 'hsl(237deg 30% 36% / 100%)',
      borderWidth: '1px',
    },
  },
}
