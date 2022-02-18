import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

/**
 * Компонент с выпадающим списком и полем ввода для выбора значения.<p>
 *
 * @param {array} items - массив элементов для формирования списка.<p>
 *
 * @param {Any, null} selectedItem - элемент, выбранный по умолчанию. Если значение не указано, то выбирается первый элемент<p>
 *
 * @param {function} onSelectChanged - функция, возвращающая значение, только что выбранное в списке.<p>
 *
 * @param {string, null} valueProperty - название параметра, значение которого нужно вернуть при выборе элемента.
 * Если значние не указано, то звращается весь элемент.<p>
 *
 * @param {string, null} labelProperty - название параметра, значение которого нужно использовать для отображения элемента в списке.
 * Если значение не указано,то используется весь элемент.<p>
 *
 * @param {string} className - css классы для стилизации<p>
 *
 * @param {object} components - объект с кастомными компонентами. {OptionContent, InputContent}<p>
 *
 * @param {Component} OptionContent - компонент содержимого элемента списка<p>
 *
 * @param {Component} InputContent - компонент содержимого поля ввода<p>
 */
const ComboBox = ({
  items,
  onSelectChanged,
  selectedItem= null,
  valueProperty=null,
  labelProperty=null,
  className='',
  components: {
      OptionContent= null,
      InputContent= null
  } = {}
}) => {
    const [selected, setSelected] = useState(selectedItem ?? items[0])
    const [query, setQuery] = useState('')

    const selectChanged = (item) => {
        setSelected(item)
        onSelectChanged(valueProperty ? item[valueProperty] : item)
    }

    const label = (item) => labelProperty ? item[labelProperty] : item

    const filteredItems =
        query === ''
            ? items
            : items.filter((item) =>
                label(item)
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <div className={className}>
            <Combobox value={selected} onChange={selectChanged}>
                <div className="relative mt-1">
                    <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
                        <Combobox.Input
                            className="w-full border-none focus:ring-0 focus:outline-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                            displayValue={(item) => label(item)}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        {
                            InputContent ?
                                <InputContent/>
                                :
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <SelectorIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Combobox.Button>

                        }
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {
                                filteredItems.length === 0 && query !== '' ?
                                    (
                                        <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                            Ничего не найдено.
                                        </div>
                                    ) :
                                    (
                                        filteredItems.map((item, itemIdx) => (
                                            <Combobox.Option
                                                key={item + itemIdx}
                                                className={({ active }) =>
                                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                            cursor-default select-none relative py-2 pl-10 pr-4`
                                                }
                                                value={item}
                                            >
                                                {({ selected, active }) => (
                                                    OptionContent ?
                                                        <OptionContent active={active} selected={selected} item={item}/>
                                                        :
                                                        <>
                                                            <span
                                                                className={`block truncate ${
                                                                    selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                            >
                                                              {label(item)}
                                                            </span>
                                                            {selected ? (
                                                                <span
                                                                    className={`${
                                                                        active ? 'text-bear' : 'text-bear'
                                                                    }
                                                            absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                >
                                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                )}
                                            </Combobox.Option>
                                        ))
                                    )}
                                </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default ComboBox;