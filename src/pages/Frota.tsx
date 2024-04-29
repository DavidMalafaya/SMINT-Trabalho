import {
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonList,
	IonItem,
	IonCard,
	IonCardContent,
	IonImg,
	IonText,
  IonContent,
  IonButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { useState } from 'react';

// Import AnimatePresence 👇
import { AnimatePresence, motion } from 'framer-motion';
import { IonDatetime } from '@ionic/react';
import './Frota.css';

interface Post {
	id: string;
	image: string;
	name: string;
	description: string;
  Dados: string;
  price: string;
}

const Frota: React.FC = () => {
	const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

	const posts: Post[] = [
		{
			id: '1',
			image:'https://images.unsplash.com/photo-1563721923422-b8ab92f88ab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'SUV',
      description:'Aqui encontra-se a frota da nossa loja em Viana do Castelo cujo veículo mais vendido é o Mercedes GLE 350d 4MATIC que se encontra na imagem, no entanto pode não estar disponível, sendo entregue um veículo semelhante.',
      Dados:'Carro SUV com 4 portas, caixa manual e a gasolina',
      price: '300€/dia'
		},
		{
			id: '2',
			image:
				'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Desportivo',
      description:'A nossa frota no Porto é constituída por carros desportivos. O McLaren 570S foi o carro mais alugado em 2023 entre os carros desportivos e sempre obteve boas críticas dos clientes.',
      Dados:'Carro com 2 portas, caixa automática, gasolina',
      price: '1500€/dia'
		},
		{
			id: '3',
			image:'https://images.unsplash.com/photo-1666335009171-3ddc17937d6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Familiar',
      description:'De todas as nossas lojas o Renault Clio foi o carro mais alugado em 2023, é um carro muito comum entre os as famílias em Portugal.',
      Dados:'Carro com 4 portas, caixa manual, a diesel',
      price: '50€/dia'
		}
	];

	return (
		<IonPage>
			<IonHeader mode="ios">
				<IonToolbar mode="ios">
					<IonTitle>Frota</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<div className="content-container">
					<IonList mode="ios" className="ion-no-padding">
						{posts.map((post) => (
							<IonItem
								key={'card-' + post.id}
								mode="ios"
								lines="none"
								className="ion-no-padding ion-no-inner-padding"
							>
								<IonCard className="ion-no-padding" onClick={() => setSelectedPost(post)}>
									<motion.div className="card-content" layoutId={'card-' + post.id}>
										<motion.div layoutId={'image-container' + post.id}>
											<IonImg className="card-image" src={post.image} />
										</motion.div>
										<IonCardContent>
											<motion.div
												className="title-container"
												variants={{
													show: {
														opacity: 1,
														transition: {
															duration: 0.5,
															delay: 0.3
														}
													},
													hidden: {
														opacity: 0,
														transition: {
															duration: 0.1
														}
													}
												}}
												initial="show"
												animate={selectedPost?.id === post.id ? 'hidden' : 'show'}
											>
												<IonText>{post.name}</IonText>
											</motion.div>
										</IonCardContent>
									</motion.div>
								</IonCard>
							</IonItem>
						))}
					</IonList>

					<AnimatePresence>
						{selectedPost && (
							<motion.div
								className="popup-container"
								onClick={() => setSelectedPost(undefined)}
								layoutId={'card-' + selectedPost.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								<motion.div layoutId={'image-container' + posts.id}>
									<IonImg src={selectedPost.image} />
								</motion.div>
								{/* Add fade-in and slide-up animation 👇 */}
								<motion.div
									initial={{ opacity: 0, transform: 'translateY(20px)' }}
									animate={{
										opacity: 1,
										transform: 'translateY(0)',
										transitionDuration: '0.5s',
										transitionDelay: '0.15s'
									}}
								>
									<h1>{selectedPost.name}</h1>
								</motion.div>
								{/* Add fade in and fade out animation with some delay 👇 */}
								<motion.div
									initial={{ opacity: 0, transform: 'translateY(20px)' }}
									animate={{
										opacity: 1,
										transform: 'translateY(0)',
										transitionDuration: '0.5s',
										transitionDelay: '0.2s'
									}}
								>
                  <h2>{selectedPost.description}</h2>
                  <h3>{selectedPost.Dados}</h3>
                  <IonList>
                    <IonItem>
                      <IonSelect label="Carro Pretendido" placeholder='Escolha aqui as suas preferências' color="primary" multiple={true}>
                        <IonSelectOption value="Mercedes-Benz">Mercedes GLE 350d 4MATIC</IonSelectOption>
                        <IonSelectOption value="Audi">Volvo XC90</IonSelectOption>
                        <IonSelectOption value="BMW">BMW X5</IonSelectOption>
                        <IonSelectOption value="McLaren">McLaren 570S</IonSelectOption>
                        <IonSelectOption value="Ferrari">Ferrari 812 GTS</IonSelectOption>
                        <IonSelectOption value="Lamborghini">Lamborghini Huracan</IonSelectOption>
                        <IonSelectOption value="Renault">Renault Clio </IonSelectOption>
                        <IonSelectOption value="Ford">Ford Mondeo</IonSelectOption>
                        <IonSelectOption value="Volkswagen">Volkswagen Golf Variant</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                  </IonList>
                  <IonDatetime presentation="date" preferWheel={true}></IonDatetime>;
                  <h4>{selectedPost.price}</h4>
                  <IonButton>Alugar</IonButton>
									

								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Frota;