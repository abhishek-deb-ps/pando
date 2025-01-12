import {
  MenuProvider,
  MenuList,
  For,
  MenuOption,
  ActionMenuButton,
} from '@pluralsight/react'
import { useState, type MouseEvent } from 'react'

const menuOptions = [
  { id: '1', value: 'Do thing', label: 'Do thing' },
  {
    id: '2',
    value: 'Do other thing',
    label: 'Do other thing',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas culpa molestias vel, ad ratione placeat dolorum facere dolorem!',
  },
  {
    id: '3',
    value: 'Do third thing',
    label: 'Do third thing',
    description: ' A small description.',
  },
]

function MenuFeature() {
  const [selection, setSelection] = useState<string>('Do thing')

  function handleSubmit(e: MouseEvent<HTMLFormElement>) {
    e.preventDefault()
    // send that data to the server!
  }

  function handleSelect(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement
    setSelection(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ActionMenuButton name="thing" value={selection}>
        {selection}
      </ActionMenuButton>

      <MenuList value={selection}>
        <For each={menuOptions}>
          {(option) => (
            <MenuOption
              {...option}
              key={option.id}
              onClick={handleSelect}
              selected={option.value === selection}
            >
              {option.label}
            </MenuOption>
          )}
        </For>
      </MenuList>
    </form>
  )
}

export default function ActionMenuPage() {
  return (
    <div>
      <h1>ActionMenu</h1>

      <MenuProvider>
        <MenuFeature />
      </MenuProvider>
    </div>
  )
}
