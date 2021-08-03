import { Btn1, Btn2 } from './styles';

export function Button({ ...props }) {
	return (
		<>
			{props.infos === 'true' ? (
				<Btn2 {...props} className={props.classMobile}>
					{props.title}
				</Btn2>
			) : (
				<Btn1 {...props} className={props.selected}>
					{props.title}
				</Btn1>
			)}
		</>
	);
}
