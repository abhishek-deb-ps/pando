// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  bar: {
    backgroundColor: 'var(--ps-text-strong)',
    height: '100%',
    width: '0',
  },
  linear: {
    borderRadius: '20px',
  },
  sSize: {
    composes: 'bar',
  },
  xsSize: {
    composes: 'bar',
    height: '0.25rem',
  },
  wrapper: {
    backgroundColor: 'var(--ps-border)',
    height: '0.5rem',
    overflowY: 'hidden',
    position: 'relative',
    width: '100%',
  },
  inset: {
    borderRadius: 'initial',
  },
}