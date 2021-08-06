import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { CSSTransition } from 'react-transition-group'
import { useTabs } from '..'

interface TabsContentProps extends BaseComponent<HTMLDivElement> {
	id: string
}

const TabsContent: React.FC<TabsContentProps> = props => {
	const { id, className, children, ...attr } = props
	const { activeTab } = useTabs()

	const styles = useClassName({
		defaultClass: 'tabs-content',
		appendClassName: className
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
			<div className={styles} {...attr}>
				{children}
			</div>
		</CSSTransition>
	)
}

export default TabsContent
