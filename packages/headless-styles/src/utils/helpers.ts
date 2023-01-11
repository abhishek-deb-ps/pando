import type { FieldStates } from '../components/types'
import type {
  CSSObj,
  NestedGeneratedStyles,
  NestedStyleValue,
  Syntax,
} from './types'

function formatCSSPropName(propName: string) {
  if (propName.includes('&')) {
    return propName
  }

  return `${kebabCase(propName)}:`
}

function kebabCase(input: string) {
  const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g

  return input.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase()
  })
}

function transformValue(style: NestedStyleValue) {
  if (typeof style === 'string') {
    return `${style.trim()};`
  }

  const psuedoStyles = Object.keys(style).reduce((prev, current) => {
    return `
      ${prev.trim()}
      ${kebabCase(current)}: ${style[current]};
    `
  }, ``)

  return `{${psuedoStyles}}`
}

// Public

export function createA11yProps(options: FieldStates) {
  const { disabled, invalid, required, readOnly } = options

  return {
    ['aria-invalid']: invalid,
    ['data-disabled']: disabled,
    ['data-invalid']: invalid,
    ['data-readonly']: readOnly,
    ['data-required']: required,
    disabled,
    readOnly,
    required,
  }
}

export function createClassNameProp(...classNames: string[]) {
  return { className: classNames.join(' ') }
}

export function createJSProps(styles: NestedGeneratedStyles) {
  return {
    cssProps: transformStyles(styles),
    styles: styles as unknown as CSSObj,
  }
}

export function transformCasing(jsxProp: string, syntax: Syntax) {
  return syntax === 'html' ? kebabCase(jsxProp) : jsxProp
}

export function transformStyles(styleObject: NestedGeneratedStyles) {
  return Object.entries(styleObject)
    .reduce((prev, [currentKey, currentValue]) => {
      const propName = formatCSSPropName(currentKey)

      return `
      ${prev.trim()}
      ${propName} ${transformValue(currentValue as NestedStyleValue)}
    `
    }, '')
    .trim()
    .replace(/^ {2,12}/gm, '') as unknown as TemplateStringsArray
}

type DeepMerged<Source, Target> = Source extends Record<string, unknown>
  ? Target extends Record<string, unknown>
    ? Source & Target
    : never
  : never

export function deepMerge<Source extends object, Target extends object>(
  source: Source,
  target: Target
) {
  if (typeof source === 'object') {
    for (const [key, value] of Object.entries(target) as Array<
      [keyof Source, Source[keyof Source]]
    >) {
      // Overwrite primitive values, merge objects together
      if (key in source && typeof value === 'object') {
        deepMerge(source[key] as object, value as object)
      } else {
        source[key] = value
      }
    }
  }
  return source as DeepMerged<Source, Target>
}
