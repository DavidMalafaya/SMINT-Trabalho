import React, { ReactNode, useState } from 'react';
import { 
  IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
  IonModal, IonButtons, IonLabel, IonInput, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent,
  IonDatetime,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonImg
} from '@ionic/react';
import '@ionic/react/css/core.css';
import './Frota.css'

// Exemplo de posts
const posts = [
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


const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<{
	  price: ReactNode;
	  description: ReactNode;
	  Dados: ReactNode; id: number, title: string, content: string 
} | null>(null);
  const [name, setName] = useState('');

  const handleOpenModal = (post: { id: number, title: string, content: string }) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Frota</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {posts.map(post => (
          <IonCard key={post.id}>
            <IonCardHeader>
        	  <IonCardTitle color={'primary'}>{post.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
			<IonImg src={post.image} />
              <IonButton onClick={() => handleOpenModal(post)}>Detalhes</IonButton>
            </IonCardContent>
          </IonCard>
        ))}
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Detalhes Frota</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Fechar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {selectedPost && (
              <>
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
                  <IonDatetime presentation="date" preferWheel={true}></IonDatetime>                   <IonDatetime presentation="date" preferWheel={true}></IonDatetime>

                  <h4>{selectedPost.price}</h4>

                <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
                <IonButton id="open-modal" onClick={() => {
                  console.log(name);
                }}>Alugar</IonButton>
                  <IonModal
          trigger="open-modal" 
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75]}
          handleBehavior="cycle"
        >
          <IonContent className="ion-padding">
            <div className="ion-margin-top">
              <IonLabel>Aluguer Completo!
                Mais Detalhes serão enviados para o seu email.
              </IonLabel>
            </div>
          </IonContent>
        </IonModal>
              </>
            )}
          </IonContent>
        </IonModal>
      </IonContent>
    </IonApp>
  );
};

export default App;
