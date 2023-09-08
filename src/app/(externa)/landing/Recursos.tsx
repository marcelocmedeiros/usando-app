import Recurso from "./Recurso";

export default function Recursos() {
	return (
		<div className="grid grid-cols-3 gap-5">
			<Recurso
				titulo="300x mais rapído"
				texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
				imagem="https://source.unsplash.com/featured/250x300?black,white,abstract"
			/>
			<Recurso
				titulo="Vanguarda em tecnologia"
				texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
				imagem="https://source.unsplash.com/featured/250x301?black,white,abstract"
			/>
			<Recurso
				titulo="Suporte 24/7"
				texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
				imagem="https://source.unsplash.com/featured/250x302?black,white,abstract"
			/>
			<Recurso
				titulo="Web Design Responsivo"
				texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
				imagem="https://source.unsplash.com/featured/250x299?black,white,abstract"
			/>
			<Recurso
				titulo="SEO Otimizado"
				texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
				imagem="https://source.unsplash.com/featured/250x298?black,white,abstract"
			/>
			<Recurso
				titulo="Yada yada yada"
				texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
				imagem="https://source.unsplash.com/featured/250x297?black,white,abstract"
			/>
		</div>
	);
}
