import React from 'react'
import {
  getAdmonitionProps,
  getAvatarProps,
  getButtonProps,
  getCircularProgressProps,
  getFormControlProps,
  getFormLabelProps,
  getGridProps,
  getGridItemProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  getMenuProps,
  getMenuItemProps,
  getPaginationProps,
  getPopoverProps,
  getRadioProps,
  getSelectProps,
  getSelectOptionProps,
  getSkeletonProps,
  getTagProps,
} from '@pluralsight/headless-styles'
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  DangerDiamondIcon,
  EyeIcon,
  EyeOffIcon,
  InfoCircleIcon,
  PersonIcon,
  PlaceholderIcon,
  SearchIcon,
  StarIcon,
  StarFilledIcon,
  WarningTriangleFilledIcon,
} from '@pluralsight/icons'
import {
  useAutoFormatDate,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
} from '@pluralsight/react-utils'

const ReactLiveScope = {
  React,
  ...React,
  getAdmonitionProps,
  getAvatarProps,
  getButtonProps,
  getCircularProgressProps,
  getFormControlProps,
  getFormLabelProps,
  getGridProps,
  getGridItemProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  getMenuProps,
  getMenuItemProps,
  getPaginationProps,
  getPopoverProps,
  getRadioProps,
  getSelectProps,
  getSelectOptionProps,
  getSkeletonProps,
  getTagProps,
  // icons
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  DangerDiamondIcon,
  EyeIcon,
  EyeOffIcon,
  InfoCircleIcon,
  PersonIcon,
  PlaceholderIcon,
  SearchIcon,
  StarIcon,
  StarFilledIcon,
  WarningTriangleFilledIcon,
  // react-utils
  useAutoFormatDate,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
}

export default ReactLiveScope
