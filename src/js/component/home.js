import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<Card
				imageUrl="https://picsum.photos/500/325"
				title="Lorem"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus sem, auctor vel ante in, dictum tristique arcu. Praesent ornare nibh id congue vulputate. Nulla ultricies in ipsum a tristique. Maecenas accumsan in felis ut ultrices. Proin scelerisque consequat"
				buttonLabel="Go To"
				buttonUrl="https://es.wikipedia.org"
			/>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
