import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { useTabs } from '..'

interface TabsItemProps extends BaseComponent<HTMLLIElement> {
	id: string
	title: string
}

const TabsItem: React.FC<TabsItemProps> = props => {
	const { className, id, title, children, ...attr } = props

	const { activeTab, setActiveTab } = useTabs()

	const computedClassName = useClassName({
		defaultClass: 'tabs-link',
		optionalClass: {
			active: activeTab === id
		},
		appendClassName: className
	})

	const handleChangeTab = () => {
		setActiveTab(id)
	}
	return (
		<li className="tabs-item" onClick={handleChangeTab} {...attr}>
			<span className={computedClassName}>{title}</span>
		</li>
	)
}

export default TabsItem
