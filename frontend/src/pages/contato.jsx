import { useState } from 'react';

import Image from 'next/image';
import Head from 'next/head';

import { Container, ContainerForm, Content } from '../styles/contato';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { FormWorks } from '../components/FormWorks';
import { FormProvider } from '../components/FormProvider';
import { FormDistributor } from '../components/FormDistributor';

import { getConfigurationsContent } from '../lib/api';

import imgArrow from '../assets/header/arrow.svg';
import imgMail from '../assets/footer/mail-blue.svg';
import imgPhone from '../assets/footer/phone-blue.svg';
import imgLoc from '../assets/footer/map.svg';

export default function contato({ configurations }) {
	const configurationItems = configurations.configuration;
	const [form, setForm] = useState('contact');

	function handleForm(values) {
		setForm(values);
	}

	return (
		<>
			<Head>
				<title>Aquabella | Contato</title>
			</Head>
			<Container>
				<header>
					<div className="wrap">
						<Navbar info="true" />
						<section>
							<div className="text">
								<span>FALE CONOSCO</span>
								<h1>Contato</h1>
							</div>
							<div className="img">
								<Image src={imgArrow} alt="Arrow" />
							</div>
						</section>
						<ContainerForm>
							<span>Seleciona abaixo a categoria desejada:</span>
							<header>
								<Button
									type="button"
									title="Entre em contato"
									width="17rem"
									onClick={() => {
										handleForm('contact');
									}}
									color={form === 'contact' ? '#00A2BC' : '#fff'}
									border="1.5px solid #fff"
									background={form === 'contact' ? '#fff' : ''}
								/>
								<Button
									type="button"
									title="Seja distribuidor"
									width="17rem"
									color={form === 'distributor' ? '#00A2BC' : '#fff'}
									border="1.5px solid #fff"
									onClick={() => {
										handleForm('distributor');
									}}
									background={form === 'distributor' ? '#fff' : ''}
								/>
								<Button
									type="button"
									title="Seja fornecedor"
									width="17rem"
									color={form === 'provider' ? '#00A2BC' : '#fff'}
									border="1.5px solid #fff"
									onClick={() => {
										handleForm('provider');
									}}
									background={form === 'provider' ? '#fff' : ''}
								/>
								<Button
									type="button"
									title="Trabalhe conosco"
									width="17rem"
									color={form === 'work' ? '#00A2BC' : '#fff'}
									border="1.5px solid #ffffff"
									onClick={() => {
										handleForm('work');
									}}
									background={form === 'work' ? '#fff' : ''}
								/>
							</header>
						</ContainerForm>
						{form === 'contact' ? <Form /> : ''}
						{form === 'work' ? <FormWorks /> : ''}
						{form === 'provider' ? <FormProvider /> : ''}
						{form === 'distributor' ? <FormDistributor /> : ''}
					</div>
				</header>
				<Content>
					<section>
						<div className="box1">
							<Image src={imgMail} />
							<p>{configurationItems.email}</p>
						</div>
						<aside className="linha" />
						<div className="box2">
							<Image src={imgPhone} />
							<p>{configurationItems.phone}</p>
						</div>
					</section>
					<div className="box-address">
						<div className="img">
							<Image src={imgLoc} />
						</div>
						<div className="address">
							<p>{configurationItems.address}</p>
						</div>
					</div>
				</Content>

				<iframe
					title="Localização Aquabella"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55924.917898128144!2d-51.81400000741133!3d-28.829707679029802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951dba3d4f8456df%3A0x5b180b346dfa1455!2sVista%20Alegre%20do%20Prata%20-%20RS%2C%2095325-000!5e0!3m2!1spt-BR!2sbr!4v1626199526792!5m2!1spt-BR!2sbr"
					loading="lazy"
					allowtransparency="true"
					style={{ background: '#ffffff' }}
				/>

				<Footer margin="-25rem" />
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const configurations = (await getConfigurationsContent()) || [];
	return {
		props: {
			configurations,
		},
		revalidate: 10, // In seconds
	};
}
