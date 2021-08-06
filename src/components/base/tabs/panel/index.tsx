import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface TabsBodyProps extends BaseComponent<HTMLDivElement> {}

const TabsPanel: React.FC<TabsBodyProps> = props => {
	const { className, children, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'tabs-panel',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
}

export default TabsPanel
