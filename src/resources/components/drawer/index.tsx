import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { selectAppDrawer } from '../../../store/app/selectors'

import './styles.scss'

const Drawer = () => {
	const isOpenDrawer = useSelector(selectAppDrawer)
	return (
		<CSSTransition
			in={isOpenDrawer}
			timeout={300}
			classNames={{
				enter: 'hidden',
				enterActive: 'active',
				enterDone: 'active',
				exit: 'active',
				exitActive: 'hidden',
				exitDone: 'hidden'
			}}
			unmountOnExit
		>
			<div className="drawer">
				<div className="drawer-header">
					<div style={{ width: '400px', height: '1300px', background: 'red' }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt corrupti
						illo at animi quasi laudantium, quia optio odio praesentium quae natus? Quis
						fuga eveniet numquam. Ipsum voluptatibus beatae maiores voluptatum. Rerum sint
						quam illo iure voluptatum officiis doloremque eaque velit. Saepe doloribus
						quisquam sapiente consequatur velit? Vel animi dolorum tempore dolore
						praesentium? Ex earum explicabo optio, magnam perspiciatis veniam molestias?
						Consequuntur corrupti eaque illo eius cumque veritatis error id ab amet,
						eveniet, quaerat laudantium, voluptas ipsam cum atque qui sunt repellendus ex
						aliquid alias suscipit ratione pariatur! Voluptatem, dolorem maiores. Fuga
						distinctio in pariatur enim sequi natus adipisci maiores voluptas! Dolores
						asperiores repellendus ab quos eligendi esse obcaecati optio minima animi?
						Magni laboriosam perferendis maiores numquam vel optio accusamus non. Beatae,
						sit. Deleniti ratione error repellat consequuntur, quam libero maxime sequi ut
						ducimus quasi explicabo delectus, fugiat illum at? Quaerat quod sint quis quia
						maxime natus quos dolorum fugiat sunt! Inventore suscipit quibusdam fuga, nam
						quis rerum iusto molestiae cumque at aut perferendis cum nulla magni similique
						consequuntur autem recusandae, enim minus. Eum atque sed optio ipsa, minus
						maiores ratione? Earum nam repellat esse sunt ducimus quam cum illum illo
						mollitia temporibus suscipit assumenda dolore ullam itaque necessitatibus
						facere voluptas sit repudiandae exercitationem quo, molestias quae. Ipsam
						nulla voluptatibus laborum. Culpa voluptatibus quis temporibus assumenda,
						omnis error dicta rem modi quam. Asperiores officia aperiam nobis repellendus
						cupiditate, debitis rem accusantium laudantium fugit! Aut, assumenda. Dolore
						sapiente vel vero eius exercitationem. Veritatis laborum tempore cupiditate
						nihil ex sapiente, itaque quidem ab, odio consequatur iste dolor, maxime rerum
						at! Vitae quae temporibus sit qui odio, libero amet quis, id blanditiis,
						explicabo perspiciatis? Placeat dicta a praesentium explicabo ipsam
						laudantium? Debitis ipsum sequi doloremque autem, laboriosam ipsa. Dolor sed
						corporis nulla provident. Laudantium molestiae beatae recusandae magni odit
						quia dolorum itaque obcaecati earum.
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default Drawer
