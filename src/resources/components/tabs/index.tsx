import React, { createContext, useContext, useState } from 'react'
import { cssTransition } from 'react-toastify'
import { CSSTransition } from 'react-transition-group'
import useClass from 'hooks/use-class'
import { ClassName } from 'interface/component'

import './styles.scss'

interface TabsProps {
	active: string
	className?: ClassName
}
interface TabsListProps {
	className?: ClassName
}
interface TabsItemProps {
	id: string
	title: string
	className?: ClassName
}
interface TabsBodyProps {
	className?: ClassName
}
interface TabsContentProps {
	className?: ClassName
	id: string
}

const TabsStateContext = createContext<any>(null)
const TabsDispatchContext = createContext<any>(null)

const Tabs: React.FC<TabsProps> = React.memo(({ active, className, children }) => {
	const [actionTab, setActionTab] = useState<string>(active || '1')
	const styles = useClass({
		defaultClass: 'tabs',
		otherClass: className
	})
	return (
		<TabsStateContext.Provider value={actionTab}>
			<TabsDispatchContext.Provider value={setActionTab}>
				<div className={styles}>{children}</div>
			</TabsDispatchContext.Provider>
		</TabsStateContext.Provider>
	)
})

const TabsList: React.FC<TabsListProps> = ({ className, children }) => {
	const styles = useClass({
		defaultClass: 'tabs-list',
		otherClass: className
	})
	return <ul className={styles}>{children}</ul>
}

const TabsItem: React.FC<TabsItemProps> = ({ className, id, title }) => {
	const { activeTab, setActiveTab } = useTabs()
	const styles = useClass({
		defaultClass: 'tabs-link',
		optionalClass: {
			active: activeTab === id
		},
		otherClass: className
	})

	const handleChangeTab = () => {
		setActiveTab(id)
	}
	return (
		<li className="tabs-item" onClick={handleChangeTab}>
			<span className={styles}>{title}</span>
		</li>
	)
}

const TabsBody: React.FC<TabsBodyProps> = ({ className, children }) => {
	const styles = useClass({
		defaultClass: 'tabs-body',
		otherClass: className
	})
	return <div className={styles}>{children}</div>
}
const TabsContent: React.FC<TabsContentProps> = ({ id, className, children }) => {
	const { activeTab } = useTabs()
	const styles = useClass({
		defaultClass: 'tabs-content',
		otherClass: className
	})

	return (
		<CSSTransition
			in={activeTab === id}
			timeout={200}
			appear
			classNames={{
				enter: 'init',
				enterActive: 'active',
				enterDone: 'active',
				exit: 'active',
				exitActive: 'hidden',
				exitDone: 'hidden'
			}}
		>
			<div className={styles}>{children}</div>
		</CSSTransition>
	)
}

const useTabs = () => {
	const activeTab = useContext(TabsStateContext)
	const setActiveTab = useContext(TabsDispatchContext)
	if (activeTab === null) throw new Error('Error Happend  in Tabs hook')
	if (!!setActiveTab === null) throw new Error('Error Happend  in Tabs hook')

	return { activeTab, setActiveTab }
}
export { Tabs, TabsList, TabsItem, TabsBody, TabsContent }
