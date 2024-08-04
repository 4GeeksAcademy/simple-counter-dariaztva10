import React from "react";


//create your first component
const SecondCounter = (props) => {
	return (
		
				<div className="containar_principal row">
					<div className="container_icon col-9 col-lg-2 col-sm-9">
					<i class="far fa-clock"></i>
					</div>
					<div className="seis col-4 col-lg-1 col-sm-4">{props.seis % 10}</div>
					<div className="cinco col-4 col-lg-1 col-sm-4">{props.cinco % 10}</div>
					<div className="cuatro col-4 col-lg-1 col-sm-4">{props.cuatro % 10}</div>
					<div className="tres col-4 col-lg-1 col-sm-4">{props.tres % 10}</div>
					<div className="dos col-4 col-lg-1 col-sm-4">{props.dos % 10}</div>
					<div className="uno col-4 col-lg-1 col-sm-4">{props.unos % 10}</div>
				</div>
			
		
	);
};

export default SecondCounter;