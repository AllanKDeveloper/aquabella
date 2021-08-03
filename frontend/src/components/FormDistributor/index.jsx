import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from './styles';

const schema = yup.object().shape({
	name: yup.string().required().typeError('O seu nome é obrigatório'),
	email: yup.string().email().required(),
	phone: yup.string().required(),
	message: yup.string().required(),
});

export function FormDistributor() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => console.log(data);

	return (
		<>
			<Container>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('name')}
						className={errors.name ? 'selected' : ''}
						placeholder="Nome Distribuidor"
					/>

					<input
						{...register('email')}
						placeholder="Email"
						className={errors.email ? 'selected' : ''}
					/>

					<input
						{...register('phone')}
						placeholder="Telefone"
						className={errors.phone ? 'selected' : ''}
					/>

					<textarea
						{...register('message')}
						placeholder="Mensagem"
						type="message"
						className={errors.message ? 'selected' : ''}
					/>

					<input type="submit" />
				</form>
			</Container>
		</>
	);
}
