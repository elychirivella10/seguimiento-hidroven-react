import React from 'react'

const PanelCom = ({subTitleOne, generalContent, Extraer}) => {
	return (
		<nav className = "panel is-primary pt-4">		
			<div className='scrool small vh-maxx45 is-overflow-auto'>
			<p className = "panel-block is-justify-content-center">
				{subTitleOne}
			</p>

			{generalContent?
				generalContent.map((g, index)=>(
					<p key={index} className = "panel-block panel-block-item is-pointer" onClick={(e)=>{
						Extraer(g)
					}}>
						<span className = "panel-icon"> 
						<i className="fas fa-globe-americas" aria-hidden="true"></i>
						</span>
						<span>
							{g.nombre} <span>- {g.estado}</span>
						</span>
					</p>
				))
			:null}
			</div>
		</nav>
	)

}

export default PanelCom