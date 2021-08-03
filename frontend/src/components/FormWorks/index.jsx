import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from './styles';

const schema = yup.object().shape({
	name: yup.string().required().typeError('O seu nome é obrigatório'),
	email: yup.string().email().required(),
	phone: yup.string().required(),
	curriculo: yup.string().required(),
});

export function FormWorks() {
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
						placeholder="Nome"
						className={errors.name ? 'selected' : ''}
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

					<input {...register('curriculo')} type="file" accept=".pdf" />

					<input type="submit" />
				</form>
			</Container>
		</>
	);
}
