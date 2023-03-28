// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import dialog from '../../shared/generated/dialog.module'
import keyframes from '../../shared/generated/keyframes.module'

export default {
  baseConfirmDialogSection: {
    ...dialog.pandoDialogSection,
  },
  baseConfirmAnimation: {
    ...keyframes.pandoFadeIn,
  },
  confirmDialogBackdrop: {
    ...dialog.pandoDialogBackdrop,
  },
  confirmDialogBtnGroup: {
    ...dialog.pandoDialogBtnGroup,
  },
  confirmDialogCancelBtn: {
    ...dialog.pandoDialogCancelBtn,
  },
  confirmFocusGuard: {
    ...dialog.pandoFocusGuard,
  },
  confirmDialogSection: {
    ...keyframes.pandoFadeIn,
    ...dialog.pandoDialogSection,
  },
  confirmDialogWrapper: {
    ...dialog.pandoDialogWrapper,
  },
  confirmDialogHeader: {
    ...dialog.pandoDialogHeader,
    marginTop: '2.5rem',
  },
  confirmDialogTitleIcon: {
    ...dialog.pandoDialogTitleIcon,
  },
} satisfies GeneratedStyles
