import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = ({segundos}) => {
	let string = segundos.toString()
	let unidad = string[string.length -1]
	let decena = string[string.length -2]
	let centena = string[string.length -3]
	let unidadMil = string[string.length -4]

	return (
		<div className="text-center">
			<button className="btn btn-warning" ><i class="fa-regular fa-heart"></i></button>
			<button className="btn btn-warning">{ unidadMil==undefined? "0": unidadMil }</button>
			<button className="btn btn-warning">{ centena==undefined? "0": centena }</button>
			<button className="btn btn-warning">{ decena==undefined? "0": decena }</button>
			<button className="btn btn-warning">{ unidad==undefined? "0": unidad }</button>
		</div>
	);
};

export default SecondsCounter;
