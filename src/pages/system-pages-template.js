import * as React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import icon from '../img/Icon.png'
import {Link} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export class SystemPagesTemplate extends React.Component {

    constructor(props) {
        super(props);
        setTimeout(()=>{this.updateCurrent();})
    }

    state = {
        navigation: [
            {name: 'Dashboard', href: 'dashboard'},
            {name: 'Teams', href: 'teams'},
            {name: 'Games', href: 'games'},
            {name: 'Tournaments', href: 'tournaments'},
            {name: 'HZ', href: 'HZ'},
        ],
        current: null,
    }

    isCurrent(href) {
        return href === this.state.current;
    }

    getCurrent = () => {
        return this.state.navigation.find(i=>this.isCurrent(i.href))
    }

    updateCurrent = () => {
        if (window.location.pathname === '/')
            this.props.history.push('dashboard');
        setTimeout(()=> {
            this.state.navigation.forEach((nav) => {
                if (window.location.pathname.slice(1).startsWith(nav.href)) {
                    this.setState({current: nav.href})
                }
            })
        })
    }

    render() {
        return (
            <>
                {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
                <div className="min-h-full">
                    <Disclosure as="nav" className="bg-mustard">
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex items-center justify-between h-16">
                                        <div className="flex items-center">
                                            <Link to={'dashboard'} onClick={this.updateCurrent} className="flex-shrink-0 icon-block" >
                                            </Link>
                                            <div className="hidden md:block">
                                                <div className="ml-10 flex items-baseline space-x-4">
                                                    {this.state.navigation.map((item) => (
                                                        <Link
                                                            onClick={this.updateCurrent}
                                                            key={item.name}
                                                            to={item.href}
                                                            className={classNames(
                                                                this.isCurrent(item.href)
                                                                    ? 'bg-blue-900/10 text-white'
                                                                    : 'text-white hover:bg-blue-700/20 hover:text-white',
                                                                'px-3 py-2 rounded-md text-sm font-medium'
                                                            )}
                                                            aria-current={this.isCurrent(item.href) ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="md:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                        {this.state.navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block px-3 py-2 rounded-md text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-gray-900">{this.getCurrent()?.name}</h1>
                        </div>
                    </header>
                    <main className='h-full'>
                        <div className="h-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </>
        )
    }
}
