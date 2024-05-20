/** @format */

import { CaretDown } from '@phosphor-icons/react'
import Multiselect from 'multiselect-react-dropdown'
import { IMultiselectProps } from 'multiselect-react-dropdown/dist/multiselect/interface'

export type FilterProps = {
  props?: IMultiselectProps
  texttoplaceholder?: string
}

export const Filter = (): JSX.Element => {
  return (
    <div className="relative w-28">
      <div id="filter" className="w-full border-none">
        <Multiselect
          options={['Português', 'English']}
          isObject={false}
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          placeholder="Português"
          className="multiselect-container"
          selectionLimit={1}
          hideSelectedList={false}
          hidePlaceholder={true}
        />
        <CaretDown
          size={24}
          color="#000000"
          weight="thin"
          className="absolute right-2 z-[1]"
        />
      </div>
    </div>
  )
}
