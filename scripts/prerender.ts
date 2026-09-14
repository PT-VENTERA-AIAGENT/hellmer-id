import { renderToString } from 'react-dom/server'
import { createElement, StrictMode } from 'react'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const { default: App } = await import('../src/App.tsx')

const html = renderToString(
  createElement(StrictMode, null, createElement(App, null))
)

const indexPath = resolve(__dirname, '../dist/index.html')
let template = readFileSync(indexPath, 'utf-8')
template = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
writeFileSync(indexPath, template)

console.log('✅ Prerender selesai — dist/index.html berisi HTML statis')
