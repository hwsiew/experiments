import { useEffect, useState } from "react";

export default function Home(){	

	let [test, setTest] = useState('aaa');

	useEffect(() => {
		fetch('http://localhost')
			.then(response => response.json())
			.then(data => setTest(data));
	}, []);

	return <h2>Home {test}</h2>;
}