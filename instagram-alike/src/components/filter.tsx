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
      <div
        id="filter"
        className={`new_class filterToFireFox z-[9] w-full border-none filter`}>
        <Multiselect
          options={['Português', 'English', 'Español']}
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
          avoidHighlightFirstOption={false}
        />
        <CaretDown
          size={24}
          color="#000000"
          weight="thin"
          className="absolute top-1 right-2 z-[-1]"
        />
      </div>
    </div>
  )
}
