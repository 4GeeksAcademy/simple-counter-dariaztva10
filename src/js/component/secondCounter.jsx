import React from "react";


//create your first component
const SecondCounter = (props) => {
	return (
		
				<div className="containar_principal row">
					<div className="container_icon col-lg-2 col-sm-12">
					<i class="far fa-clock"></i>
					</div>
					<div className="seis col">{props.seis % 10}</div>
					<div className="cinco col">{props.cinco % 10}</div>
					<div className="cuatro col">{props.cuatro % 10}</div>
					<div className="tres col">{props.tres % 10}</div>
					<div className="dos col">{props.dos % 10}</div>
					<div className="uno col">{props.unos % 10}</div>
				</div>
			
		
	);
};

export default SecondCounter;