// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  baseTag: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    display: 'inline-flex',
    fontFamily:
      "'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,\n    sans-serif",
    fontSize: '0.875rem',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    gap: '0.25rem',
    height: '1.5rem',
    justifyContent: 'center',
    outline: 'none',
    paddingInline: '4px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-background-active)',
    },
    '&:active': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  strongTag: {
    backgroundColor: 'var(--ps-background-weak)',
    color: 'var(--ps-text)',
    composes: 'baseTag',
    '&:hover': {
      backgroundColor: 'var(--ps-background-weak-hover)',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-weak-active)',
    },
  },
  weakTag: {
    backgroundColor: 'var(--ps-neutral-background)',
    color: 'var(--ps-neutral-text)',
    composes: 'baseTag',
    '&:hover': {
      backgroundColor: 'var(--ps-neutral-background-hover)',
    },
    '&:active': {
      backgroundColor: 'var(--ps-neutral-background-active)',
    },
  },
  sTag: {
    composes: 'baseTag',
    fontSize: '0.75rem',
    height: '1.25rem',
  },
}