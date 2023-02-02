// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  keyframesFadeIn: {
    '@keyframes fadeIn': {
      from: {
        opacity: '0',
        transform: 'scale(0.9)',
      },
      to: {
        opacity: '1',
        transform: 'scale(1)',
      },
    },
  },
  menu: {
    animationDelay: '100ms',
    animationDuration: '150ms',
    animationFillMode: 'forwards',
    animationName: 'fadeIn',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: 'var(--ps-surface-strong)',
    borderColor: 'var(--ps-border)',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    display: 'none',
    listStyle: 'none',
    margin: '0',
    opacity: '0',
    padding: '4px',
    position: 'absolute',
    width: '14rem',
    zIndex: '1000',
    "&[dataExpanded='true']": {
      display: 'block',
    },
  },
  menuWrapper: {
    display: 'inline-block',
    position: 'relative',
  },
  menuDivider: {
    backgroundColor: 'var(--ps-border)',
    height: '1px',
    marginBottom: '0.5rem',
    marginInlineEnd: '0.5rem',
    marginInlineStart: '0.5rem',
    marginTop: '0.5rem',
  },
  menuListItem: {
    margin: '0',
    padding: '0',
    position: 'relative',
  },
  menuListItem____menuListItem: {
    margin: '2px 0 0',
    padding: '0',
  },
  menuItem: {
    alignItems: 'center',
    display: 'flex',
    gap: '0.625rem',
    justifyContent: 'flex-start',
    appearance: 'none',
    background: 'transparent',
    border: '0',
    borderRadius: '3px',
    color: 'var(--ps-text)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    lineHeight: '1.5',
    overflow: 'hidden',
    paddingBlock: '0.5rem',
    paddingInline: '0.5rem',
    textAlign: 'start',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    whiteSpace: 'nowrap',
    width: '100%',
    '&:anyLink': {
      appearance: 'none',
      background: 'transparent',
      border: '0',
      borderRadius: '3px',
      color: 'var(--ps-text)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontVariationSettings: "'wght' 500",
      fontWeight: '500',
      lineHeight: '1.5',
      overflow: 'hidden',
      paddingBlock: '0.5rem',
      paddingInline: '0.5rem',
      textAlign: 'start',
      textDecoration: 'none',
      textOverflow: 'ellipsis',
      transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    "&:is(.menu, [role='menu'])": {
      left: '100%',
      marginLeft: '0.625rem',
      marginTop: '0',
      position: 'absolute',
      top: '0',
      zIndex: '1010',
    },
    "&[ariaExpanded='true'] ~ .menu": {
      display: 'block',
    },
    "&[ariaExpanded='true']": {
      background: 'var(--ps-action-background)',
      color: 'var(--ps-action-text)',
    },
    '&:active': {
      background: 'var(--ps-action-background)',
      color: 'var(--ps-action-text)',
    },
    "&:hover:not([ariaExpanded='true'])": {
      background: 'var(--ps-background-hover)',
      color: 'var(--ps-text)',
    },
    "&:focus:not([ariaExpanded='true'])": {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focusVisible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  menuItemText: {
    flexGrow: '1',
  },
  menuItem___all_children: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  menuItem___svg: {
    flex: '0 0 auto',
  },
}
