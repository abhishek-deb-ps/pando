#!/usr/bin/env node

'use strict'

import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { exec } from 'child-process-promise'
import prompt from 'prompt-promise'
import createLogger from 'progress-estimator'
import { error, warning as themeWarning } from './theme.mjs'

export function __dirname(metaURL) {
  return dirname(fileURLToPath(metaURL))
}

export async function checkTag(condition, error, elseLog) {
  if (condition) {
    error
  } else {
    elseLog
  }
}

export async function confirm(message) {
  const confirmation = await prompt(themeWarning`\n{caution ${message}} (y/N) `)

  prompt.done()

  if (confirmation !== 'y' && confirmation !== 'Y') {
    console.log(error`\n==== Release cancelled ====`)
    process.exit(0)
  }
}

export async function execRead(command, options) {
  try {
    const { stdout } = await exec(command, options)
    return stdout.trim()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export function getArtifactPackagePath(packageName, channel) {
  return resolve(
    __dirname(import.meta.url),
    `../${channel}_packages/packages/${packageName}/npm`
  )
}

export function getLocalPackagePath(packageName) {
  return resolve(__dirname(import.meta.url), `../packages/${packageName}`)
}

export function getRootPath() {
  return resolve(__dirname(import.meta.url), '../')
}

export async function getReleaseDate() {
  let dateString = await execRead(
    `git show -s --no-show-signature --format=%cd --date=format:%Y%m%d`
  )

  // On CI environment, this string is wrapped with quotes '...'s
  if (dateString.startsWith("'")) {
    dateString = dateString.substr(1, 8)
  }

  return dateString
}

export function isPreReleaseChannel(channel) {
  return channel === 'experimental' || channel === 'next'
}

export function isStableRelease(channel) {
  const stableReleaseChannels = ['latest', 'stable']
  return stableReleaseChannels.includes(channel)
}

// https://www.npmjs.com/package/progress-estimator#configuration
const logger = createLogger({
  storagePath: join(__dirname(import.meta.url), '.progress-estimator'),
})

export async function logPromise(promise, text, estimate) {
  logger(promise, text, { estimate })
}

// Convert an array param (expected format "--foo bar baz")
// to also accept comma input (e.g. "--foo bar,baz")
export const splitCommaParams = (array) => {
  if (array == null) {
    return
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const param = array[i]
    if (param.includes(',')) {
      array.splice(i, 1, ...param.split(','))
    }
  }
}

export function warning(trueCondition, warningMessage) {
  if (!trueCondition) {
    console.error(warningMessage)
    process.exit(1)
  }
}
