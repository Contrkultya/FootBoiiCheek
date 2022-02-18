import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

/**
 * Компонент с выпадающим списком для выбора значения.<p>
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
 * @param {string} className - css классы для стилизации
 *
 * @param {object} components - объект с кастомными компонентами. {OptionContent}
 *
 * @param {Component} OptionContent - компонент содержимого элемента списка
 */
const Select = ({
    items,
    onSelectChanged,
    selectedItem= null,
    valueProperty=null,
    labelProperty=null,
    className='',
    components: {
        OptionContent= null,
        ButtonContent= null
    } = {}
}) => {
    const [selected, setSelected] = useState(selectedItem ?? items[0])

    const selectChanged = (item) => {
        setSelected(item)
        onSelectChanged(valueProperty ? item[valueProperty] : item)
    }

    const label = (item) => labelProperty ? item[labelProperty] : item

    return (
        <Listbox as={'div'} className={className} value={selected} onChange={selectChanged}>
            <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    {
                        ButtonContent ?
                            <ButtonContent selectedItem={selected}/>
                                :
                                <>
                                    <span className="block truncate">{label(selected)}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </>
                    }
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="w-full absolute z-10 py-1 mt-1 overflow-auto text-base bg-white
                    rounded-md shadow-lg max-h-60 ring-1 ring-black
                    ring-opacity-5 focus:outline-none sm:text-sm">
                        {items.map((item, itemIdx) => (
                            <Listbox.Option
                                key={item + itemIdx}
                                className={({ active }) =>
                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                    cursor-default select-none relative py-2 pl-10 pr-4`}
                                value={item}>
                                {({ selected, active }) => (
                                    OptionContent ?
                                       <OptionContent selected={selected} active={active} item={item}/>  :
                                    <>
                                      <span
                                          className={`${
                                              selected ? 'font-medium' : 'font-normal'
                                          } block truncate`}
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
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

export default Select;