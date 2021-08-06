import React, { createContext, useContext, useState } from 'react'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent, ClassName } from 'lib/types/component'

import TabsList from './liat'
import TabsItem from './item'
import TabsPanel from './panel'
import TabsContent from './contents'
import './styles.scss'

interface TabsProps extends BaseComponent<HTMLDivElement> {
	active: string
	className?: ClassName
}

const TabsStateContext = createContext<any>(null)
const TabsDispatchContext = createContext<any>(null)

const Tabs: React.FC<TabsProps> = React.memo(props => {
	const { active, className, children, ...attr } = props
	const [actionTab, setActionTab] = useState<string>(active || '1')

	const computedClassName = useClassName({
		defaultClass: 'tabs',
		appendClassName: className
	})

	return (
		<TabsStateContext.Provider value={actionTab}>
			<TabsDispatchContext.Provider value={setActionTab}>
				<div className={computedClassName} {...attr}>
					{children}
				</div>
			</TabsDispatchContext.Provider>
		</TabsStateContext.Provider>
	)
})

export const useTabs = () => {
	const activeTab = useContext(TabsStateContext)
	const setActiveTab = useContext(TabsDispatchContext)
	if (activeTab === null) throw new Error('Error Happend  in Tabs hook')
	if (!!setActiveTab === null) throw new Error('Error Happend  in Tabs hook')

	return { activeTab, setActiveTab }
}
export { Tabs, TabsList, TabsItem, TabsPanel, TabsContent }
