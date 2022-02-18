import {useState} from 'react';
import {RadioGroup, Transition} from "@headlessui/react";
import {CheckCircleIcon} from "@heroicons/react/outline";


/**
 * Компонент со списком элементов для выбора одного элемента<p>
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
 */

const RadioBox = ({
    items,
    onSelectChanged,
    selectedItem= null,
    valueProperty=null,
    labelProperty=null,
    className='',
}) => {
    let [selected, setSelected] = useState(selectedItem ?? items[0])

    const selectChanged = (item) => {
        setSelected(item)
        onSelectChanged(valueProperty ? item[valueProperty] : item)
    }

    const label = (item) => labelProperty ? item[labelProperty] : item

    return (
        <div className={className}>
            <RadioGroup value={selected} onChange={selectChanged}>
                <div className="space-y-2">
                    {
                        items.map((item, itemIdx) => (
                            <RadioGroup.Option
                                value={item}
                                key={item + itemIdx}
                                className={({active, checked}) =>
                                    `${
                                        active
                                            ? 'ring-2 ring-offset-2 ring-offset-amber-300 ring-white ring-opacity-60'
                                            : ''
                                    }
                          ${
                                        checked ? 'bg-amber-400 bg-opacity-75 text-white' : 'bg-amber-100'
                                    }
                            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none translation-color`
                                }>
                                {({checked}) => (
                                    <div className="flex items-center justify-between w-full">
                                        <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                                checked ? 'text-bear' : 'text-gray-900'
                                            }`}
                                        >
                                            {label(item)}
                                        </RadioGroup.Label>
                                        {checked &&
                                            <div className="flex-shrink-0 text-bear">
                                                <CheckCircleIcon className="w-6 h-6"/>
                                            </div>
                                        }
                                    </div>
                                )}
                            </RadioGroup.Option>
                        ))
                    }
                </div>
            </RadioGroup>
        </div>
    )
};

export default RadioBox;