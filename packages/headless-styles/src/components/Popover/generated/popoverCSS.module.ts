// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  popoverWrapper: {
    composes: "tooltipWrapper from '../Tooltip/tooltipCSS.module.css'",
  },
  popover: {
    composes: "tooltipBase from '../Tooltip/tooltipCSS.module.css'",
    animationDelay: '100ms',
    maxWidth: 'none',
    minWidth: '17.5em',
    textAlign: 'start',
    zIndex: '1500',
    '&::after': {
      backgroundColor: 'var(--ps-surface-weak)',
      borderColor: 'var(--ps-border)',
      borderStyle: 'solid',
      borderWidth: '0 0 1px 1px',
      fontSize: '0.75rem',
    },
  },
  popoverContent: {
    backgroundColor: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border)',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    color: 'var(--ps-text)',
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontVariationSettings: "'wght' 400",
    fontWeight: '400',
    lineHeight: '1.25',
    padding: '1rem 2.5rem 1rem 1rem',
    position: 'relative',
  },
  popoverContentWithHeading: {
    composes: 'popoverContent',
    paddingTop: '0',
  },
  popoverHeader: {
    alignItems: 'center',
    display: 'flex',
    fontVariationSettings: "'wght' 700",
    fontWeight: '700',
    minHeight: '2.5rem',
    whiteSpace: 'nowrap',
  },
  popoverCloseButtonWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '2.5rem',
    position: 'absolute',
    right: '0',
    top: '0',
  },
  popoverTrigger: {
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  popover_data_expanded__true: {
    display: 'inline-block',
  },
  popoverTrigger_aria_expanded__true______data_popover: {
    display: 'inline-block',
  },
}
