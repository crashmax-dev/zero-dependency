import { el } from '@zero-dependency/dom'
import { debounce } from '@zero-dependency/utils'

const debouncedFn = debounce(() => {
  console.log('debounced')
}, 1000)

const button = el('button', {
  onclick: () => debouncedFn()
}, 'Click')

document.body.appendChild(button)
