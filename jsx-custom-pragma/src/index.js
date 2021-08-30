import myCreateFragment from './utils/myCreateFragment';

let arr = [1,2,3]

let AnotherComponent = () => (
	<>
		<div>Another Component</div>
	</>
)

let Component = function(props){
	return (
	<div>
		<p>
			Nested node
		</p>
		<ul>
			{arr.map(n => <li>{n}</li>)}
		</ul>
		<AnotherComponent></AnotherComponent>
	</div>
	)
}



document.getElementById('root').appendChild(<Component />)