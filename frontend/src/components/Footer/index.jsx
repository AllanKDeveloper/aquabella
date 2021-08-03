import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';

import line from '../../assets/products/linha.svg';
import logoMacaw from '../../assets/footer/logo-macaw.svg';
import map from '../../assets/footer/map.svg';
import message from '../../assets/footer/message.svg';
import phone from '../../assets/footer/phone.svg';
import logoFb from '../../assets/footer/facebookIcon.png';
import logoInsta from '../../assets/footer/instagramIcon.png';
import logoWhite from '../../assets/footer/logo-white.svg';
import folha from '../../assets/footer/folha-footer.png';

export function Footer(props) {
	return (
		<>
			<Container margin={props.margin}>
				<div className="wrap">
					<div className="divFolha">
						<Image src={folha} />
					</div>
					<div className="header">
						<aside>
							<div className="img-logo">
								<Image src={logoWhite} />
							</div>
							<div>
								<Image src={map} layout="fixed" width={25} height={25} />
								<span>
									Rua Linha General Osório, 1001{' '}
									<p>Bairro Capela - Santo Antônio</p>
									<p>Vista Alegre do Prata/RS – CEP 95325-000</p>
								</span>
							</div>
							<div>
								<Image src={message} layout="fixed" width={25} height={25} />
								<p>contato@aguaaquabela.com.br</p>
							</div>
							<div>
								<Image src={phone} layout="fixed" width={25} height={25} />
								<p>(54) 3022.2222</p>
							</div>
						</aside>
					</div>
					<div className="line">
						<Image src={line} />
					</div>
					<section className="list">
						<div className="div-dl">
							<dl>
								<dt>
									<Link href="/">
										<a>Home</a>
									</Link>
								</dt>
							</dl>
							<dl>
								<dt>
									<Link href="/">
										<a>Produtos</a>
									</Link>
								</dt>
							</dl>
							<dl>
								<dt>
									<Link href="/">
										<a>Sobre</a>
									</Link>
								</dt>
								<dd>
									<Link href="/">
										<a>A Aquabella</a>
									</Link>
								</dd>
								<dd>
									<Link href="/">
										<a>A origem</a>
									</Link>
								</dd>
							</dl>
							<dl>
								<dt>
									<Link href="/">
										<a>Onde encontrar</a>
									</Link>
								</dt>
							</dl>
							<dl>
								<dt>
									<Link href="/">
										<a>Contato</a>
									</Link>
								</dt>
								<dd>
									<Link href="/">
										<a>Entre em contato</a>
									</Link>
								</dd>
								<dd>
									<Link href="/">
										<a>Seja distribuidor</a>
									</Link>
								</dd>
								<dd>
									<Link href="/">
										<a>Seja fornecedor</a>
									</Link>
								</dd>
								<dd>
									<Link href="/">
										<a>Trabalhe conosco</a>
									</Link>
								</dd>
							</dl>
						</div>
						<div className="sociais">
							<a className="hover__sociais">
								<Image src={logoFb} />
							</a>
							<a className="hover__sociais">
								<Image src={logoInsta} />
							</a>
						</div>
					</section>
					<div className="imgMacaw">
						<a
							href="https://www.macawbrasil.com.br/"
							target="_blank"
							rel="noreferrer"
							className="macaw"
						>
							<Image src={logoMacaw} alt="Macaw Marketing" />
						</a>
					</div>
				</div>
			</Container>
		</>
	);
}
