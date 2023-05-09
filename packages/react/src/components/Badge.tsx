import {
  forwardRef,
  type ForwardedRef,
  type PropsWithChildren,
  type HTMLAttributes,
  type ElementType,
} from 'react'
import {
  getBadgeProps,
  getBadgeIconProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import type { BadgeOptions } from '@pluralsight/headless-styles/types'

interface BadgeProps extends BadgeOptions, HTMLAttributes<HTMLSpanElement> {
  icon?: ElementType
}

function BadgeEl(
  props: PropsWithChildren<BadgeProps>,
  ref: ForwardedRef<HTMLSpanElement>
) {
  const { children, icon, sentiment, size, usage, ...nativeProps } = props
  const badgeProps = getBadgeProps({ sentiment, size, usage })
  const iconProps = getBadgeIconProps(size ?? 's')
  const Icon = icon

  return (
    <span {...badgeProps} {...nativeProps} ref={ref}>
      {Icon && (
        <span {...iconProps.iconWrapper}>
          <Icon {...getIconProps(iconProps.iconOptions)} />
        </span>
      )}
      {children}
    </span>
  )
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(BadgeEl)