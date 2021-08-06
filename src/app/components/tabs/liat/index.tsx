import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface TabsListProps extends BaseComponent<HTMLUListElement> {}

const TabsList: React.FC<TabsListProps> = props => {
	const { className, children, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'tabs-list',
		appendClassName: className
	})

	return (
		<ul className={computedClassName} {...attr}>
			{children}
		</ul>
	)
}
export default TabsList
