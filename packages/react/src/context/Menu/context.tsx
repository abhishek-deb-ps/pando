import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { useFloating, flip, offset, autoUpdate } from '@floating-ui/react-dom'
import type { MenuContextValue, TriggerKey } from './types.ts'

const MenuContext = createContext<MenuContextValue | null>(null)

// <MenuProvider />

export function MenuProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [triggerKey, setTriggerKey] = useState<TriggerKey>(null)

  const floating = useFloating({
    open: expanded,
    middleware: [offset(10), flip()],
    transform: true,
    whileElementsMounted: autoUpdate,
  })
  const menuId = useId()
  const triggerId = useId()

  const value = useMemo(
    () => ({
      expanded,
      triggerKey,
      menuId,
      triggerId,
      setExpanded,
      setTriggerKey,
      floating,
    }),
    [expanded, floating, menuId, triggerId, triggerKey]
  )

  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  )
}

// useMenu()

export function useMenu() {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }

  return context
}
